
import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state={
            userInfo:{
                name:"dummyname",//intial value as usestate
                location:"default",
                avatar_url:"http://dummy-photo.com",
            }
        }
        
    }

    async componentDidMount(){//used for api calls
        // console.log("componentDidMount at last");
        const data=await fetch("https://api.github.com/users/sushilkushwah");
        const Json= await data.json();
        console.log(Json);

        this.setState({
            userInfo:Json,
        })
    }
    componentDidUpdate(){
        console.log("at last to show updates");
    }
    componentWillUnmount(){
        console.log("when we leave our page then this is called");
    }

    render(){ 
      const {name,location,avatar_url}=this.state.userInfo
        return(
            <div className="user-card">
            <h2>Name:{name} </h2>
            <h2>Address:{location} </h2>
            <h2>photo:{avatar_url} </h2>

            <h3>Contact:sushilkushwah@gmail.com </h3>
        </div>
        )

    }
}
export default UserClass