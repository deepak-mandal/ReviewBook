export interface IProductEntity {
    productId: number;
    productName: string;
    description: string;
    verificationId: string;
    category: string;
    productImage?: File;
    imageByte?: File;
    specs: [ISpecEntity];
}

export interface ISpecEntity {
    spec: string;
}