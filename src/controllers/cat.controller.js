import { Router } from "express";
import cartSchema from "../helpers/schemas/cart.schema.js";
import * as catService from "../services/cat/index.js";
import JoiMiddleware from "../helpers/middlewares/joiMiddleware.js";
const catRouter = Router();

catRouter.post(
  "/",

  catService.createCat
);
catRouter.delete("/", catService.deleteCat);

export default catRouter;
