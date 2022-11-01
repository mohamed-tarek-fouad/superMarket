import Joi from "joi";

const updateProductSchema = Joi.object({
  name: Joi.string().allow("").allow(null).optional(),
  quantity: Joi.number().allow("").allow(null).optional(),
  price: Joi.number().allow("").allow(null).optional(),
  catId: Joi.string().allow("").allow(null).optional(),
});

export default updateProductSchema;
