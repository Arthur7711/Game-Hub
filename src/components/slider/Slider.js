import React from "react";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import img1 from "../../img/roulette.png";
import img2 from "../../img/spin.png";
import img3 from "../../img/animationSpin.gif";


const images = [{ src: img1 }, { src: img2 },{src:img3}];

export default function Slider() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="partners" style={{ height: "calc(100vh - 175px)" }}>
          <Carousel
            isAutoPlaying={true}
            autoPlayInterval={3000}
            hasThumbnail
            images={images}
          />
        </div>
      </div>
    </div>
  );
}
