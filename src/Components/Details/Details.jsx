import { useState } from "react";
import "./Details.css";
import Nav from "../Nav/Nav";
import Nav_m from "../Nav_mobile/Nav_m";
import Footer from "../Footer/Footer";
import { AiOutlineCheck, AiOutlineHeart } from "react-icons/ai";
import details_img1 from "./images/download (2).jpg";
import details_img2 from "./images/download (3).jpg";
import details_img3 from "./images/download (4).jpg";
import Review_card from "./Review_card/Review_card";
import { MdStarRate } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

function Details() {
  const [toggle_1, setToggle_1] = useState(true);
  const [toggle_2, setToggle_2] = useState(false);
  const [toggle_3, setToggle_3] = useState(false);
  const list_1 = () => {
    setToggle_1(true);
    setToggle_2(false);
    setToggle_3(false);
  };
  const list_2 = () => {
    setToggle_1(false);
    setToggle_2(true);
    setToggle_3(false);
  };
  const list_3 = () => {
    setToggle_1(false);
    setToggle_2(false);
    setToggle_3(true);
  };
  const location = useLocation();
  const [count, setCount] = useState(1);
  const increase = () => {
    if (count < 10) {
      setCount(count + 1);
    } else {
      setCount(10);
    }
  };
  const decrease = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(1);
    }
  };
  const { title, image, price } = location.state;
  return (
    <section className="details_page">
      <div className="container">
        <div className="">
          <Nav />
          <Nav_m />
          {/* all deails section starts here */}
          <div className="details">
            {/* top details starts here */}
            <div className="top_details">
              <div className="left_details">
                <div className="details_images">
                  <img
                    className="single_img "
                    src={location.state.image}
                    alt=""
                  />
                </div>
                <div className="des">
                  <div className="des_list">
                    <li onClick={list_1} className="list">
                      Description
                    </li>
                    <li onClick={list_2} className="list">
                      Size & Fit
                    </li>
                    <li onClick={list_3} className="list">
                      Shipping & Return
                    </li>
                  </div>
                  <hr />

                  {toggle_1 && (
                    <div className="mt-3 des_list_1 bg-light">
                      <p className="">
                        Vero erat dolor dolores amet elitr sed gubergren sit at
                        stet, ea et ea amet eirmod consetetur sit tempor sit, ut
                        diam est no erat elitr dolor clita sed, diam.
                      </p>
                      <div className="mt-3">
                        <div className="">
                          <AiOutlineCheck />
                          <span className="ms-3">100% prima cotton</span>
                        </div>
                        <div className="">
                          <AiOutlineCheck />
                          <span className="ms-3">Made in peru</span>
                        </div>
                        <div className="">
                          <AiOutlineCheck />
                          <span className="ms-3">Rib knick uniqe</span>
                        </div>
                        <div className="">
                          <AiOutlineCheck />
                          <span className="ms-3">Breathable prima cotton</span>
                        </div>
                        <div className="">
                          <AiOutlineCheck />
                          <span className="ms-3">Most comfortable</span>
                        </div>
                        <div className="">
                          <AiOutlineCheck />
                          <span className="ms-3">Pure denim cotton </span>
                        </div>
                      </div>
                    </div>
                  )}
                  {toggle_2 && (
                    <div className="mt-3 des_list_2 bg-light">
                      <p className="">
                        Erat eos dolores rebum tempor accusam takimata sed sed
                        sadipscing, est sed takimata no labore, duo accusam
                        nonumy elitr clita, at lorem lorem sed consetetur
                        nonumy, stet amet clita invidunt et consetetur elitr et
                        gubergren, ipsum duo voluptua ea gubergren et ut duo
                        consetetur. Sit dolore et ipsum erat amet eirmod dolor
                        accusam erat, no justo sit et amet at.
                      </p>
                    </div>
                  )}
                  {toggle_3 && (
                    <div className="mt-3 des_list_3 bg-light">
                      <p className="">
                        Amet erat aliquyam lorem vero dolores at et et accusam
                        justo, magna consetetur dolore aliquyam sadipscing
                        lorem. Rebum invidunt voluptua.
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="right_details">
                <h6 className="bold_font">Best choice</h6>
                <h3 className="bold_font my-3">{location.state.title}</h3>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <p className="">{location.state.price}</p>
                    <del className="bold_font text-primary ms-3">35% off</del>
                  </div>
                  <p className="">
                    <AiOutlineCheck /> In Stock
                  </p>
                </div>
                <hr />
                <div className="color_div">
                  <h6 className="">Color (Black)</h6>
                  <div className="size_content">
                    <p className="color"></p>
                    <p className="color"></p>
                    <p className="color"></p>
                    <p className="color"></p>
                    <p className="color"></p>
                    <p className="color"></p>
                    <p className="color"></p>
                    <p className="color"></p>
                  </div>
                </div>
                <hr />
                <div className="size_div">
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="bold_font">Size</h6>
                    <a href="#">Size Guide</a>
                  </div>
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
                </div>
                <hr />
                <div className="">
                  <div className="d-flex justify-content-between align-items-center">
                    <h6 className="bold_font">Quantity</h6>
                    <div className="pagination count_div">
                      <li onClick={decrease} className="page-link minus">
                        -
                      </li>
                      <li className="page-link">{count}</li>
                      <li onClick={increase} className="page-link plus">
                        +
                      </li>
                    </div>
                  </div>
                </div>
                {/*  */}
                <div className="free_interest">
                  <p>4-interest free payments of $18.75 with Kalama.</p>
                  <a href="#"> Learn more</a>
                </div>
                {/*  */}
                <Link to="/cart" state={{ title, image, price, count }}>
                  <button className="cart_btn">Add to Cart</button>
                </Link>
                {/*  */}
                <button className="cart_btn favourite_btn">
                  <AiOutlineHeart className="heart_icon" />
                  <p>Favourite</p>
                </button>
                {/*  */}
                <div className="card_sec">
                  <div className="store_card">
                    <div className="card_header">
                      <AiOutlineHeart className="card_icons" />
                      <h5 className="ms-1">Find in a Store</h5>
                    </div>
                    <p>Et amet eirmod sea sit diam takimata dolore,</p>
                  </div>
                  <div className="home_card">
                    <div className="card_header">
                      <AiOutlineHeart className="card_icons" />
                      <h5 className="ms-1">Find in a Store</h5>
                    </div>
                    <p>Et amet eirmod sea sit diam takimata dolore,</p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            {/* customer review starts here */}
            <div className="">
              <div className="mb-4 d_flex_between">
                <h3 className="bold_font">Customer Review</h3>
                <div className="d-flex align-items-center">
                  <p className="">Sort by:</p>
                  <select className="ms-2">
                    <option defaultValue="Newest">Newest</option>
                    <option defaultValue="Dhaka">Dhaka</option>
                    <option defaultValue="London">London</option>
                  </select>
                </div>
              </div>
              <div className="review_card">
                <div className="review_left">
                  <Review_card name="James marry" />
                  <Review_card name="Jhon Dee" />
                  <Review_card name="Nasa" />
                  <Review_card name="Kajol" />
                  <Review_card name="Basar" />
                  <Review_card name="Saiful" />
                  <button className="load_more_btn">load more</button>
                </div>
                <div className="review_right">
                  <div className="card">
                    <div className="card-body">
                      <p className="">Overall Rating</p>
                      <div className="mt-3 d_flex_between">
                        <div className="d-flex align-items-center">
                          <MdStarRate className="star_icon" />
                          <p className="display-2 bold_font ms-2">4.9</p>
                        </div>
                        <div className="">
                          <h5 className="bold_font">30 out of 32 (98%)</h5>
                          <p className="mt-1">
                            Customers recommended this products
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="rating_single d_flex_between">
                          <div className="d-flex align-items-center">
                            <MdStarRate />
                            <p className="ms-1">5</p>
                          </div>
                          <input className="w-75" type="range" value="23" />
                          <p className="">23</p>
                        </div>
                        <div className="rating_single d_flex_between">
                          <div className="d-flex align-items-center">
                            <MdStarRate />
                            <p className="ms-1">5</p>
                          </div>
                          <input className="w-75" type="range" value="23" />
                          <p className="">23</p>
                        </div>
                        <div className="rating_single d_flex_between">
                          <div className="d-flex align-items-center">
                            <MdStarRate />
                            <p className="ms-1">5</p>
                          </div>
                          <input className="w-75" type="range" value="23" />
                          <p className="">23</p>
                        </div>
                        <div className="rating_single d_flex_between">
                          <div className="d-flex align-items-center">
                            <MdStarRate />
                            <p className="ms-1">5</p>
                          </div>
                          <input className="w-75" type="range" value="23" />
                          <p className="">23</p>
                        </div>
                        <div className="rating_single d_flex_between">
                          <div className="d-flex align-items-center">
                            <MdStarRate />
                            <p className="ms-1">5</p>
                          </div>
                          <input className="w-75" type="range" value="23" />
                          <p className="">23</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </section>
  );
}

export default Details;
