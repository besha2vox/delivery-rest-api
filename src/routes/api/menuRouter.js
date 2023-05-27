const express = require('express');
const { asyncWrapper } = require('../../helpers');
const { menuCtrl } = require('../../controllers');

const menuRouter = express.Router();

menuRouter.get('/', asyncWrapper(menuCtrl.getByCategory));
menuRouter.get('/:id', asyncWrapper(menuCtrl.getById));

module.exports = menuRouter;
