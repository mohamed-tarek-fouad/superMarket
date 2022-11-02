import {
  badRequestResponse,
  createdResponse,
  okResponse,
} from "../../helpers/functions/ResponseHandler.js";
import { prisma } from "../../index.js";

export async function updateProduct(req, res, next) {
  try {
    const { id } = req.headers;
    let { name, price, catId } = req.body;
    let img;
    if (req.file) {
      img = `/uploads/images/${req.file.filename}`;
    }
    const getProduct = await prisma.products.findUnique({
      where: { id },
    });
    if (!getProduct) {
      return badRequestResponse(res, "this product does't exist");
    }
    if (!name) {
      name = getProduct.name;
    }
    if (!catId) {
      name = getProduct.name;
    }

    if (!price) {
      price = getProduct.price;
    }

    const product = await prisma.products.update({
      where: {
        id,
      },
      data: {
        name,
        price,
        img,
        catId,
      },
    });

    return okResponse(res, "updated product successfully", product);
  } catch (err) {
    next(err);
  }
}
