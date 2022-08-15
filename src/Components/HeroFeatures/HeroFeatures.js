import React from "react";

import "./HeroFeatures.css";

import shipped from "./img/shipped.png";
import packaging from "./img/package.png";
import twenty from "./img/twenty.png";

const featuresData = [
  {
    src: shipped, alt: 'shipping',
    desc: {
        'en': "Safe delivery from Slovakia to any location in Europe",
        'de': "Sichere Lieferung aus der Slowakei an jeden Ort in Europa",
        'ru': "Надёжная доставка из словакии в любую точку Европы",
      },
  },
  { src: packaging, alt: 'package', desc: "A custom package with your label" },
  { src: twenty, alt: 'twenty', desc: "Minimal order: 20 tons" },
];

const features = [];

featuresData.forEach((e) => {
    features.push(
        <div className="hero-feature">
          <div className="hero-feature-img">
            <img src={e.src} alt={e.alt} />
          </div>
          <div className="hero-feature-content">
            <p>{e.desc}</p>
          </div>
        </div>
      );
});

class HeroFeatures extends React.Component {
  render() {
    return (
      features
    );
  }
}

export default HeroFeatures;
