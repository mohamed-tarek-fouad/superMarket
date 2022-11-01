import {
  badRequestResponse,
  createdResponse,
  okResponse,
} from "../../helpers/functions/ResponseHandler.js";
import { prisma } from "../../index.js";

export async function deleteCart(req, res, next) {
  try {
    const { id } = req.body;
    const cart = await prisma.cart.delete({
      where: {
        id,
      },
    });
    return okResponse(res, "deleted cart successfully", cart);
  } catch (err) {
    next(err);
  }
}
