import React from "react";

import content from "../../content";

import flourImg from "./img/flour.jpg";
import branImg from "./img/bran.jpg";
import semolinaImg from "./img/semolina.jpg";


const productDetails = [
  { src: flourImg, label: content.flourLabel, alt: "flour", href: "#" },
  { src: branImg, label: content.branLabel, alt: "bran", href: "#" },
  { src: semolinaImg, label: content.semolinaLabel, alt: "semolina", href: "#" },
];

export default class Products extends React.Component {
  render() {
    const products = [];

    productDetails.forEach((e) => {
      products.push(
        <a className="product" href={e.href}>
          <div className="product-img">
            <img src={e.src} alt={e.alt} />
          </div>
          <div className="product-content">
            <a className="product-cta" href={e.href}>
              {e.label[this.props.lang]}
            </a>
          </div>
        </a>
      );
    });

    return (
      <section className="production filled">
        <div className="container">
          <h2 className="section-title">
            <span>{content.productsTitle[this.props.lang][1]}</span> {content.productsTitle[this.props.lang][2]}
          </h2>
          <div className="products">{products}</div>
        </div>
      </section>
    );
  }
}
