import {productoModel} from '../repositories/index';

export class Product {
    public name: string
    public foto: string
    public price: number

    constructor(name: string, foto: string, price:number){
        this.name = name;
        this.price = price;
        this.foto = foto;
    }
}

export class Products{
    products: Array<any>
    
    constructor(arrayProducts: Array<Product>){
        this.products = arrayProducts;
    }

    async getAllProducts(){
        this.products = await productoModel.find({})
        if(this.products === null || this.products === []){
            return []
        }
        return this.products;
    }

    async getProductById(id: string){
        let product = await productoModel.findOne({id})
        if(!product){
            return {}
        }
        return product;
    }

    async addProduct(product: Product){
        console.log(product);
        let productToSave = new productoModel(product);
        console.log(productToSave);
        let savedProduct = await productToSave.save();
        return savedProduct;
    }

    async updateProductById(id: string, updatedProduct: any){
        let product = await productoModel.updateOne({id}, {$set: updatedProduct});
        if(!product){
            return {error : 'Producto no encontrado'}
        }
        return product;
    }

    async deleteProduct(id: string){
        let product = await productoModel.deleteOne({id})
        if(!product){
            return {}
        }
        return product;
    }
}
