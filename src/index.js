import express from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import errorHandler from "./helpers/middlewares/errorHandller.js";
import products from "./controllers/products.controller.js";
import custommers from "./controllers/custommers.controller.js";
import cart from "./controllers/cart.controller.js";
import { join } from "path";
const prisma = new PrismaClient();
dotenv.config();

const app = express();

// -- Middlewares --
app.use(express.json());
app.use("/uploads", express.static(join(process.cwd(), "uploads")));
// -- Routes --
app.use("/products", products);
app.use("/custommers", custommers);
app.use("/cart", cart);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});

export { prisma };
