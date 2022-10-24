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
  const [categories, setCategories] = useState<string[]>([]);
  const [userProducts, setUserProducts] = useState<Products[]>([]);

  const getAllProducts = async () => {
    try {
      const { data } = await axiosClient.get<Products[]>("/products");
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const seeProduct = (product: Products) => {
    setShowProduct(product);
  };

  const getUserCar = async () => {
    try {
      const { data } = await axiosClient.get<Cart[]>("/carts/user/1");
      setCartUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllCategories = async () => {
    try {
      const { data } = await axiosClient.get<string[]>("/products/categories");
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductCategory = async (category: string) => {
    try {
      const { data } = await axiosClient.get<Products[]>(
        `/products/category/${category}`
      );
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const userCartProducts = (data:Products[]) => {
    setUserProducts(data);
  };

  const addProduct = (product:Products) => {
    setUserProducts([...userProducts, product]);
  }

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
    getAllCategories();
  }, []);
  return (
    <StoreContext.Provider
      value={{
        products,
        showProduct,
        cartUser,
        categories,
        userProducts,
        seeProduct,
        getProductCategory,
        userCartProducts,
        addProduct
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
