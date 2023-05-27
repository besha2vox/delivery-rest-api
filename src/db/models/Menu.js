const { Schema, model } = require('mongoose');
const handleSaveError = require('../../helpers/handleSaveError');

const menuSchema = Schema({
    name: String,
    category: String,
    price: Number,
    description: String,
    image: String,
    shop: { type: Schema.Types.ObjectId, ref: 'shops', required: true },
});

const Menu = model('menu', menuSchema);

module.exports = Menu;
