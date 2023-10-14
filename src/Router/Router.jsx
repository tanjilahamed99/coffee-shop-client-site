import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import Details from "../Components/Details/Details";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/coffee',
        element: <AddCoffee></AddCoffee>
    },
    {
        path: '/details/:id',
        element: <Details></Details>,
        loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`)
    },
])


export default Router;