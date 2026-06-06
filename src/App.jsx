import React from 'react'
import Home from './pages/Home '
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Shop from './pages/Shop';
import Layout from './components/Layout';

const App = () => {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:"/shop",
    element:<Shop/>
  }
]}
  ])

    

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App