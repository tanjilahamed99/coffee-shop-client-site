import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/coffee',
        element: <AddCoffee></AddCoffee>
    },
])


export default Router;