import {
  badRequestResponse,
  createdResponse,
  okResponse,
} from "../../helpers/functions/ResponseHandler.js";
import { prisma } from "../../index.js";

export async function createCart(req, res, next) {
  try {
    const { productId, custommerId, quantityTaken } = req.body;
    const order = await prisma.order.create({
      data: {
        productId,
        quantityTaken,
      },
    });
    const cart = await prisma.cart.create({
      data: {
        orderId: order.id,
        custommerId,
      },
    });
    return createdResponse(res, "created cart successfully", cart);
  } catch (err) {
    next(err);
  }
}
