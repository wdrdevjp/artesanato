# Tasks: Artesanato Showcase

**Input**: Design documents from `/specs/001-artisan-showcase/`
**Prerequisites**: plan.md, spec.md, data-model.md, contracts/api.md

**Organization**: Tasks are grouped by user story to enable independent implementation and testing

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story (US1, US2, US3, US4)
- Include exact file paths in descriptions

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and monorepo structure

- [ ] T001 Create monorepo structure: apps/backend, apps/frontend, packages/shared
- [ ] T002 [P] Initialize NestJS backend in apps/backend with TypeScript
- [ ] T003 [P] Initialize Next.js frontend in apps/frontend with TypeScript
- [ ] T004 [P] Configure npm workspaces in package.json at root
- [ ] T005 [P] Setup shared types package in packages/shared
- [ ] T006 Configure Tailwind CSS and DaisyUI in apps/frontend
- [ ] T007 Configure ESLint and Prettier for both apps

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T008 Setup PostgreSQL database and create artesanal database
- [ ] T009 Configure Prisma ORM in apps/backend with PostgreSQL provider
- [ ] T010 [P] Create Prisma schema with all entities: Categoria, Produto, MarketplaceLink, Administrador
- [ ] T011 [P] Run initial Prisma migration to create database tables
- [ ] T012 Create seed file in apps/backend/prisma/seed.ts with admin user
- [ ] T013 [P] Setup NestJS app module and configuration in apps/backend/src
- [ ] T014 [P] Configure session-based authentication with express-session and connect-pg-simple
- [ ] T015 Create AuthModule with login/logout endpoints in apps/backend/src/auth
- [ ] T016 Setup global exception filter and logging in apps/backend/src/common
- [ ] T017 Create uploads directory structure: uploads/categorias, uploads/produtos
- [ ] T018 Configure CORS and static file serving for uploads in NestJS

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Visualizar Categorias na Landpage (Priority: P1) 🎯 MVP

**Goal**: Carrossel flutuante de categorias na landpage com transição automática (3s) e navegação manual

**Independent Test**: Acessar landpage e verificar carrossel de categorias com efeito de sobreposição

### Implementation for User Story 1

- [ ] T019 [P] [US1] Create Categoria DTO and schema in apps/backend/src/categorias/dto
- [ ] T020 [P] [US1] Create CategoriaService in apps/backend/src/categorias/categorias.service.ts
- [ ] T021 [P] [US1] Create CategoriaController with GET /categorias and GET /categorias/:id in apps/backend/src/categorias/categorias.controller.ts
- [ ] T022 [P] [US1] Create Categoria module in apps/backend/src/categorias/categorias.module.ts
- [ ] T023 [US1] Implement listarCategorias endpoint returning all categories with images
- [ ] T024 [P] [US1] Create API client in apps/frontend/lib/api.ts
- [ ] T025 [P] [US1] Create Categoria type in apps/frontend/lib/types.ts
- [ ] T026 [US1] Create Landpage component with floating carousel in apps/frontend/app/page.tsx
- [ ] T027 [US1] Implement carousel with floating effect (current image larger, previous smaller behind)
- [ ] T028 [US1] Add auto-transition every 3 seconds to carousel
- [ ] T029 [US1] Add manual navigation controls to carousel (prev/next buttons)
- [ ] T030 [US1] Style carousel with Tailwind CSS and DaisyUI components
- [ ] T031 [US1] Add lazy loading for category images using next/image

**Checkpoint**: Landpage loads with floating carousel, categories display, navigation works

---

## Phase 4: User Story 2 - Navegar Produtos por Categoria (Priority: P1) 🎯 MVP

**Goal**: Página de categoria com cards de produtos, alternância automática de imagens e seletor de marketplace

**Independent Test**: Selecionar categoria e visualizar produtos em cards com imagens alternando

### Implementation for User Story 2

- [ ] T032 [P] [US2] Create Produto DTOs in apps/backend/src/produtos/dto
- [ ] T033 [P] [US2] Create MarketplaceLink DTO in apps/backend/src/produtos/dto
- [ ] T034 [P] [US2] Create ProdutoService in apps/backend/src/produtos/produtos.service.ts
- [ ] T035 [P] [US2] Create ProdutoController with GET /categorias/:categoriaId/produtos and GET /produtos/:id
- [ ] T036 [P] [US2] Create Produto module in apps/backend/src/produtos/produtos.module.ts
- [ ] T037 [US2] Implement listarProdutosPorCategoria endpoint with MarketplaceLinks
- [ ] T038 [P] [US2] Create Produto type in apps/frontend/lib/types.ts
- [ ] T039 [P] [US2] Create ProductCard component in apps/frontend/components
- [ ] T040 [US2] Implement image rotation for cards with multiple images (auto-rotate interval)
- [ ] T041 [US2] Add product price display in ProductCard
- [ ] T042 [US2] Add brief description display in ProductCard
- [ ] T043 [US2] Create marketplace selector dropdown (Shopee, Mercado Livre, WhatsApp last)
- [ ] T044 [US2] Implement link opening on marketplace selection (same tab)
- [ ] T045 [US2] Create category page at app/categorias/[id]/page.tsx
- [ ] T046 [US2] Style cards with Tailwind CSS and DaisyUI

**Checkpoint**: Category page displays products in cards with rotating images and marketplace links

---

## Phase 5: User Story 3 - Gerenciar Categorias (Priority: P1)

**Goal**: CRUD completo de categorias na área gerencial (criar, ler, atualizar, excluir)

**Independent Test**: Acessar área admin, criar/editar/excluir categoria com autenticação

### Implementation for User Story 3

