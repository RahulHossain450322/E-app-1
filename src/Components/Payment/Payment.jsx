import {} from "react";
import "./Payment.css";
import Nav from "../Nav/Nav";
import Nav_m from "../Nav_mobile/Nav_m";
import Footer from "../Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
function Payment() {
  const navigate = useNavigate();
  const method = (title) => {
    navigate("/payment/" + title);
  };
  return (
    <section className="payment">
      <div className="container">
        <div className="payment_content bg-light">
          <Nav />
          <Nav_m />
          <div className="form p-5">
            <h4 className="text-center mb-3">Select your payment method</h4>
            <p className="text-center ytext-primary mb-3">
              10% cash back offer for payment without cash on delivery
            </p>
            <div className="">
              <input type="radio" name="payment" className="form-input-radio" />
              <label
                onClick={() => method("Rocket")}
                className="form-label ms-1"
                htmlFor="payment"
              >
                Rocket
              </label>
            </div>
            <div className="">
              <input type="radio" name="payment" className="form-input-radio" />
              <label
                onClick={() => method("Bkash")}
                className="form-label ms-1"
                htmlFor="payment"
              >
                Bkash
              </label>
            </div>
            <div className="">
              <input type="radio" name="payment" className="form-input-radio" />
              <label
                onClick={() => method("Upay")}
                className="form-label ms-1"
                htmlFor="payment"
              >
                Upay
              </label>
            </div>
            <div className="">
              <input type="radio" name="payment" className="form-input-radio" />
              <label
                onClick={() => method("Nagad")}
                className="form-label ms-1"
                htmlFor="payment"
              >
                Nagad
              </label>
            </div>
            <div className="">
              <input type="radio" name="payment" className="form-input-radio" />
              <label
                onClick={() => method("Bank")}
                className="form-label ms-1"
                htmlFor="payment"
              >
                Bank
              </label>
            </div>
            <div className="">
              <input type="radio" name="payment" className="form-input-radio" />
              <Link to="/order">
                <label
                  onClick={() => method("Cod")}
                  className="form-label ms-1"
                  htmlFor="payment"
                >
                  Cash on delivery
                </label>
              </Link>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </section>
  );
}

export default Payment;
