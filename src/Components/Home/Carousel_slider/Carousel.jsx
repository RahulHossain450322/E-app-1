import {} from "react";
import Carousel from "react-bootstrap/Carousel";
import sky from "./images/sky.mp4";
import home from "./images/home.mp4";
import world from "./images/world.mp4";
function Carousel_slider() {
  return (
    <Carousel className="carousel slide" data-bs-ride="carousel">
      <video
        src={home}
        className="w-100 border-0 carousel-item"
        autoPlay
        loop
        muted
        onPlay={true}
      />
      <video
        src={sky}
        className="w-100 border-0 carousel-item"
        autoPlay
        loop
        muted
        onPlay={true}
      />
      <video
        src={world}
        className="w-100 border-0 carousel-item"
        autoPlay
        loop
        muted
        onPlay={true}
      />
    </Carousel>
  );
}

export default Carousel_slider;
