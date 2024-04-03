import { Injectable } from "@angular/core";
import { Iproduct } from "../interface/product";

@Injectable({
    providedIn: 'root'
})

export class ProductsService {

    productsArray :Array<Iproduct> = [
        {
            pName: 'Samsung',
            pId: '101',
            pStatus: "Progress",
            canReturn : 0
        },
        {
            pName: 'Vivo',
            pId: '102',
            pStatus: "Dispatched",
            canReturn : 1
        },
        {
            pName: 'Iphone',
            pId: '103',
            pStatus: "Delivered",
            canReturn : 1
        }
    ]

    fetchAllProducts(){
        return this.productsArray
    }
    
    fetchSingleProduct(productId : string):Iproduct{
        return this.productsArray.find(prod => prod.pId === productId) as Iproduct
    }

    updateProduct(product : Iproduct){
        let getindex = this.productsArray.findIndex(prod => prod.pId === product.pId);
        this.productsArray[getindex] = product;
    }
    addProduct(prod : Iproduct){
        this.productsArray.push(prod)
    }
}