import {
  badRequestResponse,
  createdResponse,
  okResponse,
} from "../../helpers/functions/ResponseHandler.js";
import { prisma } from "../../index.js";

export async function custommerById(req, res, next) {
  try {
    const { name } = req.body;
    const custommer = await prisma.custommers.findMany({
      where: {
        name: { contains: name },
      },
    });
    return okResponse(res, "featched  custommer successfully", custommer);
  } catch (err) {
    next(err);
  }
}
