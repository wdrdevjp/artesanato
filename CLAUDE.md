# artesanato Development Guidelines

Auto-generated from all feature plans. Last updated: 2026-04-13

## Active Technologies

- **Frontend**: Next.js (App Router) + TypeScript
- **Backend**: NestJS + TypeScript
- **Database**: PostgreSQL + Prisma ORM
- **Testing**: Playwright MCP (E2E), NestJS/Jest (unit/integration)
- **Design**: MCP Stitch (UI/UX design system)
- **Images**: Cloud storage (S3/Cloudinary)

## Project Structure

```text
apps/
├── backend/              # NestJS API
│   ├── src/
│   │   ├── categorias/
│   │   ├── produtos/
│   │   ├── auth/
│   │   └── upload/
│   └── test/
│
└── frontend/              # Next.js App
    ├── app/
    ├── components/
    └── e2e/

packages/
└── shared/                # Shared types
```

## Commands

```bash
npm run dev        # Development (backend + frontend)
npm run build      # Production build
npm run test       # Unit + integration tests
npm run test:e2e   # Playwright E2E tests
npm run lint       # Code style check
```

## Code Style

- TypeScript throughout (full-stack)
- Brazilian Portuguese for UI text, variables, comments
- NestJS module pattern for backend architecture
- Next.js App Router for frontend routing

## Recent Changes

- 001-artisan-showcase: Next.js frontend, NestJS backend, PostgreSQL/Prisma, Playwright MCP, MCP Stitch design

<!-- MANUAL ADDITIONS START -->
<!-- MANUAL ADDITIONS END -->
