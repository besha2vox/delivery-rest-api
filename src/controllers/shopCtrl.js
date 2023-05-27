const { httpError } = require('../helpers');
const { Shop } = require('../db');

const getShops = async (req, res, next) => {
    const shops = await Shop.find({});

    if (!shops) {
        return next(httpError(404));
    }

    res.status(200).json(shops);
};

const getShopById = async (req, res, next) => {
    const { id } = req.params;
    const shop = await Shop.findById(id);

    if (!shop) {
        return next(httpError(404));
    }

    res.status(200).json(shop);
};

module.exports = { getShops, getShopById };
