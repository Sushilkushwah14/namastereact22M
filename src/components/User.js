import { useState } from "react"

const User=(props)=>{
    const [count,setcount]=useState(0)
    const [count1]=useState(1)
    const{name}=props
    return(
        <div className="user-card">
            <h1>Count:{count}</h1>
            <h1>Count1:{count1}</h1>
            <h2>Name:{name} </h2>
            <h2>Address:khargone </h2>
            <h3>Contact:sushilkushwah@gmail.com </h3>
        </div>
    )
}
export default User