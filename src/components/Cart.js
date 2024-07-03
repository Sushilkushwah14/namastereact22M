import { useDispatch, useSelector } from "react-redux";
import ItemList from "./itemList";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch()
    const handleClearCart=()=>{
      dispatch(clearCart())
    }
return(
    <div className="text-center m-4 p-4">
        <h1 className="text-2xl font-bold ">cart</h1>
        
        <div className="m-auto p-4 w-6/12">
        <button className="p-2 m-2m bg-black text-white rounded-lg"
        onClick={handleClearCart}
        >clear cart</button>
        {cartItems.length===0 && <h1 className="m-5 font-bold">!Hey your cart is empty ,please add something into the cart</h1>}
            <ItemList items={cartItems}/>
           
        </div>
        
    </div>
);
};

export default Cart;