import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { delCart, addCart, delAll } from "../redux/action/index";

import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavLink,
  NavItem,
} from "reactstrap";

const Cart = () => {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleClose = (item) => {
    dispatch(delAll(item));
  };

  const handleSub = (item) => {
    dispatch(delCart(item));
  };

  const handleAdd = (item) => {
    dispatch(addCart(item));
  };

  console.log(state);
  const cartItems = (cartItem) => {
    return (
      <div className="px-4 bg-light rounded-3" key={cartItem.id}>
        <div className="container py-4">
          <button
            onClick={() => handleClose(cartItem)}
            className="btn float-end btn-outline-primary"
            aria-label="close"
          >
            Delete
          </button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={cartItem.image}
                alt={cartItem.title}
                height="200px"
                width="180px"
              />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <button
                onClick={() => handleAdd(cartItem)}
                className="btn btn-outline-primary btn-sm"
                aria-label="close"
              >
                +
              </button>
              <p className="lead fw-bold">QTY: {cartItem.qty}</p>
              <button
                onClick={() => handleSub(cartItem)}
                className="btn btn-outline-primary btn-sm"
                aria-label="close"
              >
                -
              </button>
              <p className="lead fw-bold">${cartItem.price}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const emptyCart = () => {
    toast.error("Cart is Empty", {
      pauseOnHover: true,
      autoClose: 2000,
      position: toast.POSITION.TOP_CENTER,
    });
    return (
      <div className="px-4 bg-light rounded-3">
        <div className="container py-4">
          <div className="row">
            <h3>Add Some Product to Cart</h3>
          </div>
        </div>
      </div>
    );
  };

  const checkoutButton = () => {
    return (
      <div className="container">
        <div className="row">
          <Link
            to="/checkout"
            className="btn btn-outline-primary mb-5 w-25 mx-auto"
          >
            Proceed to checkout
          </Link>
        </div>
      </div>
    );
  };

  const buttonToSortLowestFirst = () => {
    return (
      <div className="container">
        <div className="row text-right mb-3">
          <Link
            to="/sortedL"
            className="btn btn-sm btn-block btn-outline-primary mb-5 w-25 mx-auto"
          >
            Sort by Price: Lowest First
          </Link>
        </div>
      </div>
    );
  };

  const buttonToSortHighestFirst = () => {
    return (
      <div className="container">
        <div className="row text-right mb-3">
          <Link
            to="/sortedH"
            className="btn btn-sm btn-block btn-outline-primary mb-5 w-25 mx-auto"
          >
            Sort by Price: Highest First
          </Link>
        </div>
      </div>
    );
  };

  return (
    <div>
      {state.length == 0 && emptyCart()}
      {state.length !== 0 && buttonToSortLowestFirst()}
      {state.length !== 0 && buttonToSortHighestFirst()}
      {state.length != 0 && state.map(cartItems)}
      {state.length !== 0 && checkoutButton()}
    </div>
  );
};

export default Cart;
