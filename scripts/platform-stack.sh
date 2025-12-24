#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SOURCE_ENV="$ROOT_DIR/docker/.env.platform.example"
DEST_ROOT="$ROOT_DIR/.env"
DEST_DOCKER="$ROOT_DIR/docker/.env"
COMPOSE_FILES=(-f "$ROOT_DIR/docker/docker-compose.yml" -f "$ROOT_DIR/docker/docker-compose.platform.yml")

usage() {
  cat <<'EOF'
Usage: platform-stack.sh [command] [options]

Commands (default: up):
  up             Sync env files and run docker compose up -d
  down           docker compose down --remove-orphans
  reset          docker compose down -v --remove-orphans and wipe platform DB bind mounts

Options:
  --build              Pass --build to docker compose up
  --force-recreate     Pass --force-recreate to docker compose up
  --dry-run            Show the docker compose command without executing (up only)
  -h, --help           Show this help message

Examples:
  scripts/platform-stack.sh                   # sync env + up -d
  scripts/platform-stack.sh up --build        # rebuild images and start
  scripts/platform-stack.sh reset             # full reset of containers + volumes
  scripts/platform-stack.sh down              # stop containers
EOF
}

ACTION="up"
COMPOSE_FLAGS=()
DRY_RUN=false

while [[ $# -gt 0 ]]; do
  case "$1" in
    up|down|reset)
      ACTION="$1"
      ;;
    --build)
      COMPOSE_FLAGS+=(--build)
      ;;
    --force-recreate)
      COMPOSE_FLAGS+=(--force-recreate)
      ;;
    --dry-run)
      DRY_RUN=true
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      echo "Unknown option: $1" >&2
      usage
      exit 1
      ;;
  esac
  shift
done

sync_env() {
  if [[ ! -f "$SOURCE_ENV" ]]; then
    echo "Platform env template not found at $SOURCE_ENV" >&2
    exit 1
  fi

  cp "$SOURCE_ENV" "$DEST_ROOT"
  cp "$SOURCE_ENV" "$DEST_DOCKER"
  echo "Env synced -> $DEST_ROOT, $DEST_DOCKER"
}

extract_env_val() {
  local key="$1"
  local line
  line=$(grep -E "^${key}=" "$SOURCE_ENV" | tail -n 1 || true)
  if [[ -z "$line" ]]; then
    echo ""
    return
  fi
  echo "${line#${key}=}" | sed 's/^"\(.*\)"$/\1/'
}

validate_env() {
  local errors=()

  local postgres_password
  postgres_password=$(extract_env_val "POSTGRES_PASSWORD")
  if [[ -z "$postgres_password" ]]; then
    errors+=("POSTGRES_PASSWORD must not be empty")
  fi

  local vault_key
  vault_key=$(extract_env_val "VAULT_ENC_KEY")
  if [[ ${#vault_key} -lt 32 ]]; then
    errors+=("VAULT_ENC_KEY must be at least 32 characters")
  fi

  local orchestrator_token
  orchestrator_token=$(extract_env_val "PLATFORM_ORCHESTRATOR_TOKEN")
  if [[ -z "$orchestrator_token" ]]; then
    errors+=("PLATFORM_ORCHESTRATOR_TOKEN must be set")
  fi

  if [[ ${#errors[@]} -gt 0 ]]; then
    echo "Environment validation failed:"
    for err in "${errors[@]}"; do
      echo "  - $err"
    done
    exit 1
  fi
}

wipe_bind_mounts() {
  local bind_mounts=("$ROOT_DIR/docker/volumes/db/data")
  for dir in "${bind_mounts[@]}"; do
    if [[ -d "$dir" ]]; then
      echo "Removing $dir"
      rm -rf "$dir"
    fi
  done
}

run_compose() {
  local cmd=(docker compose "${COMPOSE_FILES[@]}" "$@")
  echo "Running: ${cmd[*]}"
  if [[ "$DRY_RUN" == true ]]; then
    return 0
  fi
  "${cmd[@]}"
}

compose_up() {
  local args=(up -d)
  if [[ ${#COMPOSE_FLAGS[@]} -gt 0 ]]; then
    args+=("${COMPOSE_FLAGS[@]}")
  fi
  run_compose "${args[@]}"
}

wait_for_postgres() {
  if [[ "$DRY_RUN" == true ]]; then
    return 0
  fi
  for attempt in {1..30}; do
    if docker compose "${COMPOSE_FILES[@]}" exec -T db pg_isready -U postgres >/dev/null 2>&1; then
      return 0
    fi
    sleep 2
  done
  echo "Postgres did not become ready in time" >&2
  return 1
}

case "$ACTION" in
  up)
    validate_env
    sync_env
    compose_up
    wait_for_postgres
    ;;
  down)
    run_compose down --remove-orphans
    ;;
  reset)
    run_compose down -v --remove-orphans
    wipe_bind_mounts
    validate_env
    sync_env
    compose_up
    wait_for_postgres
    ;;
esac
