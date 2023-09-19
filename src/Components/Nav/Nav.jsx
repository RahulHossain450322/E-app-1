import {} from "react";
import "./Nav.css";
import { CiSearch } from "react-icons/ci";
import logo from "./images/logo2.jpg";
import { BiSolidCart, BiUserCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav className="nav_menu position-sticky top-0">
      <div className="">
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="nav_list_menu">
        <li className="nav_list">New</li>
        <li className="nav_list">Tops</li>
        <li className="nav_list">Bottoms</li>
        <li className="nav_list">Kids</li>
        <li className="nav_list">Accessories</li>
        <Link className="text-decoration-none" to="/categories">
          <li className="nav_list">Collections</li>
        </Link>
        <li className="nav_list">Sale</li>
      </div>
      <div className="user_sections">
        <CiSearch className="search" />
        <BiSolidCart className="cart" />
        <BiUserCircle className="user" />
      </div>
    </nav>
  );
}

export default Nav;
