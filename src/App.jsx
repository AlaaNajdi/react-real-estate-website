import React from 'react';
import ErrorPage from "../src/pages/ErorrPage";
import { useEffect } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


import Properties from '../components/Properties';
import { propertiesdata } from './data';
import AddProperty from '../components/AddProperty';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Signin from './pages/Signin';
import Profile from './pages/Profile';
import UserDashboard from '../components/UserDashboard';
import AdminDashboard from '../components/AdminDashboard';
import UserOrder from '../components/UserOrder';
import ProtectedRout from './routes/ProtectedRout';
import Adminproduct from '../components/Adminproduct';
import AdminRout from './routes/AdminRout';
import PropertyList from './pages/PropertyList';
import { PropertyProvider } from './context/PropertyContext';
import Layout from '../src/layout/Layout'





export const App = () => {

  const router = createBrowserRouter([
    { /* nested routing */
      path: "/",
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/about",
          element: <About />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/contact",
          element: <Contact />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/signin",
          element: <Signin />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/signout",
          element: <Home />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/list",
          element: <PropertyList />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/profile",
          element: <ProtectedRout />,
          children: [
            {
              path: "/profile",
              element: <Profile />,
              errorElement: <ErrorPage />,
            },
          ],
        },
        {//if you siginin you can go to any children
          path: "/dashboard/users",
          element: <ProtectedRout />,
          errorElement: <ErrorPage />,
          children: [
            {
              path: "orders",
              element: <UserOrder />,
              errorElement: <ErrorPage />,
            },
          ]
        },
        {//if you siginin you can go to any children
          path: "/dashboard/admins",
          element: <AdminRout />,
          errorElement: <ErrorPage />,
          children: [
            {
              path: "product",
              element: <Adminproduct />,
              errorElement: <ErrorPage />,
            },
          ]
        },
      ]
    },

  ]);


  /// inside method, logics will be handled

  useEffect(() => {
    console.log('useeffect is called');
  }, []);

  return (
    <PropertyProvider>
      <ToastContainer />
      <RouterProvider router={router} />
    </PropertyProvider>
  );
}; export default App;








// {{useState - store something - use it
// in useState - receive 2 main parameters : data & function to update the data
// let [name, setName] = useState('thoa')

// function to updateName() { setName( prevValue => "Alaa")}


// props : in react, we divide into many components
// App : parent componenet: all data in App.jsx showed in the UI
// App : <Header> <Search>  <ProductList> <Footer>
// in the App, it will store main
// parent component talking to child component via props

// how to transfer the data from Parent component to Child component
// when you receive data from parent component, try to console.log() to understand data shape }}
