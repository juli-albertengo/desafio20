const mongoose = require('mongoose');
const productoModel = require('./productos');

const connectToDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true})
        return 'Se conecto piola'
    } catch (error) {
        return error;
    }
}

module.exports = {productoModel, connectToDB}
