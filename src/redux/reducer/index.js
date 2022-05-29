import { combineReducers } from "redux";
import { ToastContainer, toast } from "react-toastify";

const handleCart = (state = [], action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      const exist = state.find((x) => x.id === product.id);
      // console.log(exist);
      if (exist) {
        //increase the quantity
        toast("Quantity Increased", { pauseOnHover: true, autoClose: 1500 });
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        toast("Added To Cart", { pauseOnHover: true, autoClose: 1500 });
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
    case "DELITEM":
      const exist1 = state.find((x) => x.id === product.id);
      if (exist1.qty === 1) {
        toast.error("Removed from  Cart", {
          pauseOnHover: true,
          autoClose: 1500,
        });
        return state.filter((x) => x.id !== exist1.id);
      } else {
        toast("Quantity Decreased", { pauseOnHover: true, autoClose: 1500 });

        return state.map((x) =>
          //decrease quanity
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }
    case "DELALL":
      toast("Item Removed from Cart", { pauseOnHover: true, autoClose: 1500 });
      const exist2 = state.find((x) => x.id === product.id);
      console.log(exist2);
      //decrease quanity
      return state.filter((x) => x.id !== exist2.id);

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cart: handleCart,
});

export default rootReducer;
