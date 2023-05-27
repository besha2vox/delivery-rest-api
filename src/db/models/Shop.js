const { Schema, model } = require('mongoose');
const handleSaveError = require('../../helpers/handleSaveError');

const categorySchema = Schema({
    name: String,
    image: String,
});

const shopSchema = Schema({
    name: String,
    logo: String,
    menu: [{ type: Schema.Types.ObjectId, ref: 'menu' }],
    categories: [categorySchema],
    adds: String,
});

const Shop = model('shops', shopSchema);

module.exports = Shop;
