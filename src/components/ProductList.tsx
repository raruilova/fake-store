import { useStore } from "../hooks/useStore";
import { Products } from "../interfaces/product";
import { Modal } from "./Modal";

interface Props {
  product: Products;
}

export const ProductList = ({ product }: Props) => {
  const { seeProduct } = useStore();
  const { addProduct } = useStore();
  return (
    <>
      <div className="col md-6">
        <div className="card h-100 bg-light">
          <img
            src={product.category.image}
            className="img-fluid"
            style={{
              height: "270px",
            }}
            alt={product.title}
          />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{`$${product.price}`}</p>
            <p className="card-text">{product.category.name}</p>
          </div>
          <button
            type="button"
            className="btn btn-primary w-25 mb-3 mx-3"
            data-bs-toggle="modal"
            onClick={() => seeProduct(product)}
            data-bs-target="#exampleModal"
          >
            More..
          </button>

          {/*<button
            className="btn btn-secondary mx-5 mb-2"
            onClick={() => addProduct(product)}
          >
            Add
          </button> */}
        </div>
      </div>
      <Modal />
    </>
  );
};
