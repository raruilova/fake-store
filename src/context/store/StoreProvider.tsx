import { useEffect, useState } from "react";
import { axiosClient } from "../../api/axiosClient";
import { Cart } from "../../interfaces/cart";
import { Products } from "../../interfaces/product";
import { StoreContext } from "./StoreContext";

interface Prop {
  children: JSX.Element | JSX.Element[];
}

export const StoreProvider = ({ children }: Prop) => {
  const [products, setProducts] = useState<Products[]>([]);
  const [showProduct, setShowProduct] = useState<Products>({} as Products);
  const [cartUser, setCartUser] = useState<Cart[]>([]);

  const getAllProducts = async () => {
    const { data } = await axiosClient.get<Products[]>("/products");
    setProducts(data);
  };

  const seeProduct = (product: Products) => {
    setShowProduct(product);
  };

  const getUserCar = async () => {
    const { data } = await axiosClient.get<Cart[]>("/carts/user/1");
    setCartUser(data);
  };

  /*const getUserProduct = () => {
    const arr:Array<Products> = [];
    try {
        const productsId = cartUser.flatMap((product) => product.products);
        Promise.all( productsId.map((e) => {
          return axiosClient.get<Products>(`/products/${e.productId}`);
         }))
         .then((response) => {
           response.forEach((result) => {
             arr.push(result.data);
           })
         });
         setUserProduct(arr);
       } catch (error) {
        console.log(error);
       }
  }*/

  useEffect(() => {
    getAllProducts();
    getUserCar();
  }, []);
  return (
    <StoreContext.Provider
      value={{
        products,
        showProduct,
        cartUser,
        seeProduct,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
