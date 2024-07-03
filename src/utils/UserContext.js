
import { createContext } from "react";

const UserContext = createContext({
    loggedInUser: "Default User",
});
console.log(UserContext);
export default UserContext;

//global object to store the value and use it anywhere
//and can access by state varible useContext(UserContext)
//after creating like this
