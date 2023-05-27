const { httpError } = require('../helpers');
const { Menu } = require('../db');

const getByCategory = async (req, res, next) => {
    const { category, shop } = req.body;
    const menu = await Menu.find({ category, shop });

    if (!menu) {
        return next(httpError(404));
    }

    res.status(200).json(menu);
};

const getById = async (req, res, next) => {
    const { id } = req.params;
    const dish = await Menu.findById(id);

    if (!dish) {
        return next(httpError(404));
    }

    res.status(200).json(dish);
};

module.exports = { getByCategory, getById };
