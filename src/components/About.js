
import UserClass from "./UserClass"
// import UserContext from "../utils/UserContext"//this is used if we make class component
const About=()=>{
    return (
        <div>

            <h1>About</h1>
            

            <h2>this is namaste react series</h2>
            
            <UserClass name={"Sushil kushwah(class)"} location={"jaitapur"}/>
        </div>
    )
}
export default About

//this is used if we make class component
{/* <div> */}
            {/* Logged User: */}
                {/* <UserContext.Consumer> */}
                    {/* {({loggedInUser})=><h1>{loggedInUser}</h1> } */}
                    {/*  UserContext.Consumer as a component have a callback function */}
                {/* </UserContext.Consumer>  */}
            // </div>