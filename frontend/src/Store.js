import { configureStore } from "@reduxjs/toolkit";
import StudentReducers from "./Reducers/StudentReducers";
const Store = configureStore(
  {
    reducer: {
      student: StudentReducers,
      
    }
  }
);
export default Store;