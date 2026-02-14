#!/bin/bash
set -e

# ============================================================
# QuickCart E-Commerce — EC2 Deployment Script
# This script runs ON the EC2 instance to deploy/update the app
# ============================================================

APP_DIR="/home/ubuntu/Ecommerce"
REPO_URL="https://github.com/$(cd "$APP_DIR" 2>/dev/null && git remote get-url origin 2>/dev/null | sed 's#.*github.com[:/]##;s#\.git$##' || echo 'OWNER/REPO')"
BRANCH="main"
HEALTH_URL="http://localhost/api/health"
MAX_RETRIES=10
RETRY_INTERVAL=5

echo "========================================="
echo "  QuickCart Deployment — $(date)"
echo "========================================="

# ── 1. Clone or pull the repository ──────────────────────────
if [ -d "$APP_DIR/.git" ]; then
    echo "→ Pulling latest changes from $BRANCH..."
    cd "$APP_DIR"
    git fetch origin
    git reset --hard "origin/$BRANCH"
else
    echo "→ Cloning repository..."
    git clone -b "$BRANCH" "$REPO_URL" "$APP_DIR"
    cd "$APP_DIR"
fi

echo "→ Current commit: $(git log -1 --oneline)"

# ── 2. Build & deploy with Docker Compose ────────────────────
echo ""
echo "→ Stopping existing containers..."
docker compose down --remove-orphans 2>/dev/null || true

echo "→ Building and starting containers..."
docker compose up -d --build

# ── 3. Cleanup old images ────────────────────────────────────
echo ""
echo "→ Cleaning up dangling images..."
docker image prune -f

# ── 4. Health check ──────────────────────────────────────────
echo ""
echo "→ Waiting for application to become healthy..."
for i in $(seq 1 $MAX_RETRIES); do
    if curl -sf "$HEALTH_URL" > /dev/null 2>&1; then
        echo "✓ Application is healthy!"
        echo ""
        echo "========================================="
        echo "  Deployment successful!"
        echo "  App running at http://$(curl -sf ifconfig.me 2>/dev/null || echo 'EC2_IP'):80"
        echo "========================================="
        exit 0
    fi
    echo "  Attempt $i/$MAX_RETRIES — waiting ${RETRY_INTERVAL}s..."
    sleep $RETRY_INTERVAL
done

echo "✗ Health check failed after $MAX_RETRIES attempts"
echo "→ Container logs:"
docker compose logs --tail=30
exit 1
