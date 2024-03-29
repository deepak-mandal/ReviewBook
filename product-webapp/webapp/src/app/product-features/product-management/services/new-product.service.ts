import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from "../models/product";

@Injectable()
export class NewProductService {

    NEW_PRODUCT_URL = "http://localhost:8081/product/add";
    GET_ALL_PRODUCTS = "http://localhost:8081/product/all";
    GET_PRODUCT_BY_ID = "http://localhost:8081/product/getProduct"

    constructor(private http: HttpClient) { }

    addNewProduct(product: any) {
        return this.http.post(this.NEW_PRODUCT_URL, product);
    }

    getAllProducts() {
        return this.http.get(this.GET_ALL_PRODUCTS);
    }

    getById(productId) {
        return this.http.get(this.GET_PRODUCT_BY_ID + `/${productId}`);
    }
}