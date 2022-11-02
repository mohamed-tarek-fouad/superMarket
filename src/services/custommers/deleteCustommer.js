import {
  badRequestResponse,
  createdResponse,
  okResponse,
} from "../../helpers/functions/ResponseHandler.js";
import { prisma } from "../../index.js";

export async function deleteCustommer(req, res, next) {
  try {
    const { id } = req.headers;
    const custommer = await prisma.custommers.delete({
      where: { id },
    });
    return okResponse(res, "featched  custommer successfully", custommer);
  } catch (err) {
    next(err);
  }
}
