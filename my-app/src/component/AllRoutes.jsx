import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
// import Login from "./Login";
import VitaminC from "../Pages/vitaminC";
import Cart from "../Pages/Cart";
// import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Simple from "../Pages/singleProductPage";
import Alertfn from "./alert";
import Checkout from "../Pages/Checkout";

// import MassageChairPage from "../Pages/MassageChair";
// import Simple from "../Pages/singleProductPage";


function AllRoutes() {
    return (
      
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/vitaminC" element={<VitaminC />}></Route>
          <Route path="/vitaminC/:id" element={<Simple/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/alert" element={<Alertfn/>}></Route>
          <Route path="/Checkout" element={<Checkout/>}></Route>
          
        </Routes>
      
    );
  }
  
  export default AllRoutes;
// import { Routes, Route } from "react-router-dom";
// import Cart from "../Pages/Cart";
// // import CartPage from "../Pages/Cart";
// import Home from "../Pages/Home";
// import Login from "../Pages/Login";

// import MassageChairPage from "../Pages/MassageChair";
// import Simple from "../Pages/singleProductPage";

// function AllRoutes() {
//     return (
      
//         <Routes>
//           <Route path="/" element={<Home />}></Route>
//           <Route path="/login" element={<Login />}></Route>
//           <Route path="/massagechair" element={<MassageChairPage />}></Route>
//           <Route path="/massagechair/:id" element={<Simple/>}></Route>
//           <Route path="/cart" element={<Cart/>}></Route>
          
          
//         </Routes>
      
//     );
//   }
  
//   export default AllRoutes;