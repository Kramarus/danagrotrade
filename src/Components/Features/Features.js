import React from "react";

import shipped from "./img/shipped.png";
import packaging from "./img/package.png";
import twenty from "./img/twenty.png";

import contentFeatures from "../../content/contentFeatures";

export default function Features(props) {
  const featuresData = [
    {
      src: shipped,
      alt: "shipping",
      desc: contentFeatures[props.lang].features.first,
    },
    {
      src: packaging,
      alt: "package",
      desc: contentFeatures[props.lang].features.second,
    },
    {
      src: twenty,
      alt: "twenty",
      desc: contentFeatures[props.lang].features.third,
    },
  ];
  const features = [];

  featuresData.forEach((e) => {
    features.push(
      <div className="hero-feature">
        <div className="hero-feature-content">
          <div className="hero-feature-img">
            <img src={e.src} alt={e.alt} />
          </div>
          <div className="hero-feature-text"><p>{e.desc}</p></div>
        </div>
      </div>
    );
  });

  return <div className="component hero-features">{features}</div>;
}
