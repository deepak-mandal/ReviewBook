import { IProductEntity, ISpecEntity } from "../types/product-management.interface"

export class ProductEntity {
    productId: number;
    productName: string;
    description: string;
    verificationId: string;
    category: string;
    productImage: File;
    specs: [ISpecEntity]

    constructor(data: IProductEntity){
        this.productId = data.productId,
        this.productName = data.productName,
        this.description = data.description,
        this.verificationId = data.verificationId,
        this.category = data.category,
        this.productImage = data.imageByte,
        this.specs = data.specs
    }

}