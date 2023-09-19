import {} from "react";
import Nav from "../../Nav/Nav";
import Nav_m from "../../Nav_mobile/Nav_m";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";

function Nagad() {
  return (
    <section className="rocket">
      <div className="container">
        <Nav />
        <Nav_m />
        <form className="p-5">
          <input
            type="number"
            className="form-control"
            name="number"
            placeholder="Enter your Nagad number"
          />
          <Link to="/payment/Nagad/otp">
            <button className="btn btn-primary mt-3">Get Otp</button>
          </Link>
        </form>
        <Footer />
      </div>
    </section>
  );
}

export default Nagad;
