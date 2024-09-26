import React from 'react'
import Logo from "../../assests/logo.png"

const Header = () => {
  return (
   <>
   
   <div className="container">
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0">
     <img src={Logo} alt="" />
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#"  className="nav-link px-3 text-black">Home</a></li>
        <li><a href="#" className="nav-link px-5 text-black">Services</a></li>
        <li><a href="#" className="nav-link px-3 text-black">ContactUs</a></li>
    
      </ul>

      <div className="col-md-3 text-end d-flex align-items-center">
        <button type="button" className="btn  me-2">Login</button>
        <button type="button" className="bg-scooter text-white border-0 px-4 py-2 rounded-5 fw-bold">Book Scooter</button>
      </div>
    </header>
  </div>
   
   </>
  )
}

export default Header