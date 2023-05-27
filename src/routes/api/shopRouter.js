const express = require('express');
const { asyncWrapper } = require('../../helpers');
const { shopCtrl } = require('../../controllers');

const shopRouter = express.Router();

shopRouter.get('/', asyncWrapper(shopCtrl.getShops));

shopRouter.get('/:id', asyncWrapper(shopCtrl.getShopById));

module.exports = shopRouter;
