#!/bin/sh

set -e

echo "Waiting for database to be ready..."
until bun prisma db push --accept-data-loss; do
  echo "Database is unavailable - sleeping"
  sleep 2
done

echo "Running database migrations..."
bun prisma migrate deploy

echo "Starting application..."
exec bun run src/main.ts