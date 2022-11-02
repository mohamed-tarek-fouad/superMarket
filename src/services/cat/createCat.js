import {
  badRequestResponse,
  createdResponse,
  okResponse,
} from "../../helpers/functions/ResponseHandler.js";
import { prisma } from "../../index.js";

export async function createCat(req, res, next) {
  try {
    const { cat } = req.body;
    const category = await prisma.categories.create({
      data: {
        cat,
      },
    });
    return createdResponse(res, "created cat successfully", category);
  } catch (err) {
    next(err);
  }
}
