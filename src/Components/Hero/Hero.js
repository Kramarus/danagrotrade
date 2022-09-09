import React from "react";

import HeroContent from "../HeroContent/HeroContent";
import Features from "../Features/Features";

export default function Hero(props) {
  return (
    <>
      <div className="component hero-banner" id="home">
        <HeroContent lang={props.lang} openForm={props.openForm} />
        <Features lang={props.lang} />
      </div>
    </>
  );
}
