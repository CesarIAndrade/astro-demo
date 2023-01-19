import React, { useRef } from "react";

function FanModal({title, inputLabel, buttonLabel}) {
  const idol_name = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: idol_name.current.value })
    };
    fetch('http://localhost:8000/idols/', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
  }

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" style={{ textAlign: "left !important" }}>
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {title}
            </h1>
            <button
              id="closeModal"
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="idol_name" className="form-label">
                  {inputLabel}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="idol_name"
                  ref={idol_name}
                />
              </div>
              <button data-bs-dismiss="modal" className="btn w-100 btn-outline-danger">
                {buttonLabel}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FanModal;
