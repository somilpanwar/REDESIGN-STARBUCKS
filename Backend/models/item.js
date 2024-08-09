const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    ingredients: { type: [String], required: true },
    flavor_notes: { type: [String], required: true },
    image_url: { type: String, required: true }
});

module.exports = mongoose.model('Item', ItemSchema);
