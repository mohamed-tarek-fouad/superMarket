import {
  badRequestResponse,
  createdResponse,
  okResponse,
} from "../../helpers/functions/ResponseHandler.js";
import { prisma } from "../../index.js";

export async function createProduct(req, res, next) {
  try {
    const { name, price, quantity, catId } = req.body;
    const img = `/uploads/images/${req.file.filename}`;
    const product = await prisma.products.create({
      data: {
        name,
        price,
        quantity,
        img,
        catId,
      },
    });
    return createdResponse(res, "created product successfully", product);
  } catch (err) {
    next(err);
  }
}
