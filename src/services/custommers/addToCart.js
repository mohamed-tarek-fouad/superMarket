import {
  badRequestResponse,
  createdResponse,
  okResponse,
} from "../../helpers/functions/ResponseHandler.js";
import { prisma } from "../../index.js";

export async function addToCart(req, res, next) {
  try {
    const { product, cost, custommerId } = req.body;
    const cart = await prisma.cart.create({
      data: {
        product,
        cost,
        custommerId,
      },
    });
    const getCustommer = await prisma.custommers.findUnique({
      where: {
        id: custommerId,
      },
    });
    await prisma.custommers.update({
      where: {
        id: custommerId,
      },
      data: {
        totlaCost: getCustommer.totlaCost + cost,
      },
    });
    return okResponse(res, "updated cart successfully", cart);
  } catch (err) {
    next(err);
  }
}
