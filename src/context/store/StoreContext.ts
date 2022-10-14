import { createContext } from "react";
import { Products } from "../../interfaces/products";

interface StoreContextProps {
    products: Products[],
    showProduct: Products,
    seeProduct: (product:Products) => void
}


export const StoreContext = createContext({} as StoreContextProps);