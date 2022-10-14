import { ProductList } from "../components/ProductList";
import { useStore } from "../hooks/useStore";

export const Home = () => {
  const { products } = useStore();
  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <ProductList product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