- [ ] T047 [P] [US3] Add auth guard to CategoriaController (protect POST, PUT, DELETE)
- [ ] T048 [P] [US3] Create DTOs for criarCategoria and atualizarCategoria in apps/backend/src/categorias/dto
- [ ] T049 [US3] Implement criarCategoria endpoint in CategoriaController
- [ ] T050 [US3] Implement atualizarCategoria endpoint in CategoriaController
- [ ] T051 [US3] Implement excluirCategoria endpoint with product count check (block if has products)
- [ ] T052 [P] [US3] Create AdminLayout component in apps/frontend/app/admin/layout.tsx
- [ ] T053 [P] [US3] Create login page in apps/frontend/app/admin/login/page.tsx
- [ ] T054 [US3] Create categories admin page in apps/frontend/app/admin/categorias/page.tsx
- [ ] T055 [US3] Implement category form with name and image upload
- [ ] T056 [US3] Implement category list with edit and delete buttons
- [ ] T057 [US3] Add delete confirmation with product count warning
- [ ] T058 [US3] Style admin pages with Tailwind CSS and DaisyUI

**Checkpoint**: Admin can CRUD categories with proper authentication and validation

---

## Phase 6: User Story 4 - Gerenciar Produtos (Priority: P1)

**Goal**: CRUD completo de produtos na área gerencial com múltiplas imagens e marketplace links

**Independent Test**: Acessar área admin, criar/editar/excluir produto com validações

### Implementation for User Story 4

- [ ] T059 [P] [US4] Add auth guard to ProdutoController (protect POST, PUT, DELETE)
- [ ] T060 [P] [US4] Create DTOs for criarProduto, atualizarProduto in apps/backend/src/produtos/dto
- [ ] T061 [US4] Implement criarProduto endpoint with images array and MarketplaceLinks
- [ ] T062 [US4] Implement atualizarProduto endpoint with partial update support
- [ ] T063 [US4] Implement excluirProduto endpoint with cascade delete of MarketplaceLinks
- [ ] T064 [P] [US4] Create UploadModule in apps/backend/src/upload
- [ ] T065 [US4] Implement POST /upload endpoint accepting multipart form with tipo field
- [ ] T066 [US4] Implement hash-based filename generation for uploaded images
- [ ] T067 [US4] Save images to correct directory based on tipo (categorias/produtos)
- [ ] T068 [P] [US4] Create product admin page in apps/frontend/app/admin/produtos/page.tsx
- [ ] T069 [US4] Create product form with: name, description, price, multiple image upload
- [ ] T070 [US4] Add WhatsApp link field (required) to product form
- [ ] T071 [US4] Add marketplace links section (Shopee, Mercado Livre URLs)
- [ ] T072 [US4] Implement product list with category filter and edit/delete
- [ ] T073 [US4] Style product admin with Tailwind CSS and DaisyUI form components

**Checkpoint**: Admin can CRUD products with images and marketplace links

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

Per the Artesanato Constitution, these phases MUST include:

- [ ] T074 [P] Performance audit: Lighthouse score ≥ 90, page load ≤ 3s
- [ ] T075 [P] Accessibility audit: WCAG 2.1 AA compliance, axe-core 0 violations
- [ ] T076 Visual regression tests for carousel and product cards
- [ ] T077 Bundle size validation: initial load ≤ 250KB gzipped
- [ ] T078 [P] Update README.md with complete setup instructions (PT-BR)
- [ ] T079 Code cleanup: ensure all comments and variables in PT-BR
- [ ] T080 Security hardening: validate all inputs, sanitize file uploads

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-6)**: All depend on Foundational phase completion
  - US1 and US2 can run in parallel (independent - visitor frontend)
  - US3 and US4 can run in parallel (independent - admin frontend)
- **Polish (Phase 7)**: Depends on all desired user stories being complete

### User Story Dependencies

- **US1 (P1)**: Requires Foundational - No dependencies on other stories
- **US2 (P1)**: Requires Foundational + US1 (needs Categoria) - Can start after T019-T023
- **US3 (P1)**: Requires Foundational - Can start after T047
- **US4 (P1)**: Requires Foundational - Can start after T059

### Within Each User Story

- Models before services
- Services before controllers
- Backend before frontend
- Core implementation before styling

### Parallel Opportunities

- T002, T003, T004, T005 (all Setup) can run in parallel
- T010, T011, T013, T014 (all Foundational) can run in parallel
- T019-T022 (US1 backend models/services) can run in parallel with T032-T036 (US2 backend)
- T024, T025 (frontend API client) can run in parallel
- US3 and US4 backend work (T047-T073) can run in parallel with each other

---

## Summary

| Metric | Value |
|--------|-------|
| Total Tasks | 80 |
| Phase 1 (Setup) | 7 tasks |
| Phase 2 (Foundational) | 11 tasks |
| Phase 3 (US1 - Carousel) | 13 tasks |
| Phase 4 (US2 - Products) | 15 tasks |
| Phase 5 (US3 - Admin Categorias) | 12 tasks |
| Phase 6 (US4 - Admin Produtos) | 15 tasks |
| Phase 7 (Polish) | 7 tasks |

### Suggested MVP Scope

Complete **Phase 1 → Phase 2 → Phase 3** for first deployable MVP:
- Landpage with floating category carousel
- Static pages working

### Independent Test Criteria per Story

| User Story | Test |
|------------|------|
| US1 | Landpage loads, carousel displays categories with floating effect, 3s auto-transition, manual nav works |
| US2 | Category page shows products with rotating images, price, description, marketplace dropdown |
| US3 | Admin login works, can create/edit/delete categories, delete blocked if products exist |
| US4 | Admin can create/edit/delete products with images and marketplace links |
