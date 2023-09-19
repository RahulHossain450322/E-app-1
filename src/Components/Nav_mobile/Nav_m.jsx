import { useState } from "react";
import "./Nav_m.css";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { GiTireIronCross } from "react-icons/gi";
import logo from "./images/logo2.jpg";
import { BiSolidCart, BiUserCircle } from "react-icons/bi";
import Mobile_n_m from "./Mobile_nav_menu/Mobile_n_m";
function Nav_m() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="mobile_nav">
      <div className="">
        <img className="logo" src={logo} alt="" />
      </div>
      <div className="mobile_user_section">
        <CiSearch className="search" />
        <BiSolidCart className="cart" />
        <BiUserCircle className="user" />
      </div>
      <div onClick={() => setToggle(!toggle)} className="bar">
        {toggle ? <GiTireIronCross /> : <FaBars />}
      </div>
      {toggle && <Mobile_n_m />}
      {/* */}
    </nav>
  );
}

export default Nav_m;
