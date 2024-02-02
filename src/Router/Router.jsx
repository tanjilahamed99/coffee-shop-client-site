import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AddCoffee from "../pages/AddCoffee";
import Details from "../Components/Details/Details";
import UpdateCoffee from "../pages/UpdateCoffee";
import Error from "../pages/Error";
import SignUp from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import Users from "../pages/Users/Users";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
        errorElement: <Error></Error>
    },
    {
        path: '/coffee',
        element: <AddCoffee></AddCoffee>
    },
    {
        path: '/details/:id',
        element: <Details></Details>,
        loader: ({ params }) => fetch(`https://coffee-store-server-site.vercel.app/coffees/${params.id}`)
    },
    {
        path: '/update/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) => fetch(`https://coffee-store-server-site.vercel.app/coffees/${params.id}`)
    },
    {
        path: '/signup',
        element: <SignUp></SignUp>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/users',
        element: <Users></Users>,
        loader: () => fetch('https://coffee-store-server-site.vercel.app/user')
    }
])


export default Router;