import React from "react";
import Bike from "../../assests/bike.png"

const HeroSection = () => {
  return (
    <>
      <div className="container">
      <div className="row d-flex justify-content-between align-items-center  mt-5">
        <div className="col-lg-7 col-md-6 col-sm-12">
            <p className="fs-1">Fair price ride</p>
            <span className="rent fs-1 fw-bolder">Rent our </span> <span className="scot-color fs-1 fw-bolder">Scooter</span>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the <br /> 1500s, when an unknown printer took a galley of type and scrambled it to <br /> make a type specimen book. </p>
        </div>

        <div className="col-lg-5 col-md-6 col-sm-12">
            <img className="img-fluid" src={Bike} alt="" />
        </div>
      </div>
      </div>
    </>
  );
};

export default HeroSection;
