import {} from "react";
import b1 from "./images/B1.png";
import b2 from "./images/B2.png";
import b3 from "./images/B3.png";
import b4 from "./images/B4.png";
import b5 from "./images/B5.png";
import b6 from "./images/B6.png";
import b7 from "./images/B7.png";
import b8 from "./images/B8.png";
import "./Brand.css";
function Brand() {
  return (
    <div className="brand">
      <div className="b_top">
        <img className="B_Img" src={b1} alt="" />
        <img className="B_Img" src={b2} alt="" />
        <img className="B_Img" src={b3} alt="" />
        <img className="B_Img" src={b4} alt="" />
      </div>
      <div className="b_bottom">
        <img className="B_Img" src={b5} alt="" />
        <img className="B_Img" src={b6} alt="" />
        <img className="B_Img" src={b7} alt="" />
        <img className="B_Img" src={b8} alt="" />
      </div>
    </div>
  );
}

export default Brand;
