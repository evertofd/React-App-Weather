import React from "react";

const Weather = (props) => {
  return (
    <div className="container text-light">
      {props.city ? (
        <div className="cards pt-4 mt-5">
          <h1>{props.city}</h1>
          <h5 className="py-4">
            <i className={`fas ${props.weatherIcon} display-1`}></i>
          </h5>
          {props.temp_celsius ? (
            <h1 className="py-2">{props.temp_celsius}&deg;</h1>
          ) : null}
          {/**sow max and min temp */}
          {minmaxTemp(props.temp_min, props.temp_max)}

          <h4 className="py-3">{props.description.toUpperCase()}</h4>
        </div>
      ) : (
        <div className="cards pt-4 mt-5">
          <h1 className="mb-5 mt-5">CONOCE EL ESTADO DEL CLIMA </h1>
          <div className="d-flex justify-content-around">
            <h1>
              <i class="fas fa-cloud-moon"></i>
            </h1>
            <h1>
              <i class="fas fa-cloud-moon-rain"></i>
            </h1>
            <h1>
              <i class="fas fa-cloud-sun"></i>
            </h1>
            <h1>
              <i class="fas fa-cloud-rain"></i>
            </h1>
            <h1>
              <i class="fas fa-cloud-moon-rain"></i>
            </h1>
            <h1>
              <i class="fas fa-cloud-sun"></i>
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

function minmaxTemp(min, max) {
  if (min && max) {
    return (
      <h3>
        <span className="px-4">{min}&deg;</span>
        <span className="px-4">{max}&deg;</span>
      </h3>
    );
  }
}
export default Weather;
