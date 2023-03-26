import { useStore } from "../hooks/useStore";

export const Modal = () => {
  const { showProduct } = useStore();
  return (
    <div
      className="modal fade"
      id="exampleModal"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog ">
        <div className="modal-content bg-dark">
          <div className="modal-header">
            <h1 className="modal-title fs-5 text-white" id="exampleModalLabel">
              {showProduct.title}
            </h1>
          </div>
          <div className="modal-body">
            <p className="text-white">{showProduct.description}</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary text-white"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
