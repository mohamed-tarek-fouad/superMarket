import {
  badRequestResponse,
  createdResponse,
  okResponse,
} from "../../helpers/functions/ResponseHandler.js";
import { prisma } from "../../index.js";

export async function createCat(req, res, next) {
  try {
    const { name } = req.body;
    const cat = await prisma.categories.create({
      data: {
        name,
      },
    });
    return createdResponse(res, "created cat successfully", cat);
  } catch (err) {
    next(err);
  }
}
