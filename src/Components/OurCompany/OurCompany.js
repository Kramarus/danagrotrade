import React from "react";

import "./OurCompany.css";

import content from "../../content";

export default class OurCompany extends React.Component {
  render() {
    return (
      <section className="bg-yellow custom-height">
        <div className="container border">
            <h2 className="section-title"><span>{content.companyTitle[this.props.lang][1]}</span> {content.companyTitle[this.props.lang][2]}</h2>
        </div>
      </section>
    );
  }
}
