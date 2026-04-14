# API Contracts: Artesanato Showcase

Base URL: `/api/v1`

## Autenticação

### Login

```
POST /auth/login
```

**Request Body:**
```json
{
  "email": "admin@example.com",
  "senha": "password123"
}
```

**Response 200:**
```json
{
  "success": true,
  "administrador": {
    "id": "uuid",
    "nome": "Nome do Admin",
    "email": "admin@example.com"
  }
}
```

**Response 401:**
```json
{
  "success": false,
  "erro": "Credenciais inválidas"
}
```

### Logout

```
POST /auth/logout
```

**Response 200:**
```json
{
  "success": true
}
```

---

## Categorias

### Listar Categorias

```
GET /categorias
```

**Response 200:**
```json
{
  "success": true,
  "categorias": [
    {
      "id": "uuid",
      "nome": "Cerâmica",
      "imagem": "https://storage.example.com/categoria-ceramica.jpg",
      "createdAt": "2026-04-13T10:00:00Z",
      "updatedAt": "2026-04-13T10:00:00Z"
    }
  ]
}
```

### Obter Categoria

```
GET /categorias/:id
```

**Response 200:**
```json
{
  "success": true,
  "categoria": {
    "id": "uuid",
    "nome": "Cerâmica",
    "imagem": "https://storage.example.com/categoria-ceramica.jpg",
    "createdAt": "2026-04-13T10:00:00Z",
    "updatedAt": "2026-04-13T10:00:00Z"
  }
}
```

### Criar Categoria (Admin)

```
POST /categorias
```

**Request Body:**
```json
{
  "nome": "Cerâmica",
  "imagem": "https://storage.example.com/categoria-ceramica.jpg"
}
```

**Response 201:**
```json
{
  "success": true,
  "categoria": { ... }
}
```

### Atualizar Categoria (Admin)

```
PUT /categorias/:id
```

**Request Body:**
```json
{
  "nome": "Cerâmica Atualizada",
  "imagem": "https://storage.example.com/nova-imagem.jpg"
}
```

**Response 200:**
```json
{
  "success": true,
  "categoria": { ... }
}
```

### Deletar Categoria (Admin)

```
DELETE /categorias/:id
```

**Response 200:**
```json
{
  "success": true
}
```

**Response 400** (categoria tem produtos):
```json
{
  "success": false,
  "erro": "Não é possível excluir categoria que contém produtos"
}
```

---

## Produtos

### Listar Produtos por Categoria

```
GET /categorias/:categoriaId/produtos
```

**Response 200:**
```json
{
  "success": true,
  "produtos": [
    {
      "id": "uuid",
      "nome": "Vaso de Cerâmica",
      "descricao": "Vaso decorativo pintado à mão",
      "preco": 89.90,
      "imagens": [
        "https://storage.example.com/vaso-1.jpg",
        "https://storage.example.com/vaso-2.jpg"
      ],
      "linkWhatsApp": "https://wa.me/5511999999999",
      "marketplaceLinks": [
        { "tipo": "Shopee", "url": "https://shopee.com/produto/123" },
        { "tipo": "MercadoLivre", "url": "https://mercadolivre.com.br/produto/456" }
      ],
      "createdAt": "2026-04-13T10:00:00Z",
      "updatedAt": "2026-04-13T10:00:00Z"
    }
  ]
}
```

### Obter Produto

```
GET /produtos/:id
```

**Response 200:**
```json
{
  "success": true,
  "produto": { ... }
}
```

### Criar Produto (Admin)

```
POST /produtos
```

**Request Body:**
```json
{
  "categoriaId": "uuid",
  "nome": "Vaso de Cerâmica",
  "descricao": "Vaso decorativo pintado à mão",
  "preco": 89.90,
  "imagens": ["url1", "url2"],
  "linkWhatsApp": "https://wa.me/5511999999999",
  "marketplaceLinks": [
    { "tipo": "Shopee", "url": "https://shopee.com/produto/123" }
  ]
}
```

**Response 201:**
```json
{
  "success": true,
  "produto": { ... }
}
```

### Atualizar Produto (Admin)

```
PUT /produtos/:id
```

**Request Body:** (partial update supported)
```json
{
  "nome": "Vaso Atualizado",
  "preco": 99.90
}
```

### Deletar Produto (Admin)

```
DELETE /produtos/:id
```

**Response 200:**
```json
{
  "success": true
}
```

---

## Upload de Imagens

### Upload de Imagem (Admin)

```
POST /upload
Content-Type: multipart/form-data
```

**Form Field:** `imagem` (file)

**Response 200:**
```json
{
  "success": true,
  "url": "https://storage.example.com/uploads/uuid.jpg"
}
```

---

## Códigos de Erro Comuns

| Código | Significado |
|--------|-------------|
| 200 | Sucesso |
| 201 | Criado com sucesso |
| 400 | Requisição inválida (validation error) |
| 401 | Não autenticado |
| 403 | Autenticado mas sem permissão |
| 404 | Recurso não encontrado |
| 500 | Erro interno do servidor |
