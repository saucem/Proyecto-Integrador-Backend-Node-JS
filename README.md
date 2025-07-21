# Proyecto final - API REST para el manejo de productos


## Estructura del proyecto
``` plaintext
carpeta-destino/
├── config/                 # Configuraciones generales (DB, variables de entorno, etc.)
│   └── db.js               # Configuración de la base de datos
│
├── controllers/           # Controladores: lógica que responde a las rutas
│   └── user.controller.js
│
├── services/              # Servicios: lógica de negocio reutilizable
│   └── user.service.js
│
├── routes/                # Definición de rutas y middlewares asociados
│   └── user.routes.js
│
├── models/                # Modelos de datos (si usás MongoDB, Sequelize, etc.)
│   └── user.model.js
│
├── middlewares/           # Middlewares personalizados
│   └── auth.middleware.js
│
├── index.js               # Punto de entrada del servidor
├── package.json           # Dependencias y scripts
├── README.md              # Documentación del proyecto

```
---

## Licencia

Este proyecto está licenciado bajo la licencia **MIT**. Consulta el archivo [LICENSE](./LICENSE) para más detalles.
