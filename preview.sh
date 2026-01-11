#!/bin/bash
# Script to preview your Jekyll site locally

echo "Starting Jekyll server..."
echo "Your site will be available at http://localhost:4000"
echo ""
echo "✓ The server will automatically rebuild when you change files"
echo "✓ Just keep this running and refresh your browser to see updates"
echo "✓ Press Ctrl+C to stop the server"
echo ""

docker run --rm -p 4000:4000 -v "$(pwd)":/srv/jekyll jekyll/jekyll:3.8 jekyll serve --host 0.0.0.0
