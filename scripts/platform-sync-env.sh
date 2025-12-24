#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SOURCE_ENV="$ROOT_DIR/docker/.env.platform.example"
DEST_ROOT="$ROOT_DIR/.env"
DEST_DOCKER="$ROOT_DIR/docker/.env"

if [[ ! -f "$SOURCE_ENV" ]]; then
  echo "Source env template not found at $SOURCE_ENV" >&2
  exit 1
fi

cp "$SOURCE_ENV" "$DEST_ROOT"
cp "$SOURCE_ENV" "$DEST_DOCKER"

echo "Synced platform env to $DEST_ROOT and $DEST_DOCKER"
