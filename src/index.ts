import productsRouter from "./routes/products.routes";
import {connectToDB} from './repositories/index';
//DESAFIO CLASE 22
import * as createFakeData from './repositories/mock-server';

require('dotenv').config();
const express = require('express');
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.use('/products', productsRouter);

//DESAFIO 22
app.get('/productos/vista-test/:quantity', (req, res) => {
    const {quantity} = req.params;
    let quant = parseInt(quantity);
    let products = []
    if(quant){
        products = createFakeData(quant);
        res.send(products)
    } else {
        res.send('No hay productos');
    }
})

app.listen(8080 || process.env.PORT, async( ) => {
    console.log(await connectToDB())
})



