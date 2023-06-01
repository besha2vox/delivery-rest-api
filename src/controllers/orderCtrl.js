const { httpError } = require('../helpers');
const { sendOrderedMail } = require('../service/sendOrderedMail');

const order = async (req, res, next) => {
    const { order, totalPrice, user } = req.data;

    if (!order || !totalPrice || !user) {
        return next(httpError(400));
    }

    await sendOrderedMail(req.data);

    res.status(200).json(req.data);
};

module.exports = { order };
