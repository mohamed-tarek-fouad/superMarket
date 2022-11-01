import Joi from "joi";

const createCartSchema = Joi.object({
  custommerId: Joi.string().required(),
  quantityTaken: Joi.number().required(),
  productId: Joi.string().required(),
});

export default createCartSchema;
