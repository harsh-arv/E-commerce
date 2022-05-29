import { ToastContainer, toast } from 'react-toastify';
//for Add item to cart 
export const addCart=(product)=>{
    return{
        type:"ADDITEM",
        payload:product
    }
}

//for delete item from cart
export const delCart=(product)=>{
    return {
        type:"DELITEM",
        payload:product
    }
}

//for delete whole item from cart
export const delAll=(product)=>{
    return {
        type:"DELALL",
        payload:product
    }
}