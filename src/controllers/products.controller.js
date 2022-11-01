import { Router } from "express";
import productsSchema from "../helpers/schemas/products.schema.schema.js";
import * as ProductsService from "../services/products/index.js";
import JoiMiddleware from "../helpers/middlewares/joiMiddleware.js";
import multer from "multer";
import updateProductSchema from "../helpers/schemas/updateProduct.schema.js";
const productRouter = Router();
const storageEngine = multer.diskStorage({
  destination: (req, file, func) => {
    func(null, "uploads/images");

    {
    }
  },
  filename: (req, file, cb) => {
    const filename = `${Date.now()}${file.originalname}`;
    cb(null, filename);
  },
});
const uploads = multer({
  storage: storageEngine,
});
productRouter.post(
  "/",
  uploads.single("img"),
  JoiMiddleware(productsSchema),
  ProductsService.createProduct
);
productRouter.patch(
  "/update",
  uploads.single("img"),
  JoiMiddleware(updateProductSchema),
  ProductsService.updateProduct
);
productRouter.get("/", ProductsService.allProducts);
productRouter.get("/byId", ProductsService.productById);

export default productRouter;
