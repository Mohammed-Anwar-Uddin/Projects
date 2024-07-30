import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Blogs from './pages/Blogs.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Services from './pages/Services.jsx'
import Home from './pages/Home.jsx'
import SingelBlog from './pages/SingelBlog.jsx'


const router = createBrowserRouter([
{
  path:'/',
  element:<App/>,
  children:[{
    path:'/',
    element:<Home />
  },
  {
    path:'/blogs',
    element:<Blogs />
  },
  {
    path:'/services',
    element:<Services />
  },
  {
    path:'/contact',
    element:<Contact />
  },
  {
    path:'/about',
    element:<About />
  },
{
  path:'/blog/:id',
  element:<SingelBlog />,
  loader: ({params}) => fetch(`http://localhost:5000/blogs/${params.id}`)
}]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
