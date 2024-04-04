import React from 'react'
import ReactDom from 'react-dom/client'
import Header from "./components/Header.js"
import Body from './components/Body.js'
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom'
import About from './components/About.js'
import Contact from './components/Contact.js'
import Error from './components/Error.js'
import ResMenu from './components/ResMenu.js'

const AppLayout=()=>{
    return(
        <div className='app'>
            <Header/>
            
            <Outlet/>

        </div>
    )
}
const appRouter=createBrowserRouter([//Gives configuration about components
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/home",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/restaurants/:resId",
                element:<ResMenu/>,
            },
        ],
        errorElement:<Error/>,
    },


])

const root=ReactDom.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);

//routerProvider is for rendering which include all componenets configuration 