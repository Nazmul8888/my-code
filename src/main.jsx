import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/Page/About/About.jsx';
import Login from './components/Page/Login/Login.jsx';
import SignUp from './components/Page/SignUp/SignUp.jsx';
import AuthProvider from './Routes/Provider/AuthProvider.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      },
      {
        path: 'login',
        element: <Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <div className='max-w-screen-xl mx-auto'>
   <RouterProvider router={router} />
   </div>
  </AuthProvider>
  </React.StrictMode>,
)
