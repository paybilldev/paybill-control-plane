#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
ENV_FILE="$ROOT_DIR/apps/platform/.env.platform"

if [[ ! -f "$ENV_FILE" ]]; then
  echo "Platform env file not found at $ENV_FILE" >&2
  exit 1
fi

set -a
source "$ENV_FILE"
set +a

export NODE_OPTIONS="${NODE_OPTIONS:---max_old_space_size=14336}"

cd "$ROOT_DIR"

pnpm --filter platform exec next build
