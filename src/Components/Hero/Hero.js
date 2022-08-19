import React, { Component } from "react";

import shipped from "./img/shipped.png";
import packaging from "./img/package.png";
import twenty from "./img/twenty.png";

import content from "../../content";

const featuresData = [
  {
    src: shipped,
    alt: "shipping",
    desc: content.shippingFeature,
  },
  {
    src: packaging,
    alt: "package",
    desc: content.packagingFeature,
  },
  {
    src: twenty,
    alt: "twenty",
    desc: content.orderFeature,
  },
];

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const features = [];

    featuresData.forEach((e) => {
      features.push(
        <div className="hero-feature">
          <div className="hero-feature-img">
            <img src={e.src} alt={e.alt} />
          </div>
          <div className="hero-feature-content">
            {e.desc[this.props.lang]}
          </div>
        </div>
      );
    });

    return (
      <section className="hero container">
        <div className="hero-content">
          {content.heroTitle[this.props.lang]}
          {content.heroSubtitle[this.props.lang]}
          <div className="cta-group">
            <a className="cta cta-primary">{content.ctaPrimary[this.props.lang]}</a>
            <a className="cta cta-secondary">
              {content.ctaSecondary[this.props.lang]}
            </a>
          </div>
        </div>
        <div className="hero-features">{features}</div>
      </section>
    );
  }
}

export default Hero;
