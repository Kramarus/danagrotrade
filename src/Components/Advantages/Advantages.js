import React from "react";
import "./Advantages.css";

import content from "../../content";

export default class Advantages extends React.Component {
  render() {
    return (
      <section className="bg-dark custom-height">
        <div className="container">
          <h2 className="section-title">
            <span>{content.advantagesTitle[this.props.lang][1]}</span>{" "}
            {content.advantagesTitle[this.props.lang][2]}
          </h2>
        </div>
      </section>
    );
  }
}
