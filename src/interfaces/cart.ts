export interface Cart {
    id:       number;
    userId:   number;
    date:     Date;
    products: Product[];
}

export interface Product {
    productId: number;
    quantity:  number;
}