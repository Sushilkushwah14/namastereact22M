import { LOGO_URL } from "../utils/constants"
import { useState } from "react"
import { Link } from "react-router-dom"

const Header=()=>{
    // let btnName="Login"
    const [btnNameReact,setbtnNameReact]=useState("Login")
    return(
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL} ></img>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>
                    <Link to="/home">Home</Link>
                    </li>
                    <li>
                     <Link to="/about">About Us</Link>
                     </li>
                    <li>
                    <Link to="/contact"> Contact</Link>
                    </li>
                    <li>
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