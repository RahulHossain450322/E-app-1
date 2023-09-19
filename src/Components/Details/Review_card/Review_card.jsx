import {} from "react";
import "./Review_card.css";
// import profile_img from "./images/";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdStarRate } from "react-icons/md";
import { AiTwotoneLike } from "react-icons/ai";
function Review_card({ name }) {
  return (
    <div className="d-flex py-5">
      <div className="">
        <img className="profile_card_img" src="" alt="" />
      </div>
      <div className="ms-2">
        <div className="d_flex_between">
          <div className="">
            <p className="bold_font  h5">{name}</p>
            <p className="mt-2">28 Aug 2023</p>
          </div>
          <BiDotsVerticalRounded />
        </div>
        <p className="mt-2">
          <MdStarRate />
          <MdStarRate />
          <MdStarRate />
          <MdStarRate />
          <MdStarRate />
        </p>
        <p className="mt-2">
          Sed ea rebum lorem sit justo. Duo dolor clita dolores sed sit ipsum
          at, ut sadipscing sed vero et consetetur duo lorem. Sed stet lorem
          voluptua no sanctus accusam tempor. Sea rebum rebum est magna. Diam
          justo clita lorem rebum ipsum kasd, dolores duo tempor erat erat ea
          justo. Sit.
        </p>

        <div className="mt-3 d_flex_between">
          <div className="d-flex align-items-center">
            <AiTwotoneLike />
            <p className="ms-1">12 people helped</p>
          </div>
          <a href="#">more reply</a>
        </div>
      </div>
    </div>
  );
}

export default Review_card;
