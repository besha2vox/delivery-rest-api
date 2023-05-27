const { httpError } = require('../helpers');
const { Menu } = require('../db');

const getByCategory = async (req, res, next) => {
    const { data } = req.query;
    const { category, shop } = JSON.parse(data);

    const menu = await Menu.find({ category, shop });
    console.log({ menu });

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
