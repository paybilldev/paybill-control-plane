#!/bin/sh
set -e

ORIGINAL_ENTRYPOINT="/usr/local/bin/docker-entrypoint.sh"

if [ ! -x "$ORIGINAL_ENTRYPOINT" ]; then
  echo "[password-sync] original entrypoint not found" >&2
  exit 1
fi

"$ORIGINAL_ENTRYPOINT" "$@" &
pid=$!

trap 'kill -TERM "$pid" 2>/dev/null || true' INT TERM

READY_HOST="127.0.0.1"
READY_PORT="${POSTGRES_PORT:-5432}"

until pg_isready -U "${POSTGRES_USER:-postgres}" -h "$READY_HOST" -p "$READY_PORT" >/dev/null 2>&1; do
  sleep 1
done

if [ -n "${POSTGRES_PASSWORD:-}" ]; then
  SYNC_URL="${PLATFORM_DB_SUPERUSER_URL:-postgresql://platform_admin:${POSTGRES_PASSWORD}@${READY_HOST}:${READY_PORT}/postgres}"
  if psql "$SYNC_URL" -v ON_ERROR_STOP=1 -c "ALTER USER postgres WITH PASSWORD '${POSTGRES_PASSWORD}'" >/dev/null 2>&1; then
    echo "[password-sync] postgres password synchronized from env"
  else
    echo "[password-sync] warning: failed to synchronize postgres password" >&2
  fi
fi

wait "$pid"
