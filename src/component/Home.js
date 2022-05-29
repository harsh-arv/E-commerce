import React from "react";
import Products from "./Products";
// import 


const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
      <img src={require('../component/homeImage.jpg')} className="d-block w-100" alt="Carousel" height="550px"/>
        <div className="card-img-overlay d-flex flex-column justify-content-centre" >
          <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON</h5>
          <p className="card-text fs-2">
            check out all the trends
          </p>
          <p className="card-text">Last updated 3 mins ago</p>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;