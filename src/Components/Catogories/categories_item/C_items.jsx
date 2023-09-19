import { useState } from "react";
import "./C_items.css";
import { FaSortAmountUpAlt } from "react-icons/fa";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import img from "./images/c.png";
import Arr from "../../Home/Arrivals_img/Arr";

function C_items() {
  const [d_toggle, set_D_toggle] = useState(false);
  const [c_toggle, set_C_toggle] = useState(false);
  const [s_toggle, set_S_toggle] = useState(false);
  const [color_toggle, set_Color_toggle] = useState(false);
  return (
    <div className="c_items">
      <div className="left_c_items">
        <div className="top_c_con">
          <h6 className="bold_font">Filter</h6>
          <p className="">Reset All</p>
        </div>
        <div className="c_version my-4">
          <p className="">None</p>
          <p className="">None</p>
          <p className="">None</p>
        </div>
        <div onClick={() => set_D_toggle(!d_toggle)} className="department">
          <h6 className="bold_font">Department</h6>
          {d_toggle ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </div>
        {d_toggle && (
          <div className="mt-3">
            <div className="d-flex">
              <input type="checkbox" className="form-check me-2" name="male" />
              <label htmlFor="male">Male</label>
              <p className="ms-auto">220</p>
            </div>
            <div className="d-flex">
              <input
                type="checkbox"
                className="form-check me-2"
                name="female"
              />
              <label htmlFor="female">Female</label>
              <p className="ms-auto">220</p>
            </div>
            <div className="d-flex">
              <input type="checkbox" className="form-check me-2" name="kids" />
              <label htmlFor="kids">Kids</label>
              <p className="ms-auto">220</p>
            </div>
            <div className="d-flex">
              <input type="checkbox" className="form-check me-2" name="big" />
              <label htmlFor="big">Big and Tall</label>
              <p className="ms-auto">220</p>
            </div>
          </div>
        )}
        <div
          onClick={() => set_C_toggle(!c_toggle)}
          className="department mt-3"
        >
          <h6 className="bold_font">Categore</h6>
          {c_toggle ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </div>
        {c_toggle && (
          <div className="mt-3">
            <div className="d-flex">
              <input type="checkbox" className="form-check me-2" name="tees" />
              <label htmlFor="male">Tees</label>
              <p className="ms-auto">80</p>
            </div>
            <div className="d-flex">
              <input type="checkbox" className="form-check me-2" name="tees" />
              <label htmlFor="male">Accessires</label>
              <p className="ms-auto">80</p>
            </div>
            <div className="d-flex">
              <input type="checkbox" className="form-check me-2" name="tees" />
              <label htmlFor="male">Polos</label>
              <p className="ms-auto">80</p>
            </div>
            <div className="d-flex">
              <input type="checkbox" className="form-check me-2" name="tees" />
              <label htmlFor="male">Sweetshirts and hoodies</label>
              <p className="ms-auto">80</p>
            </div>
            <div className="d-flex">
              <input type="checkbox" className="form-check me-2" name="tees" />
              <label htmlFor="male">Pants</label>
              <p className="ms-auto">80</p>
            </div>
            <div className="d-flex">
              <input type="checkbox" className="form-check me-2" name="tees" />
              <label htmlFor="male">Jackets</label>
              <p className="ms-auto">80</p>
            </div>
            <div className="d-flex">
              <input type="checkbox" className="form-check me-2" name="tees" />
              <label htmlFor="male">Sweters</label>
              <p className="ms-auto">80</p>
            </div>
            <div className="d-flex">
              <input type="checkbox" className="form-check me-2" name="tees" />
              <label htmlFor="male">Shorts</label>
              <p className="ms-auto">80</p>
            </div>
            <div className="d-flex">
              <input type="checkbox" className="form-check me-2" name="tees" />
              <label htmlFor="male">Swimwear</label>
              <p className="ms-auto">80</p>
            </div>
            <div className="d-flex">
              <input type="checkbox" className="form-check me-2" name="tees" />
              <label htmlFor="male">Casual Shirt</label>
              <p className="ms-auto">80</p>
            </div>
            <div className="d-flex">
              <input type="checkbox" className="form-check me-2" name="tees" />
              <label htmlFor="male">Longue and underwear</label>
              <p className="ms-auto">80</p>
            </div>
          </div>
        )}
        <div
          onClick={() => set_S_toggle(!s_toggle)}
          className="department mt-3"
        >
          <h6 className="bold_font">Size</h6>
          {s_toggle ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </div>
        {s_toggle && (
          <div className="mt-3 size_content">
            <p className="size">XXS</p>
            <p className="size">XS</p>
            <p className="size">S</p>
            <p className="size">M</p>
            <p className="size">L</p>
            <p className="size">XL</p>
            <p className="size">XXL</p>
            <p className="size">XXXL</p>
          </div>
        )}
        <div
          onClick={() => set_Color_toggle(!color_toggle)}
          className="department mt-3"
        >
          <h6 className="bold_font">Color</h6>
          {color_toggle ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
        </div>
        {color_toggle && (
          <div className="mt-3 size_content">
            <p className="color"></p>
            <p className="color"></p>
            <p className="color"></p>
            <p className="color"></p>
            <p className="color"></p>
            <p className="color"></p>
            <p className="color"></p>
            <p className="color"></p>
          </div>
        )}
        <div className="price mt-3">
          <input className="form-control" type="text" placeholder="$10.00" />
          <p className="mx-2">-</p>
          <input className="form-control" type="text" placeholder="$350.00" />
        </div>
        <button className="btn btn-outline-primary w-100 mt-3">save</button>
        <div className="mt-3">
          <div className="d-flex">
            <input type="checkbox" className="form-check me-2" name="" />
            <label htmlFor="">$10.00</label>
            <p className="mx-1">-</p>
            <label htmlFor="">$49.00</label>
          </div>
          <div className="d-flex">
            <input type="checkbox" className="form-check me-2" name="" />
            <label htmlFor="">$10.00</label>
            <p className="mx-1">-</p>
            <label htmlFor="">$49.00</label>
          </div>
          <div className="d-flex">
            <input type="checkbox" className="form-check me-2" name="" />
            <label htmlFor="">$10.00</label>
            <p className="mx-1">-</p>
            <label htmlFor="">$49.00</label>
          </div>
          <div className="d-flex">
            <input type="checkbox" className="form-check me-2" name="" />
            <label htmlFor="">$10.00</label>
            <p className="mx-1">-</p>
            <label htmlFor="">$49.00</label>
          </div>
        </div>
      </div>
      <div className="right_items">
        <div className="top_right_c_con">
          <p className="">Home/New Arrivals</p>
          <div className="">
            <FaSortAmountUpAlt />
            <select className="ms-3">
              <option>Sort by:Fetures</option>
              <option>Name</option>
              <option>Size</option>
              <option>Date</option>
              <option>Type</option>
              <option>Others</option>
            </select>
          </div>
        </div>
        <div className=" image_content mt-3 ">
          <Arr title="Summer collections" image={img} price={"$23"} />
          <Arr title="Summer collections" image={img} price={"$23"} />
          <Arr title="Summer collections" image={img} price={"$23"} />
          <Arr title="Summer collections" image={img} price={"$23"} />
          <Arr title="Summer collections" image={img} price={"$23"} />
          <Arr title="Summer collections" image={img} price={"$23"} />
          <Arr title="Summer collections" image={img} price={"$23"} />
          <Arr title="Summer collections" image={img} price={"$23"} />
          <Arr title="Summer collections" image={img} price={"$23"} />
        </div>
      </div>
    </div>
  );
}

export default C_items;
