const express = require('express');
const { asyncWrapper } = require('../../helpers');
const { menuCtrl } = require('../../controllers');

const menuRouter = express.Router();

menuRouter.get('/', asyncWrapper(menuCtrl.getByCategory));
menuRouter.get('/all/:shopId', asyncWrapper(menuCtrl.getAllBySHopId));
menuRouter.get('/:id', asyncWrapper(menuCtrl.getById));

module.exports = menuRouter;
