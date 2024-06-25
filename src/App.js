import React,{lazy,Suspense} from 'react'
import ReactDom from 'react-dom/client'
import Header from "./components/Header.js"
import Body from './components/Body.js'
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom'
// import About from './components/About.js'
import Contact from './components/Contact.js'
import Error from './components/Error.js'
import ResMenu from './components/ResMenu.js'
// import Grocery from './components/Grocery.js'

//chunking
//lazy loading or on demand loading
//code splitting
//on demand loading
//dynamix import
const Grocery=lazy(()=>import('./components/Grocery.js'));//this is lazy type import to divide code of that component when is it used or needed
                //callback function +import+path of component
const About=lazy(()=>import('./components/About.js'));


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
                element:<Suspense fallback={<h1>loading....</h1>}><About/></Suspense>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>loading....</h1>}><Grocery/></Suspense>,
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