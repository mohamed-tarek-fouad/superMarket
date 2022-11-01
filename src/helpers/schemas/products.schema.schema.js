import Joi from "joi";

const createProductSchema = Joi.object({
  name: Joi.string().required(),
  quantity: Joi.number().required(),
  price: Joi.number().required(),
  catId: Joi.string().required(),
});

export default createProductSchema;
