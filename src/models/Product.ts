import { BaseModel } from './BaseModel';

export class Product extends BaseModel {
    id: BigInteger;
    name: String;
    price: String;
    marketPrice: String;
    shortdesc: String;
    url: String;
    

    constructor(id: BigInteger, name: string, price: String, marketPrice: String, shortdesc: String, url: String) {
        super();
        this.id = id;
        this.name = name;
        this.price = price;
        this.marketPrice = marketPrice;
        this.shortdesc = shortdesc;
        this.url = url;
    }
}

export default Product;