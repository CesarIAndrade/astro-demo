import React, { useRef } from "react";

function FanModal() {
  const idol_name = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(idol_name.current.value);
    alert("hola");
  }

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" style={{ textAlign: "left !important" }}>
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Dinos quiém es tu ídolo...
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label for="idol_name" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="idol_name"
                  ref={idol_name}
                />
              </div>
              <button className="btn btn-outline-danger">Registrar</button>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FanModal;
