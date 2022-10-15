import { createContext } from "react";
import { Cart } from "../../interfaces/cart";
import { Product } from "../../interfaces/product";

interface StoreContextProps {
    products: Product[],
    showProduct: Product,
    cartUser: Cart[],
    seeProduct: (product:Product) => void,

}


export const StoreContext = createContext({} as StoreContextProps);