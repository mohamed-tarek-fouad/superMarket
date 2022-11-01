import {
  badRequestResponse,
  createdResponse,
  okResponse,
} from "../../helpers/functions/ResponseHandler.js";
import { prisma } from "../../index.js";

export async function total(req, res, next) {
  try {
    const { custommerId } = req.body;
    const getCustommer = await prisma.cart.findMany({
      where: {
        custommerId,
      },
      include: {
        custommer: true,
        order: {
          include: {
            product: true,
          },
        },
      },
    });
    let totalCost = 0;
    getCustommer.forEach((e) => {
      totalCost += e.order.product.price * e.order.quantityTaken;
    });
    const custommer = await prisma.custommers.update({
      where: {
        id: custommerId,
      },
      data: {
        dept: totalCost,
      },
    });
    return createdResponse(res, "created custommer successfully", custommer);
  } catch (err) {
    next(err);
  }
}
