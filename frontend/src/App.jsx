import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import ProfileDetailsPage from './Pages/ProfileDetailsPage';
import EditProfileDetails from './Pages/EditProfileDetails';
import { Provider, useDispatch } from 'react-redux';
import { getStudent } from './Reducers/StudentReducers';
import { useEffect } from 'react';

import Store from './Store';
import { ToastContainer } from 'react-toastify';
function App() {
  // const dispatch = useDispatch()
  // useEffect(
  //   () => {
  //     dispatch(getStudent())
     
  //   }, []
  // )
const router=createBrowserRouter(
  [
    {
      path:"/",
      element:<ProfileDetailsPage/>
    },
    {
      path:"/editprofile/:id",
      element:<EditProfileDetails/>
    }
  ]
)
  return (
   <>
   <RouterProvider router={router}/>
   <ToastContainer />
   </>
  );
}

export default App;
