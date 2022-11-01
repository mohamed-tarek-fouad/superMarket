import Joi from "joi";

const createProductSchema = Joi.object({
  name: Joi.string().required(),
  productId: Joi.string().required(),
  dept: Joi.number().allow("").allow(null).optional(),
});

export default createProductSchema;
