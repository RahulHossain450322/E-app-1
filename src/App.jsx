import {} from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Catogorie from "./Components/Catogories/Catogorie";
import Details from "./Components/Details/Details";
import Cart from "./Components/Cart/Cart";
import Order from "./Components/Order/Order";
import Payment from "./Components/Payment/Payment";
import Rocket from "./Components/Payment/Payment_method/Rocket";
import Otp from "./Components/Payment/Payment_method/Otp";
import Bkash from "./Components/Payment/Payment_method/Bkash";
import Upay from "./Components/Payment/Payment_method/Upay";
import Nagad from "./Components/Payment/Payment_method/Nagad";
import Bank from "./Components/Payment/Payment_method/Bank";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Catogorie />} />
      <Route path="/details/:title" element={<Details />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/order" element={<Order />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/payment/:title" element={<Payment />} />
      <Route path="/payment/Rocket" element={<Rocket />} />
      <Route path="/payment/Bkash" element={<Bkash />} />
      <Route path="/payment/Upay" element={<Upay />} />
      <Route path="/payment/Nagad" element={<Nagad />} />
      <Route path="/payment/Bank" element={<Bank />} />
      <Route path="/payment/Rocket/otp" element={<Otp />} />
      <Route path="/payment/Bkash/otp" element={<Otp />} />
      <Route path="/payment/Upay/otp" element={<Otp />} />
      <Route path="/payment/Nagad/otp" element={<Otp />} />
      <Route path="/payment/Bank/otp" element={<Otp />} />
    </Routes>
  );
}

export default App;
