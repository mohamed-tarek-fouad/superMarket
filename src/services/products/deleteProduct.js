import {
  badRequestResponse,
  createdResponse,
  okResponse,
} from "../../helpers/functions/ResponseHandler.js";
import { prisma } from "../../index.js";
import fs from "fs";
export async function deleteProduct(req, res, next) {
  try {
    const { id } = req.headers;
    const product = await prisma.products.delete({
      where: { id },
    });
    fs.unlink(`${process.env.FOLDER_PATH}${product.img}`, function (err) {
      if (err) return console.log(err);
    });
    return okResponse(res, "deleted  product successfully", product);
  } catch (err) {
    next(err);
  }
}
