export const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col md-6">
          <div className="card h-100 bg-light">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
            <button type="button" className="btn btn-primary w-25 mb-3 mx-3" data-bs-toggle="modal" data-bs-target="#exampleModal">More...</button>
          </div>
        </div>
        <div className="col md-6">
          <div className="card h-100">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a short card.</p>
            </div>
          </div>
        </div>
        <div className="col md-6">
          <div className="card h-100">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        <div className="col md-6">
          <div className="card h-100">
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog ">
    <div className="modal-content bg-dark">
      <div className="modal-header">
        <h1 className="modal-title fs-5 text-white" id="exampleModalLabel">Modal title</h1>
        <button type="button" className="btn-close text-white" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary text-white" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary text-white">Save changes</button>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};
