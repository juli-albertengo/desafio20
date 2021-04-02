const faker = require('faker');

const createFakeData = (quantity) => {
    let products = []
    if(quantity){
        for(let i = 0; i < quantity; i++){
            product = {
                name: faker.commerce.product(),
                price: faker.commerce.price(),
                foto: faker.image.imageUrl(),
                id: faker.datatype.uuid()
            }
            products.push(product);
        }
    }
    return products;
}

module.exports = createFakeData;