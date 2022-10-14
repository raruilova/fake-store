import { useEffect, useState } from "react"
import { axiosClient } from "../../api/axiosClient";
import { Products } from "../../interfaces/products";
import { StoreContext } from "./StoreContext"

interface Prop {
    children: JSX.Element | JSX.Element[]
}

export const StoreProvider = ({children}:Prop) => {
    const [products, setProducts] = useState<Products[]>([]);
    const [showProduct, setShowProduct] = useState<Products>({} as Products);
    const getAllProducts = async () => {
        const { data } = await axiosClient.get<Products[]>("/products");
        setProducts(data);
    }

    const seeProduct = (product:Products) => {
        setShowProduct(product);
    }

    useEffect(() => {
        getAllProducts();
    }, []);
    return (
        <StoreContext.Provider value={{
            products,
            showProduct,
            seeProduct
        }}>
            {children}
        </StoreContext.Provider>
    )
}