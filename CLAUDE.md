# artesanato Development Guidelines

Auto-generated from all feature plans. Last updated: 2026-04-13

## Active Technologies
- TypeScript (full-stack) + NestJS (backend), Next.js (frontend), Prisma ORM, Playwright MCP, Stitch MCP (001-artisan-showcase)
- PostgreSQL (data) + cloud image repository (images) (001-artisan-showcase)

- **Frontend**: Next.js (App Router) + TypeScript
- **Backend**: NestJS + TypeScript
- **Database**: PostgreSQL + Prisma ORM
- **Testing**: Playwright MCP (E2E), NestJS/Jest (unit/integration)
- **Design**: MCP Stitch (UI/UX), Tailwind CSS (styling), DaisyUI (components)
- **Images**: FileSystem (local) v1 - `/uploads/categorias/` and `/uploads/produtos/`

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
- 001-artisan-showcase: Added TypeScript (full-stack) + NestJS (backend), Next.js (frontend), Prisma ORM, Playwright MCP, Stitch MCP

- 001-artisan-showcase: Next.js frontend, NestJS backend, PostgreSQL/Prisma, Playwright MCP, MCP Stitch design, Tailwind CSS, DaisyUI

<!-- MANUAL ADDITIONS START -->
<!-- MANUAL ADDITIONS END -->
