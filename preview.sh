#!/bin/bash
set -e

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PREVIEW_PORT=4000

while lsof -nP -iTCP:"$PREVIEW_PORT" -sTCP:LISTEN >/dev/null 2>&1; do
  PREVIEW_PORT=$((PREVIEW_PORT + 1))
done

echo "Starting Jekyll server..."
echo "Your site will be available at http://localhost:$PREVIEW_PORT"
echo ""
echo "✓ The server will automatically rebuild when you change files"
echo "✓ Just keep this running and refresh your browser to see updates"
echo "✓ Press Ctrl+C to stop the server"
echo ""

docker run --rm \
  --platform linux/amd64 \
  -p "$PREVIEW_PORT":"$PREVIEW_PORT" \
  -v "$PROJECT_DIR":/srv/jekyll \
  -w /srv/jekyll \
  jekyll/jekyll:3.8 \
  jekyll serve \
    --host 0.0.0.0 \
    --port "$PREVIEW_PORT" \
    --destination /tmp/jekyll-site \
    --force_polling
