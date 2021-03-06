import React from "react";
import Games from "../../components/games/Games";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/Slider";

export default function Home() {
  return (
    <div>
      <Header />
      <Slider />
      <Games />
    </div>
  );
}
