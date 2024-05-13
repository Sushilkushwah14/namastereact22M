import { LOGO_URL } from "../utils/constants"
import { useState } from "react"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"

const Header=()=>{
    // let btnName="Login"
    const [btnNameReact,setbtnNameReact]=useState("Login")
    const onlinestatus=useOnlineStatus();
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
                    <li className="px-4">
                    <Link to="/cart">cart</Link></li>
                    <button className="login" onClick={()=>{
                       btnNameReact=="Login"? setbtnNameReact("Logout"):setbtnNameReact("Login");
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </div>
    )
} 
export default Header