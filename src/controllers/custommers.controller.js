import { Router } from "express";
import custommersSchema from "../helpers/schemas/createCustommer.schema.js";
import * as custommersService from "../services/custommers/index.js";
import JoiMiddleware from "../helpers/middlewares/joiMiddleware.js";
import updatecustommerSchema from "../helpers/schemas/updateCustommer.schema.js";
const custommerRouter = Router();

custommerRouter.post(
  "/",

  JoiMiddleware(custommersSchema),
  custommersService.createCustommer
);
custommerRouter.patch(
  "/update",
  JoiMiddleware(updatecustommerSchema),
  custommersService.updateCustommer
);
custommerRouter.get("/", custommersService.allCustommers);
custommerRouter.patch("/total", custommersService.total);
custommerRouter.patch("/checkOut", custommersService.checkOut);
custommerRouter.get("/byId", custommersService.custommerById);

export default custommerRouter;
