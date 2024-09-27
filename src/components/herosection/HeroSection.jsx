import React from "react";
import Bike from "../../assests/bike.png"
import Bg from "../../assests/Vector 5.png"

const HeroSection = () => {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-between align-items-center  mt-5">
          <div className="col-lg-5 col-md-6 col-sm-12">
            <p className="fs-1">Fair price ride</p>
            <span className="rent fs-1 fw-bolder">Rent our </span> <span className="scot-color fs-1 fw-bolder">Scooter</span>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the <br /> 1500s, when an unknown printer took a galley of type and scrambled it to <br /> make a type specimen book. </p>
          </div>


          {/* responsiveness md-lg-xxl visbilblity */}
          <div className="d-none d-lg-block col-lg-7 col-md-6 col-sm-12">

            <img className="position-relative bg-po img-fluid" src={Bg} alt="frf" />
            <img className="bike-position bg-transparent position-absolute img-fluid" src={Bike} alt="frf" />


          </div>

          {/* moblie visible only */}
          <div className="col-lg-7 col-md-6 col-sm-12 d-block d-lg-none">
            <img className="img-fluid " src={Bike} alt="frf" />
          </div>


        </div>
      </div>
    </>
  );
};

export default HeroSection;
