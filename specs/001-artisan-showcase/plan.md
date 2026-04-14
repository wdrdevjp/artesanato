# Implementation Plan: Artesanato Showcase

**Branch**: `[001-artisan-showcase]` | **Date**: 2026-04-13 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-artisan-showcase/spec.md`

## Summary

Website to showcase artisan products with:
- **Landpage**: Floating carousel displaying category images with 3s auto-transition + manual controls
- **Category Pages**: Dynamic product cards with auto-rotating images and marketplace selector (Shopee, Mercado Livre, WhatsApp)
- **Admin Area**: Full CRUD for categories and products (PostgreSQL storage)
- **Images**: Stored in cloud repository (S3/Cloudinary), accessed via URL

## Technical Context

**Language/Version**: TypeScript (full-stack)  
**Primary Dependencies**: NestJS (backend), Next.js (frontend), Prisma ORM, Playwright MCP  
**Storage**: PostgreSQL (data) + cloud image repository (images)  
**Testing**: NestJS built-in testing, Playwright MCP for E2E  
**Target Platform**: Web browser (desktop/mobile responsive)  
**Project Type**: Full-stack web application (monorepo)  
**Performance Goals**: Page load ≤3s, Lighthouse 90+  
**Constraints**: Bundle size ≤250KB gzipped, WCAG 2.1 AA accessibility  
**Scale/Scope**: Single admin user, small product catalog (<500 items)  
**Design System**: MCP Stitch for UI/UX design generation

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

Per the Artesanato Constitution, all plans MUST satisfy:

- **Beleza & UX** (Principle I): ✅ Floating carousel effect with smooth transitions; responsive product cards; WhatsApp last in marketplace selector; MCP Stitch for design system
- **Desempenho** (Principle II): ✅ Static pages served; dynamic content loaded via API; image lazy-loading strategy defined
- **Automacao de Testes** (Principle III): ✅ NestJS testing utilities; Playwright MCP E2E coverage for critical flows
- **Codigo Limpo** (Principle IV): ✅ NestJS module-based architecture; Next.js App Router structure; no excessive complexity
- **Deploy Leve** (Principle V): ✅ Minimal dependencies; frontend bundle budget; fast deploy pipeline
- **Idioma PT-BR** (Principle VI): ✅ All UI text, code identifiers, and documentation in Brazilian Portuguese

## Project Structure

### Documentation (this feature)

```text
specs/001-artisan-showcase/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output (API contracts)
└── tasks.md             # Phase 2 output (/speckit.tasks)
```

### Source Code (repository root)

```text
apps/
├── backend/                     # NestJS API
│   ├── src/
│   │   ├── categoras/          # Categoria module
│   │   ├── produtos/           # Produto module
│   │   ├── administradores/     # Administrador module
│   │   ├── auth/               # Authentication module
│   │   ├── upload/             # Image upload module
│   │   └── common/             # Shared utilities, filters, guards
│   ├── test/
│   └── package.json
│
└── frontend/                    # Next.js App
    ├── app/                    # App Router pages
    │   ├── page.tsx            # Landpage com carrosel
    │   ├── categorias/[id]/   # Página de categoria
    │   └── admin/              # Área gerencial (CRUD)
    ├── components/             # Reusable UI components
    ├── lib/                    # API client, utils
    └── package.json

packages/
└── shared/                      # Shared types and contracts
```

**Structure Decision**: Monorepo with separate apps (backend/frontend). NestJS handles REST API with PostgreSQL via Prisma. Next.js App Router renders pages dynamically from API data. MCP Stitch generates UI components based on design system. Admin area protected by session-based authentication via NestJS Auth module.

## Complexity Tracking

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|---------------------------------------|
| NestJS vs Express | Structured module system, dependency injection, built-in testing, guards/filters | Express is less opinionated; NestJS provides consistency for larger feature set |
| Monorepo structure | Shared types between frontend/backend; unified tooling | Separate repos add coordination overhead for small project |
| Cloud image storage | Images must be accessible via URL; local storage doesn't scale | [N/A - no simpler alternative sufficient] |

## Phase 0: Research Required

The following items need research to resolve technical decisions:

1. **Image upload flow**: Direct upload to S3/Cloudinary vs NestJS backend proxy upload
2. **Authentication approach**: Session-based vs JWT for admin area within NestJS
3. **MCP Stitch integration**: How to connect Stitch design system to Next.js component generation

*Research.md will be generated to document findings and decisions.*
