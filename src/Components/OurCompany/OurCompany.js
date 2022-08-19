import React from "react";

import content from "../../content";

export default class OurCompany extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="company filled">
        <div className="container">
          <h2 className="section-title">
            <span>{content.companyTitle[this.props.lang][1]}</span>{" "}
            {content.companyTitle[this.props.lang][2]}
          </h2>
          {content.aboutInfo[this.props.lang]}
        </div>
      </section>
    );
  }
}
