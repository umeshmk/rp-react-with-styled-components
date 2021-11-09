import { joiResolver } from "@hookform/resolvers/joi";
import Joi, { Schema } from "joi";
import { Inputs } from "./data";

const errorMsg = {
  "string.empty": "{{#label}} is required",
  "string.min": "{{#label}} must be min 6 chars",
  "string.max": "{{#label}} must be max 30 chars",
  "any.only": "{{#label}} must match",
};

const validationSchema: Schema = Joi.object<Inputs>({
  name: Joi.string().required().max(30).label("Name").messages(errorMsg),
  email: Joi.string()
    .required()
    .email({ tlds: { allow: false } })
    .label("Email")
    .messages(errorMsg),
  password: Joi.string().required().min(6).label("Password").messages(errorMsg),
  confirmPassword: Joi.string()
    .required()
    .valid(Joi.ref("password"))
    .label("Confirm Password")
    .messages(errorMsg),
});

export const validationResolver = joiResolver(validationSchema);
