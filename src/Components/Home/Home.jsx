import {} from "react";
import Top from "../Topbar/Top";
import Nav from "../Nav/Nav";
import "./Home.css";
import adidas from "./images/Adidas.png";
import puma from "./images/Puma.png";
import lacoste from "./images/Lacoste.png";
import f1 from "./Arrivals_img/images/F1.png";
import f2 from "./Arrivals_img/images/F2.png";
import f3 from "./Arrivals_img/images/F3.png";
import f4 from "./Arrivals_img/images/F4.png";

import woman from "./Types/Woman.png";
import kids from "./Types/Kids.png";
import men from "./Types/Men.png";
import c_img from "./Collections/c.png";
import "./Home.css";
import Carousel_slider from "./Carousel_slider/Carousel";
import Brand from "./Brands/Brand";
import Footer from "../Footer/Footer";
import Nav_m from "../Nav_mobile/Nav_m";
import Arr from "./Arrivals_img/Arr";
function Home() {
  return (
    <section className="home">
      <div className="container">
        <div className="home_content">
          <Top />
          <Nav />
          <Nav_m />
          <div className="banner">
            <Carousel_slider />
          </div>
          <div className="brands">
            <img className="brand_img" src={adidas} alt="" />
            <img className="brand_img" src={puma} alt="" />
            <img className="brand_img" src={lacoste} alt="" />
          </div>
          <div className="arrivals">
            <h5 className="text-center bold_font">New Arrivals</h5>
            <div className="arrival_img_group">
              <Arr title="Woman in red cut" image={f1} price="$82" />
              <Arr title="Gray is awesome" image={f2} price="$18" />
              <Arr title="Khaki branding" image={f3} price="$49" />
              <Arr title="Red & White combination" image={f4} price="$99" />
            </div>
          </div>
          <div className="types_of">
            <div className="type_Fashion">
              <img className="w-100" src={men} alt="" />
            </div>
            <div className="type_Fashion">
              <img className="w-100" src={woman} alt="" />
            </div>
            <div className="type_Fashion">
              <img className="w-100" src={kids} alt="" />
            </div>
          </div>
          <div className="collections">
            <div className="bold_font">
              <h2 className="h1">
                New <span className="text-primary">2023</span>
                <br />
              </h2>
              <h2 className="mt-3 h1"> Cloths Collections</h2>
            </div>
            <div className="mt-4">
              <img className="collection_img" src={c_img} alt="" />
            </div>
          </div>
          <Brand />
          <Footer />
        </div>
      </div>
    </section>
  );
}

export default Home;
