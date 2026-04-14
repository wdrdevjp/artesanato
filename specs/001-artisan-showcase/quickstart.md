# Quickstart: Artesanato Showcase

## Pré-requisitos

- Node.js 18+
- PostgreSQL 14+
- npm ou yarn
- Playwright MCP configured
- Stitch MCP configured

## Configuração do Projeto

### 1. Clonar e instalar dependências

```bash
cd artesanato
npm install
```

### 2. Configurar variáveis de ambiente

Criar arquivo `apps/backend/.env`:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/artesanato"
SESSION_SECRET="your-secret-key-min-32-chars"
CLOUD_STORAGE_URL="https://your-bucket.s3.amazonaws.com"
CLOUD_STORAGE_KEY="your-access-key"
CLOUD_STORAGE_SECRET="your-secret-key"
PORT=3001
```

Criar arquivo `apps/frontend/.env`:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001/api/v1
```

### 3. Inicializar banco de dados

```bash
# Criar banco de dados
createdb artesanato

# Rodar migrações do Prisma
npm run db:migrate --workspace=apps/backend

# Seed com dados iniciais
npm run db:seed --workspace=apps/backend
```

### 4. Gerar Design System (MCP Stitch)

```bash
# Usar MCP Stitch para gerar componentes de design
# O Stitch MCP cria o design system baseado nas spec requirements
```

### 5. Iniciar ambiente de desenvolvimento

```bash
# Ambos backend e frontend
npm run dev
```

Backend disponível em `http://localhost:3001`
Frontend disponível em `http://localhost:3000`

---

## Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia backend e frontend em modo desenvolvimento |
| `npm run build` | Build de produção |
| `npm run test` | Roda todos os testes (unit + integration) |
| `npm run test:e2e` | Roda testes E2E via Playwright MCP |
| `npm run lint` | Verifica estilo do código |
| `npm run db:migrate` | Roda migrações do Prisma |
| `npm run db:seed` | Popula banco com dados iniciais |

---

## Criar Administrador Inicial

```bash
cd apps/backend
npx prisma db seed
```

Credenciais padrão:
- Email: admin@artesanato.com
- Senha: admin123

---

## Estrutura de Pastas

```
apps/
├── backend/              # NestJS API
│   ├── src/
│   │   ├── categorias/  # Module Categoria
│   │   ├── produtos/    # Module Produto
│   │   ├── auth/        # Module Auth
│   │   └── upload/      # Module Upload
│   └── test/            # Testes unitários e integração
│
└── frontend/            # Next.js App
    ├── app/             # App Router
    │   ├── page.tsx     # Landpage
    │   ├── categorias/[id]/
    │   └── admin/
    ├── components/      # Componentes UI
    └── e2e/             # Testes Playwright
```

---

## Fluxo de Desenvolvimento

1. **Design** (MCP Stitch): Gerar design system e componentes
2. **Backend** (NestJS): Implementar modules, services, controllers
3. **Frontend** (Next.js): Consumir API, renderizar páginas
4. **Testes** (Playwright MCP): Gerar e executar E2E tests
