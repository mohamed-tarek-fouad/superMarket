import Joi from "joi";

const createProductSchema = Joi.object({
  name: Joi.string().required(),
});

export default createProductSchema;
