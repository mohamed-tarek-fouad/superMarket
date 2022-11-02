import {
  badRequestResponse,
  createdResponse,
  okResponse,
} from "../../helpers/functions/ResponseHandler.js";
import { prisma } from "../../index.js";

export async function catById(req, res, next) {
  try {
    const { id } = req.headers;
    const category = await prisma.categories.findFirst({
      where: { id: parseInt(id) },
      include: {
        products: true,
      },
    });
    return okResponse(res, "featched  category successfully", category);
  } catch (err) {
    next(err);
  }
}
