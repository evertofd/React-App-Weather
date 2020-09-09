import React from "react";
import "./form.style.css";
const Form = (props) => {
  return (
    <div className="container">
      <div className="container text-light mt-5">
        <h1 className="mt-5">
          WORLD CLIMATE <i class="fas fa-temperature-high"></i>
        </h1>
      </div>

      <div>{props.error ? error() : null}</div>
      <form onSubmit={props.loadweather}>
        <div className="row ml-2">
          <div className="col-md-3 offset-md-2">
            <input
              type="text"
              className="form-control"
              name="city"
              autoComplete="off"
              placeholder="City"
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              name="country"
              autoComplete="off"
              placeholder="Country"
            />
          </div>
          <div className="col-md-3 mt-md-0 text-md-left py-2">
            <button className="btn-lg btn-success">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
};

function error() {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Agrege una Ciudad y Pais Valido
    </div>
  );
}
export default Form;
