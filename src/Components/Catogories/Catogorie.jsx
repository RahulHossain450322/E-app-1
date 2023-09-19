import {} from "react";
import "./Catogorie.css";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Nav_m from "../Nav_mobile/Nav_m";
import C_items from "./categories_item/C_items";
function Catogorie() {
  return (
    <section className="home">
      <div className="container">
        <div className="home_content">
          <Nav />
          <Nav_m />
          <div className="arrival_article  ">
            <h4 className="text-center">New Arrival</h4>
            <p className="mt-3 text-center">
              Erat takimata lorem labore sed justo dolor dolores dolores sit.
              Sanctus sanctus ipsum clita dolores aliquyam magna diam tempor.
              Ipsum.
            </p>
          </div>
          <C_items />
          <Footer />
        </div>
      </div>
    </section>
  );
}

export default Catogorie;
