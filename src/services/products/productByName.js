import {
  badRequestResponse,
  createdResponse,
  okResponse,
} from "../../helpers/functions/ResponseHandler.js";
import { prisma } from "../../index.js";

export async function productById(req, res, next) {
  try {
    const { name } = req.body;
    const product = await prisma.products.findMany({
      where: { name: { contains: name } },
      include: {
        cat: true,
      },
    });
    return okResponse(res, "featched  product successfully", product);
  } catch (err) {
    next(err);
  }
}
