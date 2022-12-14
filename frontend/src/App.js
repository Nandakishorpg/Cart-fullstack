import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Addproduct from '../src/pages/admin/addproduct/Addproduct';
import Register from './pages/Register';
import ProductView from './pages/ProductView';
import Login from './pages/login/Login';
import Newcart from './pages/Newcart';
import { Admhome } from '../src/pages/admin/Admhome';
import Admproduct from '../src/pages/admin/product/Admproduct';
import Order from './pages/admin/order/Order';



function App() {


  return (

    <div className="App">
   

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login></Login>}></Route>
          <Route exact path="/home" element={<Home></Home>}></Route>
         
          <Route path="/shopcart" element={<Newcart/>}></Route>
          <Route path="/productview" element={<ProductView></ProductView>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/addproduct" element={<Addproduct/>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/admhome" element={<Admhome/>}> </Route>
          <Route path="/admorder" element={<Order/>}> </Route>
          <Route path="/admproduct" element={<Admproduct/>}> </Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
