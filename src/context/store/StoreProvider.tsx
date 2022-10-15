import { useEffect, useState } from "react"
import { axiosClient } from "../../api/axiosClient";
import { Cart } from "../../interfaces/cart";
import { Product } from "../../interfaces/product";
import { StoreContext } from "./StoreContext"

interface Prop {
    children: JSX.Element | JSX.Element[]
}

export const StoreProvider = ({children}:Prop) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [showProduct, setShowProduct] = useState<Product>({} as Product);
    const [cartUser, setCartUser] = useState<Cart[]>([]);
    const getAllProducts = async () => {
        const { data } = await axiosClient.get<Product[]>("/products");
        setProducts(data);
    }

    const seeProduct = (product:Product) => {
        setShowProduct(product);
    }

    const getUserCar = async () => {
        const { data } = await axiosClient.get<Cart[]>("/carts/user/1");
        setCartUser(data);
    }

    useEffect(() => {
        getAllProducts();
        getUserCar();
    }, []);
    return (
        <StoreContext.Provider value={{
            products,
            showProduct,
            cartUser,
            seeProduct
        }}>
            {children}
        </StoreContext.Provider>
    )
}