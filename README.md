# SEBAPL Stack

> Svelte Elysia Better-Auth Polar Localization

A modern stack for building applications. Built with SvelteKit, ElysiaJS, Prisma, Better-Auth, TailwindCSS, and DaisyUI.

## Tech Stack

- **Frontend**: SvelteKit, TailwindCSS, DaisyUI, TypeScript
- **Backend**: ElysiaJS, Bun runtime, Better-Auth
- **Database**: PostgreSQL with Prisma ORM
- **Cache**: Redis
- **Payments**: Polar.sh integration
- **Deployment**: Docker, Sherpa.sh (frontend)

## Development Setup

### Prerequisites

- [Bun](https://bun.sh/) (latest version)
- [Docker](https://www.docker.com/) and Docker Compose
- [Node.js](https://nodejs.org/) (for some tooling compatibility)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/crqch/sebapl <your_project_name>
   cd <your_project_name>
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Start development databases**
   ```bash
   docker-compose -f docker-compose.dev.yml up -d
   ```

4. **Set up environment variables**
   ```bash
   # Copy environment template
   cp .env.example .env
   # Edit .env with your configuration
   ```

5. **Run database migrations**
   ```bash
   bun run prisma:migrate
   ```

6. **Start development servers**
   ```bash
   # Start both frontend and backend
   bun run dev

   # Or start individually
   bun run dev:server  # Backend on http://localhost:3000
   bun run dev:client  # Frontend on http://localhost:5173
   ```

### Development Database Setup

The development setup uses Docker Compose to run PostgreSQL and Redis locally:

```bash
# Start databases
docker-compose -f docker-compose.dev.yml up -d

# Stop databases
docker-compose -f docker-compose.dev.yml down

# View database logs
docker-compose -f docker-compose.dev.yml logs postgres

# Access PostgreSQL directly
docker-compose -f docker-compose.dev.yml exec postgres psql -U lockin_user -d lockin_dev
```

### Database Management

```bash
# Generate Prisma client
bun run prisma:generate

# Run migrations in development
bun run prisma:migrate

# Open Prisma Studio
bun run prisma:studio

# Reset database (development only)
cd packages/server && bun prisma migrate reset
```

### Available Scripts

```bash
# Development
bun run dev              # Start both frontend and backend
bun run dev:client       # Start frontend only
bun run dev:server       # Start backend only

# Database
bun run prisma:generate  # Generate Prisma client
bun run prisma:migrate   # Run database migrations
bun run prisma:studio    # Open Prisma Studio
bun run prisma:migrate:prod  # Run production migrations

# Cleanup
bun run clean           # Remove all node_modules
```

## Production Deployment

### Docker Deployment

1. **Create production environment file**
   ```bash
   cp .env.example .env
   # Edit .env with your production values
   ```

2. **Build and deploy with Docker Compose**
   ```bash
   docker-compose -f docker-compose.prod.yml up -d
   ```

3. **Run production migrations**
   ```bash
   docker-compose -f docker-compose.prod.yml exec backend bun prisma migrate deploy
   ```

### Deployment Options

#### Recommended: Railway/Render
- Simple deployment with managed databases
- Auto-scaling and monitoring included
- Cost-effective for small to medium applications

#### VPS Deployment
- Full control over infrastructure
- Use Docker Compose with reverse proxy (Nginx/Traefik)
- Manual scaling and management required

#### Cloud Providers
- AWS ECS/Fargate, Google Cloud Run, Azure Container Instances
- Enterprise-grade with extensive services
- Higher complexity but maximum scalability

### Frontend Deployment (Sherpa.sh)

The frontend is designed to be deployed as a static site on Sherpa.sh:

```bash
# Build for production
cd packages/client
bun run build

# The build output in packages/client/build/ can be deployed to Sherpa.sh
```

## Environment Variables

### Root Environment Variables (.env)
```bash
# Database
DATABASE_URL=postgresql://sebapl_user:sebapl_password@localhost:5432/sebapl_dev
POSTGRES_DB=sebapl_dev
POSTGRES_USER=sebapl_user
POSTGRES_PASSWORD=sebapl_password

# Redis
REDIS_URL=redis://localhost:6379
REDIS_PASSWORD=your_redis_password_here

# Application
NODE_ENV=development
PORT=3000
BASE_URL=http://localhost:3000
BETTER_AUTH_SECRET=your_secret_here
SESSION_SECRET=your_session_secret_here

# Authentication
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
DISCORD_CLIENT_ID=your_discord_client_id
DISCORD_CLIENT_SECRET=your_discord_client_secret

# Payments
POLAR_ACCESS_TOKEN=your_polar_access_token
```

### Server-Specific Environment (packages/server/.env)
For development, you may also want server-specific overrides:
```bash
# Development database (if different from root)
DATABASE_URL=postgresql://sebapl_user:sebapl_password@localhost:5432/sebapl_dev

# Development-specific settings
NODE_ENV=development
PORT=3000
```

## Project Structure

```
sebapl/
├── packages/
│   ├── client/          # SvelteKit frontend
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── routes/
│   │   │   ├── lib/
│   │   │   └── stores/
│   │   └── static/
│   ├── server/          # ElysiaJS backend
│   │   ├── src/
│   │   │   ├── routes/
│   │   │   ├── lib/
│   │   │   └── db/
│   │   └── prisma/
│   └── shared/          # Shared types and utilities
├── docker-compose.dev.yml
├── docker-compose.prod.yml
└── Dockerfile
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
