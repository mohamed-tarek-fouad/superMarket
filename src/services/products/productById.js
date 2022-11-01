import {
  badRequestResponse,
  createdResponse,
  okResponse,
} from "../../helpers/functions/ResponseHandler.js";
import { prisma } from "../../index.js";

export async function productById(req, res, next) {
  try {
    const { id } = req.headers;
    const product = await prisma.products.findFirst({
      where: { id: parseInt(id) },
      include: {
        cat,
      },
    });
    return okResponse(res, "featched  product successfully", product);
  } catch (err) {
    next(err);
  }
}
