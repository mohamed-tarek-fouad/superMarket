import {
  badRequestResponse,
  createdResponse,
  okResponse,
} from "../../helpers/functions/ResponseHandler.js";
import { prisma } from "../../index.js";

export async function allCustommers(req, res, next) {
  try {
    const custommer = await prisma.custommers.findMany({
      include: {
        cart: true,
      },
    });
    return okResponse(res, "featched all custommers successfully", custommer);
  } catch (err) {
    next(err);
  }
}
