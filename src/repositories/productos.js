const mongoose = require('mongoose');

const producto = 'producto';

const productoSchema = new mongoose.Schema({
    name: {type: String, required: true, max: 50},
    price: {type: Number, required: true},
    foto: {type: String, required: true, max: 50},
    id: {type: String, required: true}
})

const productoModel = mongoose.model(producto, productoSchema);

module.exports = productoModel 


