import {
  badRequestResponse,
  createdResponse,
  okResponse,
} from "../../helpers/functions/ResponseHandler.js";
import { prisma } from "../../index.js";

export async function deleteCat(req, res, next) {
  try {
    const { id } = req.body;
    const cat = await prisma.categories.delete({
      where: {
        id,
      },
    });
    return okResponse(res, "deleted cat successfully", cat);
  } catch (err) {
    next(err);
  }
}
