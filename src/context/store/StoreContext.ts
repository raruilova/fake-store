import { createContext } from "react";
import { Cart } from "../../interfaces/cart";
import { Products } from "../../interfaces/product";

interface StoreContextProps {
    products: Products[],
    showProduct: Products,
    cartUser: Cart[],
    seeProduct: (product:Products) => void,

}


export const StoreContext = createContext({} as StoreContextProps);