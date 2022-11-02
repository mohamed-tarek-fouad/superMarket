import { Router } from "express";
import * as catService from "../services/cat/index.js";
import JoiMiddleware from "../helpers/middlewares/joiMiddleware.js";
const catRouter = Router();

catRouter.post("/", catService.createCat);
catRouter.delete("/", catService.deleteCat);
catRouter.get("/", catService.allCats);
catRouter.get("/byId", catService.catById);
export default catRouter;
