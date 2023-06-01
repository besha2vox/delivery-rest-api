const Joi = require('joi');

const orderSchema = Joi.object({
    user: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required().messages({
            'any.required': 'Email is required',
            'string.email': 'Invalid email format',
        }),
        address: Joi.string().required(),
    }),
    totalPrice: Joi.number().required(),
    order: Joi.array().items(
        Joi.object({
            name: Joi.string().required(),
            orderedQuantity: Joi.number().required(),
            price: Joi.number().required(),
        })
    ),
}).unknown(false);

const { HttpError } = require('../helpers');

const validateOrder = (req, res, next) => {
    const { methods } = req.route;
    const [method] = Object.keys(methods);
    const { error, value } = orderSchema.validate(req.body, {
        stripUnknown: true,
        abortEarly: false,
    });

    if (error) {
        next(HttpError(400, error.message));
    }
    req.data = value;
    next();
};

module.exports = validateOrder;
