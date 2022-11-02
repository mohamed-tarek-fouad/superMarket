import {
  badRequestResponse,
  createdResponse,
  okResponse,
} from "../../helpers/functions/ResponseHandler.js";
import { prisma } from "../../index.js";

export async function allCats(req, res, next) {
  try {
    const category = await prisma.categories.findMany({
      include: {
        products: true,
      },
    });
    return okResponse(res, "featched all categories successfully", category);
  } catch (err) {
    next(err);
  }
}
