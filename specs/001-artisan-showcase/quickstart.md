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
UPLOAD_DIR="./uploads"
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

### 4. Configurar Tailwind CSS e DaisyUI

```bash
cd apps/frontend

# Instalar Tailwind CSS
npx tailwindcss init -p

# Instalar DaisyUI e suas dependências
npm install -D daisyui@latest
```

Configurar `tailwind.config.ts`:
```js
import daisyui from 'daisyui'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: {} },
  plugins: [daisyui],
}
```

### 5. Gerar Design System (MCP Stitch)

```bash
# Usar MCP Stitch para gerar design system
# O Stitch MCP cria o design system baseado nas spec requirements
# Componentes são exportados para uso com Tailwind + shadcn/ui
```

### 6. Iniciar ambiente de desenvolvimento

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
    ├── components/      # Componentes UI (shadcn/ui + custom)
    ├── lib/             # Utils, API client
    └── e2e/             # Testes Playwright
```

---

## Fluxo de Desenvolvimento

1. **Design** (MCP Stitch): Gerar design system e componentes
2. **Backend** (NestJS): Implementar modules, services, controllers
3. **Frontend** (Next.js): Consumir API, renderizar páginas
4. **Testes** (Playwright MCP): Gerar e executar E2E tests
