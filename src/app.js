import express from "express";
import { join, __dirname } from "./utils/index.js";
import usersRoutes from "./routes/users.routes.js";
import productsRoutes from "./routes/products.routes.js";

//settings
const app = express();
app.set("PORT", 5000);

// middlewares
app.use(express.json());
app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/api/users", usersRoutes);
app.use("/api/products", productsRoutes);

//listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
