import Joi from "joi";

const updateProductSchema = Joi.object({
  name: Joi.string().allow("").allow(null).optional(),
  payed: Joi.number().allow("").allow(null).optional(),
  totalCost: Joi.number().allow("").allow(null).optional(),
});

export default updateProductSchema;
