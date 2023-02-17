const Joi = require("joi");

const emailSchema = Joi.string().email().required();
const passwordSchema = Joi.string().min(8).max(30).required();

const validateUserInput = (email, password) => {
  const emailValidationResult = emailSchema.validate(email);
  const passwordValidationResult = passwordSchema.validate(password);

  if (emailValidationResult.error || passwordValidationResult.error) {
    return false;
  }
  return true;
};

exports.validateLogin = validateUserInput;
