FROM oven/bun:1-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json bun.lockb ./
COPY packages/server/package.json ./packages/server/
COPY packages/shared/package.json ./packages/shared/
RUN bun install --frozen-lockfile --production

# Build application
FROM base AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN cd packages/server && bun prisma generate
RUN bun run build

# Production image
FROM base AS runner
WORKDIR /app

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 bun

# Copy built application
COPY --from=builder --chown=bun:nodejs /app/packages/server/dist ./
COPY --from=builder --chown=bun:nodejs /app/packages/server/prisma ./prisma
COPY --from=deps --chown=bun:nodejs /app/node_modules ./node_modules

USER bun

EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/ || exit 1

# Migration and startup script
COPY --chown=bun:nodejs packages/server/docker-entrypoint.sh ./
RUN chmod +x docker-entrypoint.sh

ENTRYPOINT ["./docker-entrypoint.sh"]
