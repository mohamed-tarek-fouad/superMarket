import {
  badRequestResponse,
  createdResponse,
  okResponse,
} from "../../helpers/functions/ResponseHandler.js";
import { prisma } from "../../index.js";

export async function updateCustommer(req, res, next) {
  try {
    const { id } = req.headers;
    let { name, dept } = req.body;
    const getCustommer = await prisma.custommers.findUnique({
      where: { id: parseInt(id) },
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

    const custommer = await prisma.custommers.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name,
        dept,
      },
    });

    return okResponse(res, "updated custommer successfully", custommer);
  } catch (err) {
    next(err);
  }
}
