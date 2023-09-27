import { useEffect, useState } from "react";
import { axiosClient } from "../../api/axiosClient";
import { Cart } from "../../interfaces/cart";
import { Category, Products } from "../../interfaces/product";
import { StoreContext } from "./StoreContext";
import swal from "sweetalert";

interface Prop {
  children: JSX.Element | JSX.Element[];
}

export const StoreProvider = ({ children }: Prop) => {
  const [products, setProducts] = useState<Products[]>([]);
  const [showProduct, setShowProduct] = useState<Products>({} as Products);
  const [cartUser, setCartUser] = useState<Cart[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [userProducts, setUserProducts] = useState<Products[]>([]);

  const getAllProducts = async () => {
    try {
      const { data } = await axiosClient.get<Products[]>(
        "/products?offset=10&limit=10"
      );
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const seeProduct = (product: Products) => {
    setShowProduct(product);
  };

  const getAllCategories = async () => {
    try {
      const { data } = await axiosClient.get<Category[]>("/categories");
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductCategory = async (category: number) => {
    try {
      const { data } = await axiosClient.get<Products[]>(
        `/categories/${category}/products`
      );
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const userCartProducts = (data: Products[]) => {
    setUserProducts(data);
  };

  const addProduct = (product: Products) => {
    setUserProducts([...userProducts, product]);
    swal("Good job!", "Your product has been added to your cart!", "success");
  };

  const deleteProductCart = (id: number) => {
    const newProducts: Products[] = userProducts.filter(
      (product) => product.id != id
    );

    setUserProducts(newProducts);
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
        addProduct,
        deleteProductCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
