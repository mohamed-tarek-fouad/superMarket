import {
  badRequestResponse,
  createdResponse,
  okResponse,
} from "../../helpers/functions/ResponseHandler.js";
import { prisma } from "../../index.js";

export async function allProducts(req, res, next) {
  try {
    const product = await prisma.products.findMany({
      include: {
        cat: true,
      },
    });
    return okResponse(res, "featched all products successfully", product);
  } catch (err) {
    next(err);
  }
}
