import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout/Mainlayout";
import Home from "../Pages/Home/Home";
import Favourite from "../Pages/Favourite/Favourite";
import Login from "../Pages/Login/Login";
import Phone from "../Pages/Phone/Phone";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <Mainlayout></Mainlayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=>fetch('phones.json')
            },
            {
                path: "/favourite",
                element: <Favourite></Favourite>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/phones/:id",
                element: <Phone></Phone>,
                loader: ()=>fetch('/phones.json')
            
            }
        ]
    }
])






export default myCreatedRoute;