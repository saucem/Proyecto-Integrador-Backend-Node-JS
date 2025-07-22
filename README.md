---
title: "Proyecto final: API Rest"
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.30"

---

# Proyecto final: API Rest

Conjunto de peticiones que conforman el modo de acceder a la información de la base de datos a través de la API propuesta.

Base URLs:

# Authentication

# Raíz

## GET Get All Products

GET /api/products

Recupera **todos** los elementos de la colección de **productos**.

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## POST Create Product

POST /api/products

Crea un nuevo elemento en la colección de **productos** con la información provista en formato **JSON** de acuerdo a la estructura indicada debajo.

> Body Parameters

```json
{
  "name": "Pollerín de ensayo",
  "price": 38500,
  "stock": 28,
  "active": true
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» name|body|string| yes |none|
|» price|body|integer| yes |none|
|» stock|body|integer| yes |none|
|» active|body|boolean| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## GET Get Product by ID

GET /api/products/857CPidjDVoPvl16rvcR

Recupera **un** elemento de la colección de **productos** de acuerdo al ID que se le pase por parámetro. Si no encuentra productos con dicho ID, devuelve un mensaje de recurso no encontrado.

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## DELETE Delete Product

DELETE /api/products/4MUFAlaPqXaBpNHYouBp

Elimina un elemento de la colección de **productos** de acuerdo al ID que se le pase por parámetro. Si no encuentra productos con dicho ID, devuelve un mensaje de recurso no encontrado.

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## GET Get All Users

GET /api/users

Recupera **todos** los elementos de la colección de **usuarios**.

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## POST Create User

POST /api/users

Crea un nuevo elemento en la colección de **usuarios** con la información provista en formato **JSON** de acuerdo a la estructura indicada debajo.

> Body Parameters

```json
{
  "name": "Ana Belloso",
  "email": "abelloso@gmail.com",
  "role": "admin"
}
```

### Params

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» name|body|string| yes |none|
|» email|body|string| yes |none|
|» role|body|string| yes |none|

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## GET Get User by ID

GET /api/users/Zb0H2lzbjCHLTmpzxHCu

Recupera **un** elemento de la colección de **usuarios** de acuerdo al ID que se le pase por parámetro. Si no encuentra productos con dicho ID, devuelve un mensaje de recurso no encontrado.

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

## DELETE Delete User

DELETE /api/users/zqTdcRNpBQtSChSxfo3Q

Elimina un elemento de la colección de **usuarios** de acuerdo al ID que se le pase por parámetro. Si no encuentra productos con dicho ID, devuelve un mensaje de recurso no encontrado.

> Response Examples

> 200 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### Responses Data Schema

# Data Schema

