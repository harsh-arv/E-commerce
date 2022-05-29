import React from "react";
import { useSelector } from "react-redux";
import {Link} from "react-router-dom";

const Navbar = () => {

  const state=useSelector((state)=>state.cart)

  const lengthOfCart=state.length;
  return (
    <div>
     
     <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <Link className="navbar-brand fw-bold fs-4" to="/E-commerce">
            E-Commerce
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/E-commerce">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>

            <div className="buttons">
        <Link to="/login" className="btn btn-outline-dark">
         login </Link>
          <Link to="/register" className="btn btn-outline-dark ms-2">
          SignUp </Link>
          <Link to="/cart" className="btn btn-outline-dark ms-2">
          Cart({lengthOfCart}) </Link>
        
      </div>
          </div>
        </div>
      </nav>

     </div>
  );
};
export default Navbar;
