import {
  badRequestResponse,
  createdResponse,
  okResponse,
} from "../../helpers/functions/ResponseHandler.js";
import { prisma } from "../../index.js";

export async function createCustommer(req, res, next) {
  try {
    const { name, dept } = req.body;
    const custommer = await prisma.custommers.create({
      data: {
        name,
        dept,
      },
    });
    return createdResponse(res, "created custommer successfully", custommer);
  } catch (err) {
    next(err);
  }
}
