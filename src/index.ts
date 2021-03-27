import productsRouter from "./routes/products.routes";
import {connectToDB} from './repositories/index';

require('dotenv').config();
const express = require('express');
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.use('/products', productsRouter);

app.listen(8080 || process.env.PORT, async( ) => {
    console.log(await connectToDB())
})



