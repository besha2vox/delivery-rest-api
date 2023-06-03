const { httpError } = require('../helpers');
const { Menu } = require('../db');

const getAllBySHopId = async (req, res, next) => {
    const { page = 1, limit = 12 } = req.query;
    const skip = (page - 1) * limit;
    const { shopId: shop } = req.params;

    const menu = await Menu.find({ shop }, '', {
        skip,
        limit: Number(limit),
    });

    const totalHints = await Menu.count({ shop });

    if (!menu) {
        return next(httpError(404));
    }

    res.status(200).json({ menu, totalHints });
};

const getByCategory = async (req, res, next) => {
    const { data, page = 1, limit = 12 } = req.query;
    const { category, shop } = JSON.parse(data);
    const skip = (page - 1) * limit;

    const menu = await Menu.find({ category, shop }, '', {
        skip,
        limit: Number(limit),
    });

    const totalHints = await Menu.count({ category, shop });

    if (!menu) {
        return next(httpError(404));
    }

    res.status(200).json({ menu, totalHints });
};

const getById = async (req, res, next) => {
    const { id } = req.params;
    const dish = await Menu.findById(id);

    if (!dish) {
        return next(httpError(404));
    }

    res.status(200).json(dish);
};

module.exports = { getByCategory, getById, getAllBySHopId };
