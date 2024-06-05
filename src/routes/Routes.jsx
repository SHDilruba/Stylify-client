import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import PrivateRoute from "./private/PrivateRoute";
import CategoryProducts from "../pages/CategoryProducts";

export const router = createBrowserRouter([
 {
   path: "/",
   element: <MainLayout></MainLayout>,
   errorElement: <ErrorPage/>,
   children:[
  {
   path: "/",
   element: <Home></Home> 
  },
  {
   path: "/about",
   element: <About></About> 
  },
  {
   path: "/login",
   element: <Login></Login> 
  },
  {
   path: "/register",
   element: <Register></Register>
  },
  {
    path: "/category/:id",
    element: (
      <PrivateRoute>
        <CategoryProducts></CategoryProducts>
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(`https://stylify-server.vercel.app/products/category/${params.id}`)
  },
   ]
 },
 {
  path: "/dashboard",
  element: <DashboardLayout />,
  errorElement: <ErrorPage />,
  children: [{ path: "", element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute> }],
},
]);