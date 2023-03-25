import { createContext } from "react";
import { Cart } from "../../interfaces/cart";
import { Category, Products } from "../../interfaces/product";

interface StoreContextProps {
    products: Products[],
    showProduct: Products,
    cartUser: Cart[],
    categories: Category[],
    userProducts: Products[],
    seeProduct: (product:Products) => void,
    getProductCategory: (category:number) => void,
    userCartProducts: (data:Products[]) => void,
    addProduct: (product: Products) => void,

}


export const StoreContext = createContext({} as StoreContextProps);