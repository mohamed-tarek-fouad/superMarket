import {
  badRequestResponse,
  createdResponse,
  okResponse,
} from "../../helpers/functions/ResponseHandler.js";
import { prisma } from "../../index.js";

export async function updateCustommer(req, res, next) {
  try {
    const { id } = req.headers;
    let { name, dept, totalCost } = req.body;
    const getCustommer = await prisma.custommers.findUnique({
      where: { id },
    });
    if (!getCustommer) {
      return badRequestResponse(res, "this custommer does't exist");
    }
    if (!name) {
      name = getCustommer.name;
    }
    if (!dept) {
      dept = getCustommer.dept;
    }
    if (!totalCost) {
      totalCost = getCustommer.totalCost;
    }

    const custommer = await prisma.custommers.update({
      where: {
        id,
      },
      data: {
        name,
        dept,
        totalCost,
      },
    });

    return okResponse(res, "updated custommer successfully", custommer);
  } catch (err) {
    next(err);
  }
}
