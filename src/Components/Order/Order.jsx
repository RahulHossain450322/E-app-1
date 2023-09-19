import {} from "react";
import Nav from "../Nav/Nav";
import Nav_m from "../Nav_mobile/Nav_m";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Order() {
  const location = useLocation();
  console.log(location);
  return (
    <section className="order">
      <div className="container">
        <div className="order_content">
          <Nav />
          <Nav_m />
          <div className="confirm_order_section my-5">
            <div className="track_order card card-body">
              <h4 className="bold_font text-center mb-3">Order Recipt</h4>
              <div className="">
                <b>Order Id : </b> <span className="">{location.state}</span>
              </div>
              <div className="">
                <b>Name : </b> <span className="">Rahul Hossain</span>
              </div>
              <div className="">
                <b>Location : </b> <span className="">Your location</span>
              </div>
            </div>
            <h2 className="display-1 bold_font">
              Thanks for buying our product
            </h2>
            <Link to="/">
              <button className="cart_btn mt-5">Go back for shopping</button>
            </Link>
          </div>
          <Footer />
        </div>
      </div>
    </section>
  );
}

export default Order;
