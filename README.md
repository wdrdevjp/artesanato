# Artesanato Showcase

Site para exposição de produtos de artesanatos de fabricação própria.

## Funcionalidades

- **Landpage**: Carrossel flutuante de categorias com transição automática (3s) e navegação manual
- **Página de Categoria**: Cards de produtos com alternância automática de imagens e seletor de marketplace (Shopee, Mercado Livre, WhatsApp)
- **Área Gerencial**: CRUD completo de categorias e produtos (autenticação requerida)

## Stack Tecnológica

| Camada | Tecnologia |
|--------|------------|
| Frontend | Next.js (App Router) + TypeScript |
| Backend | NestJS + TypeScript |
| Banco de Dados | PostgreSQL + Prisma ORM |
| Styling | Tailwind CSS + DaisyUI |
| Design | MCP Stitch |
| Testes | Playwright MCP |

## Pré-requisitos

- Node.js 18+
- PostgreSQL 14+
- npm ou yarn

## Quick Start

### 1. Clonar e instalar dependências

```bash
npm install
```

### 2. Configurar variáveis de ambiente

Criar arquivo `apps/backend/.env`:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/artesanato"
SESSION_SECRET="your-secret-key-min-32-chars"
UPLOAD_DIR="./uploads"
PORT=3001
```

Criar arquivo `apps/frontend/.env`:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api/v1
```

### 3. Inicializar banco de dados

```bash
createdb artesanato
npm run db:migrate --workspace=apps/backend
npm run db:seed --workspace=apps/backend
```

### 4. Configurar Tailwind CSS e DaisyUI

```bash
cd apps/frontend
npx tailwindcss init -p
npm install -D daisyui@latest
```

### 5. Iniciar ambiente de desenvolvimento

```bash
npm run dev
```

- Backend: http://localhost:3001
- Frontend: http://localhost:3000

## Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia backend e frontend |
| `npm run build` | Build de produção |
| `npm run test` | Testes unitários e integração |
| `npm run test:e2e` | Testes E2E via Playwright |
| `npm run lint` | Verifica estilo do código |
| `npm run db:migrate` | Roda migrações do Prisma |
| `npm run db:seed` | Popula banco com dados iniciais |

## Credenciais Padrão (Desenvolvimento)

- Email: admin@artesanato.com
- Senha: admin123

## Estrutura do Projeto

```
apps/
├── backend/              # NestJS API
│   └── src/
│       ├── categorias/  # Module Categoria
│       ├── produtos/    # Module Produto
│       ├── auth/        # Module Auth
│       └── upload/      # Module Upload
│
└── frontend/            # Next.js App
    ├── app/             # App Router
    ├── components/      # Componentes UI
    ├── lib/             # API client
    └── e2e/             # Testes Playwright
```

## Armazenamento de Imagens

Imagens são salvas localmente no filesystem com estrutura:

```
uploads/
├── categorias/
└── produtos/
```

Nomes das imagens são hash do conteúdo para deduplicação.

---

Para mais detalhes, consulte a [especificação completa](./specs/001-artisan-showcase/spec.md).
