import { Router } from "express";
import cartSchema from "../helpers/schemas/cart.schema.js";
import * as cartService from "../services/cart/index.js";
import JoiMiddleware from "../helpers/middlewares/joiMiddleware.js";
const cartRouter = Router();

cartRouter.post(
  "/",

  JoiMiddleware(cartSchema),
  cartService.createCart
);
cartRouter.delete("/", cartService.deleteCart);

export default cartRouter;
