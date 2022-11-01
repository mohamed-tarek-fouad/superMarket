import {
  badRequestResponse,
  createdResponse,
  okResponse,
} from "../../helpers/functions/ResponseHandler.js";
import { prisma } from "../../index.js";

export async function checkOut(req, res, next) {
  try {
    const { payed, custommerId } = req.body;
    const custommer = await prisma.custommers.findFirst({
      where: {
        id: custommerId,
      },
      include: {
        cart: true,
      },
    });
    if (!custommer) {
      return badRequestResponse(res, "no custommer with this id");
    }
    if (custommer.dept < payed) {
      return badRequestResponse(res, "that is more than he owe us");
    }
    const dept = custommer.dept - payed;
    const checkout = await prisma.custommers.update({
      where: {
        id: custommerId,
      },
      data: {
        payed,
        dept,
      },
    });

    return createdResponse(res, "created custommer successfully", checkout);
  } catch (err) {
    next(err);
  }
}
