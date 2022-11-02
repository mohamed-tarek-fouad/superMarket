import {
  badRequestResponse,
  createdResponse,
  okResponse,
} from "../../helpers/functions/ResponseHandler.js";
import { prisma } from "../../index.js";

export async function createProduct(req, res, next) {
  try {
    const { name, price, catId } = req.body;
    const img = `/uploads/images/${req.file.filename}`;
    const Product = await prisma.categories.findMany({
      where: {
        name,
      },
    });
    if (Product) {
      return badRequestResponse(res, "this name already exists");
    }
    const getProduct = await prisma.categories.findFirst({
      where: {
        id: catId,
      },
    });
    if (!getProduct) {
      return badRequestResponse(res, "this category doesn't exist");
    }
    const product = await prisma.products.create({
      data: {
        name,
        price,
        img,
        catId,
      },
    });
    return createdResponse(res, "created product successfully", product);
  } catch (err) {
    next(err);
  }
}
