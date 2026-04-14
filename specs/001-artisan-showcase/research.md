# Research: Artesanato Showcase

## Decision 1: Frontend Framework

**Decision**: Next.js (App Router)

**Rationale**:
- App Router provides server-side rendering for faster initial page loads (≤3s target)
- Built-in image optimization with next/image
- API routes can proxy backend calls reducing CORS complexity
- TypeScript first-class support
- MCP Stitch can generate Next.js compatible components

**Alternatives considered**:
- Vite + React SPA: Simpler but lacks SSR; worse SEO and initial load
- Nuxt.js: Vue-based; good alternative but Next.js has larger ecosystem

---

## Decision 2: Backend Framework

**Decision**: NestJS

**Rationale**:
- Module-based architecture enforces separation of concerns (Categorias, Produtos, Auth)
- Built-in dependency injection for testable services
- Guards and Filters provide consistent auth/error handling
- Prisma integrates well via @prisma/nestjs
- TypeScript first-class support

**Alternatives considered**:
- Express.js: More flexible but requires manual structure; no DI
- Fastify: Faster but less mature ecosystem for TypeScript
- AdonisJS: Good alternative but smaller community

---

## Decision 3: Image Upload Flow

**Decision**: NestJS backend proxy upload to cloud storage

**Rationale**:
- Backend can validate file types and sizes before upload
- Environment credentials stay secure on server
- Simpler CORS configuration
- Admin uploads via multipart form directly to NestJS controller

**Alternatives considered**:
- Direct upload to S3 (pre-signed URLs): More complex, requires additional AWS SDK setup
- Cloudinary direct upload: Vendor lock-in, but excellent transformation API

---

## Decision 4: Authentication Approach

**Decision**: Session-based authentication with @nestjs/passport

**Rationale**:
- Session stored in PostgreSQL via connect-pg-simple for persistence
- HttpOnly cookies prevent XSS attacks
- NestJS guards protect admin routes consistently
- Sufficient for single-admin use case

**Alternatives considered**:
- JWT in cookies: Stateless but more complex token refresh
- Passport local strategy: Overkill for single admin credential

---

## Decision 5: Database Access

**Decision**: Prisma ORM

**Rationale**:
- Type-safe queries with TypeScript
- Migration system for schema evolution
- Simple PostgreSQL integration
- Good developer experience with NestJS

**Alternatives considered**:
- TypeORM: Slower performance, more complex configuration
- Drizzle: Faster but smaller ecosystem
- Raw SQL (pg): No type safety, harder to maintain

---

## Decision 6: Testing Strategy

**Decision**: NestJS testing utilities + Playwright MCP for E2E

**Rationale**:
- NestJS has built-in testing module with Jest
- Playwright MCP enables AI-assisted test generation for E2E
- Component tests for React via React Testing Library
- Coverage target: 80%+ for critical paths

**Alternatives considered**:
- Cypress: Mature but no MCP integration
- Selenium: Older, slower, no MCP support

---

## Decision 7: Design System

**Decision**: MCP Stitch for design generation

**Rationale**:
- AI-powered design system generation
- Consistent theming across components
- Export to Next.js compatible formats
- Integrates with project design tokens

---

## Summary of Technology Choices

| Layer | Choice | Justification |
|-------|--------|---------------|
| Frontend | Next.js (App Router) | SSR for performance, image optimization, MCP Stitch compatible |
| Backend | NestJS | Module architecture, DI, built-in testing, guards/filters |
| Database | PostgreSQL + Prisma | Type-safe, migrations, persistence |
| Images | Cloud storage (S3/Cloudinary) | Scalable, accessible via URL |
| Auth | Session-based (NestJS Passport) | Secure, simple, fits single-admin |
| Testing | NestJS Jest + Playwright MCP | Unit/integration + AI-assisted E2E |
| Design | MCP Stitch | AI-powered design system generation |
