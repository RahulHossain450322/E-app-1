import {} from "react";
import "./Mobile_n_m.css";
import { Link } from "react-router-dom";
function Mobile_n_m() {
  return (
    <div className="mobile_nav_menu">
      <li className="mobile_nav_list">New</li>
      <li className="mobile_nav_list">Tops</li>
      <li className="mobile_nav_list">Bottoms</li>
      <li className="mobile_nav_list">Kids</li>
      <li className="mobile_nav_list">Accessories</li>
      <Link className="text-decoration-none" to="/categories">
        <li className="mobile_nav_list">Collections</li>
      </Link>
      <li className="mobile_nav_list">Sale</li>
    </div>
  );
}

export default Mobile_n_m;
