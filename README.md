# Proyecto final Backend Node JS

Desarrollo de una API REST utilizando Node JS y Express para gestionar una base de datos de productos, propuesto como consigna final del curso de Backend con Node JS de la plataforma Talento Tech. La persistencia de datos se logra a través de la conexión con una base de datos NoSQL alojada en el servicio Firebase de la plataforma Firestore.

## Tecnologías aplicadas:

### <img src="https://th.bing.com/th/id/ODF.frqWidIBqaJxUeRehgMjAQ?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2" alt="Node JS logo" width="32" height="auto"> &nbsp; Node JS
### <img src="https://www.pngfind.com/pngs/m/136-1363736_express-js-icon-png-transparent-png.png" alt="Express logo" width="32" height="auto"> &nbsp; Express
### <img src="https://th.bing.com/th/id/OSK.I9LOMH2e_O17LkHZuDXE9exuQzwziHeMBf3010VuwUk?w=46&h=46&c=11&rs=1&qlt=80&o=6&dpr=2&pid=SANGAM" alt="Javascript logo" width="32" height="auto"> &nbsp; Javascript
### <img src="https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png?hl=es-419" alt="Firebase logo" width="32" height="auto"> &nbsp; Firebase

<br>

## Configuración básica:

#### Base URL:

> http://localhost:5000

#### Variables de entorno:

> APIKEY = Your web app's Firebase apikey  
> AUTHDOMAIN = Your web app's Firebase authdomain  
> PROJECTID = Your web app's Firebase projectid  
> STORAGEBUCKET = Your web app's Firebase storagebucket  
> MESSAGINGSENDERID = Your web app's Firebase messagingsenderid  
> APPID = Your web app's Firebase appid  

<br>

# Productos

Listado de verbos para interactuar con la colección **Products** de la base de datos. 

## Get All Products

GET http://localhost:5000/api/products

Recupera **todos** los elementos de la colección de **productos**.

#### Ejemplo de respuesta

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

#### Ejemplo del parámetro Body

```json
{
  "name": "Pollerín de ensayo",
  "price": 38500,
  "stock": 28,
  "active": true
}
```

### Parámetros

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» name|body|string| yes |none|
|» price|body|float| yes |none|
|» stock|body|integer| yes |none|
|» active|body|boolean| yes |none|

#### Ejemplo de respuesta

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

GET http://localhost:5000/api/products/:ID

Recupera **un** elemento de la colección de **productos** de acuerdo al ID que se le pase por parámetro. Si no encuentra productos con dicho ID, devuelve un mensaje de recurso no encontrado.

#### Ejemplos de respuesta

> 200 Response (GET http://localhost:5000/api/products/857CPidjDVoPvl16rvcR)

```json
{
    "price": 45000,
    "name": "Media punta infantil",
    "stock": 12,
    "active": true
}
```
> 404 Response (GET http://localhost:5000/api/products/1234)

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

DELETE http://localhost:5000/api/products/:ID

Elimina un elemento de la colección de **productos** de acuerdo al ID que se le pase por parámetro. Si no encuentra productos con dicho ID, devuelve un mensaje de recurso no encontrado.

#### Ejemplos de respuesta

> 200 Response (DELETE http://localhost:5000/api/products/857CPidjDVoPvl16rvcR)

```json
{
  {"message": "Producto eliminado"}
}
```
> 404 Response (DELETE http://localhost:5000/api/products/1234)

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

Listado de verbos para interactuar con la colección **Users** de la base de datos.

## Get All Users

GET http://localhost:5000/api/users

Recupera **todos** los elementos de la colección de **usuarios**.

#### Ejemplo de respuesta

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

#### Ejemplo del parámetro Body

```json
{
  "name": "Ana Belloso",
  "email": "abelloso@gmail.com",
  "role": "admin"
}
```

### Parámetros

|Name|Location|Type|Required|Description|
|---|---|---|---|---|
|body|body|object| no |none|
|» name|body|string| yes |none|
|» email|body|string| yes |none|
|» role|body|string| yes |none|

#### Ejemplo de respuesta

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

GET http://localhost:5000/api/users/:ID

Recupera **un** elemento de la colección de **usuarios** de acuerdo al ID que se le pase por parámetro. Si no encuentra productos con dicho ID, devuelve un mensaje de recurso no encontrado.

#### Ejemplo de respuesta

> 200 Response (GET http://localhost:5000/api/users/Zb0H2lzbjCHLTmpzxHCu)

```json
{
    "name": "Pedro Álvarez",
    "email": "palvarez@gmail.com",
    "role": "admin"
}
```

> 404 Response (GET http://localhost:5000/api/users/1234)

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

<br>

## Delete User

DELETE http://localhost:5000/api/users/:id

Elimina un elemento de la colección de **usuarios** de acuerdo al ID que se le pase por parámetro. Si no encuentra productos con dicho ID, devuelve un mensaje de recurso no encontrado.

#### Ejemplos de respuesta 

> 200 Response (DELETE http://localhost:5000/api/users/Zb0H2lzbjCHLTmpzxHCu)

```json
{
  {"message": "Usuario eliminado"}
}
```
> 404 Response (DELETE http://localhost:5000/api/users/1234)

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
