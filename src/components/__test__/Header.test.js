import { fireEvent, render ,screen} from "@testing-library/react"
import Header from "../Header"
import appStore from "../../utils/appStore"
import {Provider} from "react-redux"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

it("should load Header component with a login button",()=>{
    render(
    <BrowserRouter>
     <Provider store={appStore} >  
    <Header/>
    </Provider>
    </BrowserRouter>
    )
    
    const logInButton=screen.getByRole("button",{name:"Login"})
    //const logInButton=screen.getBytext("Login")
    expect(logInButton).toBeInTheDocument()
})
it("should load header with a cart(0)",()=>{
    render(
    <BrowserRouter>
     <Provider store={appStore} >  
    <Header/>
    </Provider>
    </BrowserRouter>
    )
    
    const cartitem=screen.getByText("cart-(0items)")
    //const logInButton=screen.getBytext("Login")
    expect(cartitem).toBeInTheDocument()
})

it("should load header with a cart(0) component",()=>{
    render(
    <BrowserRouter>
     <Provider store={appStore} >  
    <Header/>
    </Provider>
    </BrowserRouter>
    )
    
    const cartcomponent=screen.getByText(/cart/)
    //const logInButton=screen.getBytext("Login")
    expect(cartcomponent).toBeInTheDocument()
})

it("should change login button into logout on click",()=>{
    render(
    <BrowserRouter>
     <Provider store={appStore} >  
    <Header/>
    </Provider>
    </BrowserRouter>
    )
    
    const logInButton=screen.getByRole("button",{name:"Login"})
    //const logInButton=screen.getBytext("Login")
    fireEvent.click(logInButton)

    const logoutButton=screen.getByRole("button",{name:"Logout"})

    expect(logoutButton).toBeInTheDocument()
})