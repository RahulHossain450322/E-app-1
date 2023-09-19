import {} from "react";
import Nav from "../../Nav/Nav";
import Nav_m from "../../Nav_mobile/Nav_m";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";

function Otp() {
  return (
    <div className="container">
      <Nav />
      <Nav_m />
      <form className="p-5">
        <input
          className="form-control"
          type="number"
          placeholder="Enter your OTP"
          name="otp"
        />
        <Link to="/order">
          <button className="btn btn-primary mt-3">Confirm your order</button>
        </Link>
      </form>
      <Footer />
    </div>
  );
}

export default Otp;
