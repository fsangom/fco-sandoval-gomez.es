#!/usr/bin/env bash
set -euo pipefail

ZOLA_VERSION=${ZOLA_VERSION:-0.21.0}

echo "Building site..."
zola build "$@"
echo "Build complete!"
