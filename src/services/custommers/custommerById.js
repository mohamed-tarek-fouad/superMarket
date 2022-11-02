import {
  badRequestResponse,
  createdResponse,
  okResponse,
} from "../../helpers/functions/ResponseHandler.js";
import { prisma } from "../../index.js";

export async function custommerById(req, res, next) {
  try {
    const { id } = req.headers;
    const custommer = await prisma.custommers.findFirst({
      where: { id },
      include: {
        Cart: true,
      },
    });
    return okResponse(res, "featched  custommer successfully", custommer);
  } catch (err) {
    next(err);
  }
}
