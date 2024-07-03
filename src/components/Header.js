import { LOGO_URL } from "../utils/constants"
import { useState ,useContext} from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux"

const Header=()=>{
    // let btnName="Login"
    const [btnNameReact,setbtnNameReact]=useState("Login")
    
    const onlinestatus=useOnlineStatus();
    
    // const data=useContext(UserContext)
    const {loggedInUser}=useContext(UserContext)
  //  console.log(loggedInUser);//this is direct access of value in a object
      
//subscribing to the store using a selector
   const cartItems=useSelector((store)=>store.cart.items)
//   console.log(cartItems);

    return(
        <div className='flex justify-between bg-pink-100 shadow-lg m-2 sm:bg-yellow-100 lg:bg-green-100'>
            <div className='logo-container'>
                <img className='w-24' src={LOGO_URL} ></img>
            </div>
            <div className='flex items-center '>
                <ul className="flex p-4 m-4 ">
                   
                    <li className="px-4">
                    Online Status:{onlinestatus? "✅":"🔴"}
                    </li>
                    <li className="px-4">
                    <Link to="/home">Home</Link>
                    </li>
                    <li className="px-4">
                     <Link to="/about">About Us</Link>
                     </li>
                    <li className="px-4">
                    <Link to="/contact"> Contact</Link>
                    </li>
                    <li className="px-4">
                    <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 font-bold">
                    <Link to="/cart">cart-({cartItems.length}items)</Link>
                    </li>

                    <button className="login" onClick={()=>{
                       btnNameReact=="Login"? setbtnNameReact("Logout"):setbtnNameReact("Login");
                    }}>{btnNameReact}
                    </button>
                    
                    <li className="font-bold ml-2">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
} 
export default Header