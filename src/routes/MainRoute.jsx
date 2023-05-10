import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Blog from "../pages/blog/Blog";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import ChefRecipe from "../pages/chefRecipe/ChefRecipe";
import ErrorPage from "../pages/errorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home></Home>,
          // loader:()=>fetch('https://chef-server-ashik465.vercel.app/chefdata')
        },
        {
          path: "/:id",
          element:<PrivateRoute><ChefRecipe></ChefRecipe></PrivateRoute> ,
          loader:({params})=>fetch(`https://chef-server-ashik465.vercel.app/chefdata/${params.id}`)
        },
        {
          path: "/blog",
          element:  <Blog></Blog>  ,
        },
        {
          path: "/login",
          element: <Login></Login>  ,
        },
        {
          path: "/register",
          element:<Register></Register>  ,
        },
      ],
    },
  ]);

  export default router 