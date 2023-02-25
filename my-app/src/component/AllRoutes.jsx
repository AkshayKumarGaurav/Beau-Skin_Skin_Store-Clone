import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "./Login";

import VitaminC from "../Pages/vitaminC";

function AllRoutes() {
    return (
      
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/vitaminC" element={<VitaminC />}></Route>
          
        </Routes>
      
    );
  }
  
  export default AllRoutes;