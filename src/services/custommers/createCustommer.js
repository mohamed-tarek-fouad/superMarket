import {
  badRequestResponse,
  createdResponse,
  okResponse,
} from "../../helpers/functions/ResponseHandler.js";
import { prisma } from "../../index.js";

export async function createCustommer(req, res, next) {
  try {
    const { name } = req.body;
    const custommer = await prisma.custommers.create({
      data: {
        name,
      },
    });
    return createdResponse(res, "created custommer successfully", custommer);
  } catch (err) {
    next(err);
  }
}
