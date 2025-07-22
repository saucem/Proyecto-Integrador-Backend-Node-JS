# Proyecto final: API Rest

Conjunto de peticiones que conforman el modo de acceder a la información de la base de datos a través de la API propuesta.

Base URL: **http://localhost:5000**

<br>

# Productos

## Get All Products

GET http://localhost:5000/api/products

Recupera **todos** los elementos de la colección de **productos**.

> Response Examples

> 200 Response

```json
[
    {
        "id": "4MUFAlaPqXaBpNHYouBp",
        "price": 38500,
        "active": true,
        "name": "Pollerín de ensayo",
        "stock": 28
    },
    {
        "id": "7GhdUUplphGhkwkyIW2a",
        "price": 80000,
        "stock": 34,
        "name": "Mallot clásico",
        "active": true
    },
    {
        "id": "857CPidjDVoPvl16rvcR",
        "price": 45000,
        "name": "Media punta infantil",
        "stock": 12,
        "active": true
    },
    {
        "id": "LcZq4t52vxu8ttsKlYYi",
        "stock": 37,
        "price": 75000,
        "active": true,
        "name": "Media punta adultos"
    }
]
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

<br>

## Create Product

POST http://localhost:5000/api/products

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
|» price|body|float| yes |none|
|» stock|body|integer| yes |none|
|» active|body|boolean| yes |none|

> Response Examples

> 201 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|201|[CREATED](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

<br>

## Get Product by ID

GET http://localhost:5000/api/products/857CPidjDVoPvl16rvcR

Recupera **un** elemento de la colección de **productos** de acuerdo al ID que se le pase por parámetro. Si no encuentra productos con dicho ID, devuelve un mensaje de recurso no encontrado.

> Response Examples

> 200 Response

```json
{
    "price": 45000,
    "name": "Media punta infantil",
    "stock": 12,
    "active": true
}
```
> 404 Response

```json
{
  {"message": "Producto no encontrado"}
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|404|[NOT_FOUND](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

<br>

## Delete Product

DELETE http://localhost:5000/api/products/:id

Elimina un elemento de la colección de **productos** de acuerdo al ID que se le pase por parámetro. Si no encuentra productos con dicho ID, devuelve un mensaje de recurso no encontrado.

> Response Examples

> 200 Response

```json
{
  {"message": "Producto eliminado"}
}
```
> 404 Response

```json
{
  {"message": "Producto no encontrado"}
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|404|[NOT_FOUND](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

<br>
<br>

# Usuarios

## Get All Users

GET http://localhost:5000/api/users

Recupera **todos** los elementos de la colección de **usuarios**.

> Response Examples

> 200 Response

```json
[
    {
        "id": "YmJu6sK0x7jV5yetHgJG",
        "email": "saucem@gmail.com",
        "role": "user",
        "name": "Mauro Saucedo"
    },
    {
        "id": "Zb0H2lzbjCHLTmpzxHCu",
        "name": "Pedro Álvarez",
        "email": "palvarez@gmail.com",
        "role": "admin"
    },
    {
        "id": "uhJOaidb9gXJYHzg0tTJ",
        "role": "user",
        "name": "Ernesto Molina",
        "email": "emolina@gmail.com"
    },
    {
        "id": "zqTdcRNpBQtSChSxfo3Q",
        "email": "abelloso@gmail.com",
        "role": "admin",
        "name": "Ana Belloso"
    }
]
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

<br>

## Create User

POST http://localhost:5000/api/users

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

> 201 Response

```json
{}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|201|[CREATED](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

<br>

## Get User by ID

GET http://localhost:5000/api/users/Zb0H2lzbjCHLTmpzxHCu

Recupera **un** elemento de la colección de **usuarios** de acuerdo al ID que se le pase por parámetro. Si no encuentra productos con dicho ID, devuelve un mensaje de recurso no encontrado.

> Response Examples

> 200 Response

```json
{
    "name": "Pedro Álvarez",
    "email": "palvarez@gmail.com",
    "role": "admin"
}
```

### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|404|[NOT_FOUND](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

<br>

## DELETE Delete User

DELETE http://localhost:5000/api/users/:id

Elimina un elemento de la colección de **usuarios** de acuerdo al ID que se le pase por parámetro. Si no encuentra productos con dicho ID, devuelve un mensaje de recurso no encontrado.

> Response Examples

> 200 Response

```json
{
  {"message": "Usuario eliminado"}
}
```
> 404 Response

```json
{
  {"message": "Usuario no encontrado"}
}
```
### Responses

|HTTP Status Code |Meaning|Description|Data schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
|404|[NOT_FOUND](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|
