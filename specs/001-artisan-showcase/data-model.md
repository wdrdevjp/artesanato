# Data Model: Artesanato Showcase

## Entities

### Categoria

| Campo | Tipo | Descrição | Restrições |
|-------|------|-----------|------------|
| id | UUID | Identificador único | PK, auto-generated |
| nome | String | Nome da categoria | Required, max 100 chars |
| imagem | String (URL) | URL da imagem da categoria | Required, valid URL format |
| createdAt | DateTime | Data de criação | Auto-generated |
| updatedAt | DateTime | Data de atualização | Auto-updated |

**Relacionamentos**: 1:N com Produto (uma categoria tem muitos produtos)

---

### Produto

| Campo | Tipo | Descrição | Restrições |
|-------|------|-----------|------------|
| id | UUID | Identificador único | PK, auto-generated |
| categoriaId | UUID | FK para Categoria | Required, references Categoria |
| nome | String | Nome do produto | Required, max 200 chars |
| descricao | String | Descrição breve | Required, max 500 chars |
| preco | Decimal | Preço do produto | Required, >= 0 |
| imagens | String[] (URLs) | Array de URLs das imagens | Required, min 1 image |
| linkWhatsApp | String (URL) | Link do WhatsApp | Required, valid URL format |
| createdAt | DateTime | Data de criação | Auto-generated |
| updatedAt | DateTime | Data de atualização | Auto-updated |

**Relacionamentos**: N:1 com Categoria; 1:N com MarketplaceLink

---

### MarketplaceLink

| Campo | Tipo | Descrição | Restrições |
|-------|------|-----------|------------|
| id | UUID | Identificador único | PK, auto-generated |
| produtoId | UUID | FK para Produto | Required, references Produto |
| tipo | Enum | Tipo de marketplace | Shopee or MercadoLivre |
| url | String (URL) | Link para o produto no marketplace | Required, valid URL format |
| createdAt | DateTime | Data de criação | Auto-generated |

**Relacionamentos**: N:1 com Produto

---

### Administrador

| Campo | Tipo | Descrição | Restrições |
|-------|------|-----------|------------|
| id | UUID | Identificador único | PK, auto-generated |
| nome | String | Nome do administrador | Required, max 100 chars |
| email | String | Email do administrador | Required, unique, valid email format |
| senha | String | Senha hash | Required, min 8 chars |
| createdAt | DateTime | Data de criação | Auto-generated |
| updatedAt | DateTime | Data de atualização | Auto-updated |

---

## Diagrama de Relacionamentos

```
┌─────────────┐       1:N       ┌─────────────┐
│  Categoria  │──────────────────│   Produto   │
└─────────────┘                  └─────────────┘
       │                                │
       │                                │ 1:N
       │                                │
       │                         ┌─────────────┐
       │                         │ Marketplace │
       │                         │    Link     │
       │                         └─────────────┘

┌─────────────┐
│Administrador│
└─────────────┘
```

---

## Regras de Validação

### Categoria
- Nome não pode estar vazio
- Nome deve ter no máximo 100 caracteres
- Imagem deve ser uma URL válida

### Produto
- Nome não pode estar vazio
- Nome deve ter no máximo 200 caracteres
- Descrição não pode estar vazia
- Descrição deve ter no máximo 500 caracteres
- Preço deve ser maior ou igual a zero
- Deve ter pelo menos uma imagem
- linkWhatsApp é obrigatório

### MarketplaceLink
- Tipo deve ser "Shopee" ou "MercadoLivre"
- URL deve ser válida e apontar para o marketplace correto
- Cada produto pode ter no máximo 1 link por marketplace

### Administrador
- Email deve ser válido e único
- Senha deve ter no mínimo 8 caracteres
- Email não pode estar em uso por outro administrador

---

## Índices

- `Produto.categoriaId` - para buscar produtos por categoria rapidamente
- `Produto.createdAt` - para ordenação
- `MarketplaceLink.produtoId` - para buscar links de um produto
- `Administrador.email` - único, para autenticação

---

## Cascata e Exclusão

| Entidade | Ao excluir | Comportamento |
|----------|------------|---------------|
| Categoria | Se tem produtos | Bloquear exclusão (FR-008) |
| Categoria | Se sem produtos | Permitir exclusão |
| Produto | Ao excluir | Excluir MarketplaceLinks associados (cascade) |
| MarketplaceLink | Ao excluir | Apenas remove o link |
| Administrador | Ao excluir | N/A (impedir auto-exclusão do último admin) |
