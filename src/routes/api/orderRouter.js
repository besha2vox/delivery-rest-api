const express = require('express');
const { asyncWrapper } = require('../../helpers');
const { orderCtrl } = require('../../controllers');
const { validateOrder } = require('../../middlewares');

const orderRouter = express.Router();

orderRouter.post('/', validateOrder, asyncWrapper(orderCtrl.order));

module.exports = orderRouter;
