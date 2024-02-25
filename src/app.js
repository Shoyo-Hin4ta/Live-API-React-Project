import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResMenu from "./components/ResMenu";
// We wont import grocery in the normal way because we are doing chunking.
import Cart from "./components/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // named import
import { Provider } from "react-redux";
import appStore from "./utils/appStore";


//Lazy takes in a callback function
const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
    return (
        <Provider store = {appStore}>
            <div className = "app">
                {/* Header */}
                <Header/>
                {/* <Body /> */}
                {/* //Body */}
                {/* //Footer */}
                <Outlet />
            </div>
        </Provider>
    )
}


const appRouter = createBrowserRouter([
    {
        path :'/',
        element : <AppLayout />,
        children : [
            {
                path : '/',
                element : <Body />
            },
            {
                path : '/aboutus',
                element : <AboutUs />,            
            },
            {
                path : '/contact',
                element : <Contact />,
            },
            {
                path : '/restaurant/:resID',
                element : <ResMenu />
            },
            {
                path: '/grocery',
                element : <Suspense fallback = {<h1>Loading the Grocery Page</h1>}><Grocery /></Suspense>
            },{
                path: '/cart',
                element: <Cart />
            }
        ],
        errorElement : <Error />,
    },

]); //takes in list of objecst (which are paths)



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

