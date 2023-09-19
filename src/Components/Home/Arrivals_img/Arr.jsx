import {} from "react";
import "./Arr.css";
import { Link } from "react-router-dom";
function Arr({ title, image, price }) {
  return (
    <Link
      to={`/details/${title}`}
      state={{ image, price, title }}
      className="bold_font arrival_info mb-3 text-decoration-none text-dark"
    >
      <img className="w-100 arr_img" src={image} alt="" />
      <h6 className="text-center mb-2 mt-3 bold_font">{title}</h6>
      <p className="text-center text-success">{price}</p>
    </Link>
  );
}

export default Arr;
