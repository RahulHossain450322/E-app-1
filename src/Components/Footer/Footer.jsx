import {} from "react";
import "./Footer.css";
import paypal from "./images/Paypal.png";
import visa from "./images/Visa.png";
import master from "./images/Master.png";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer_top_content">
        <div className="first_content">
          <h4 className="mb-3 bold_font">Brand</h4>
          <h6 className="mb-2 bold_font">Subscribe to our Newsletter</h6>
          <p className="">
            Sed elitr ipsum ipsum vero et et, <br />
            sit accusam ipsum kasd at amet elitr <br /> aliquyam est et,
            consetetur kasd sit.
          </p>
          <form className="mt-3">
            <div className="d-flex">
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                className="form-control footer_input"
              />
              <button className="btn btn-info">Submit</button>
            </div>
          </form>
        </div>
        <div className="sec_content">
          <div className="company">
            <h5 className="mb-4 bold_font">Company</h5>
            <p className="mb-3">About Us</p>
            <p className="mb-3">Blog</p>
            <p className="mb-3">Career</p>
            <p className="mb-3">Our team</p>
            <p className="mb-3">Help center</p>
            <p className="mb-3">Outlets</p>
          </div>
          <div className="shop">
            <h5 className="mb-4 bold_font">Shop</h5>
            <p className="mb-3">About Us</p>
            <p className="mb-3">Blog</p>
            <p className="mb-3">Career</p>
            <p className="mb-3">Our team</p>
            <p className="mb-3">Help center</p>
            <p className="mb-3">Outlets</p>
          </div>
          <div className="support">
            <h5 className="mb-4 bold_font">Support</h5>
            <p className="mb-3">About Us</p>
            <p className="mb-3">Blog</p>
            <p className="mb-3">Career</p>
            <p className="mb-3">Our team</p>
          </div>
          <div className="faq">
            <h5 className="mb-4 bold_font">FAQ</h5>
            <p className="mb-3">About Us</p>
            <p className="mb-3">Blog</p>
            <p className="mb-3">Career</p>
          </div>
        </div>
      </div>
      <div className="footer_bottom_content">
        <p className="">&copy; 2023 All rights reserved. Designed by Brand</p>
        <div className="payment">
          <p className="">Payment partners</p>
          <img className="ms-3" src={paypal} alt="" />
          <img className="ms-3" src={visa} alt="" />
          <img className="ms-3" src={master} alt="" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
