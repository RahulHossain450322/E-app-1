import {} from "react";
import "./Cart.css";
import Nav from "../Nav/Nav";
import Nav_m from "../Nav_mobile/Nav_m";
import { Link, useLocation } from "react-router-dom";
function Cart() {
  const location = useLocation();
  const { title, image, price, count } = location.state;
  const area = "Jessore Bagharpara,Malonchi";
  const number = "FFc" + Date.now() + "@";
  return (
    <section className="cart">
      <div className="container">
        <div className="cart_content">
          <Nav />
          <Nav_m />
          <div className="cart_details">
            <div className="left_content_cart">
              <img className="img-fluid w-100" src={image} alt="" />
            </div>
            <div className="right_content_cart">
              <h2 className="bold_font ">{title}</h2>
              <h3 className=" mt-3">Items = {count}</h3>
              <h4 className="bold_font  mt-3">You have to pay {price}</h4>
              <p className=" text-primary mt-3">
                <b>Shifting Area :</b> {area}
              </p>
              <Link to="/payment" state={number}>
                <button className="w-100 mt-3 cart_btn">Order-Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;
