import Joi from "joi";

const createProductSchema = Joi.object({
  name: Joi.string().required(),
  payed: Joi.number().allow("").allow(null).optional(),
});

export default createProductSchema;
