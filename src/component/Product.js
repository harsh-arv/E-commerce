import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action/index";
import { useParams } from "react-router";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const addProduct = (product) => {
      // toast("Added to Cart");
      dispatch(addCart(product));
  };

  const state = useSelector((state) => state.cart);
  // console.log(state);
  // var ar = [];
  // ar.push(localStorage.getItem("state"));
  // ar.push(state);
  // localStorage.setItem("state", JSON.stringify(ar));
  // console.log(JSON.parse(localStorage.getItem("state")));
  // var str = JSON.parse(localStorage.getItem("state"));
  // console.log(JSON.stringify(str));

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-6">
          <Skeleton height={400} />
        </div>
        <div className="col-md-6" style={{ lineHeight: 2 }}>
          <Skeleton height={50} width={300} />
          <Skeleton height={75} />
          <Skeleton height={25} width={150} />

          <Skeleton height={50} />
          <Skeleton height={150} />
          <Skeleton height={50} width={100} />
          <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
      
        <div className="col-md-6">
          <img className="card"
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="tet-uppecase text-black-50">{product.category}</h4>
          <h1 className="dispaly-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-start"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">${product.price}</h3>
          <p className="lead">{product.description}</p>
          <button 
            className="btn btn-outline-dark px-4 px-2"
            onClick={() => addProduct(product)}
          >
            Add to Cart
          </button>
          
          <Link
            className="btn btn-dark ms-2 px-3 py-2"
            aria-current="page"
            to="/cart"
          >
            Go to Cart
          </Link>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py 4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
        <div className="md"></div>
      </div>
    </div>
  );
};

export default Product;
