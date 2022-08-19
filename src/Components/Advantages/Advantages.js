import React from "react";
import advImage1 from "../../img/inventory.png";
import advImage2 from "../../img/inventory.png";
import advImage3 from "../../img/inventory.png";

import content from "../../content";



export default class Advantages extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const advantagesData = [
      {
        src: advImage1,
        title: content.advantage1[this.props.lang].title,
        text: content.advantage1[this.props.lang].text,
      },
      {
        src: advImage2,
        title: content.advantage2[this.props.lang].title,
        text: content.advantage2[this.props.lang].text,
      },
      {
        src: advImage3,
        title: content.advantage3[this.props.lang].title,
        text: content.advantage3[this.props.lang].text,
      },
    ];

    const advantages = [];

    advantagesData.forEach((e) => {
      advantages.push(
        <div className="advantage">
          <div className="img-container">
            <img src={e.src} alt={e.title} />
          </div>
          <h3>{e.title}</h3>
          <p className="">{e.text}</p>
        </div>
      );
    });

    return (
      <section className="advantages">
        <div className="container">
          <h2 className="section-title">
            <span>{content.advantagesTitle[this.props.lang][1]}</span>{" "}
            {content.advantagesTitle[this.props.lang][2]}
          </h2>
          <div className="advantages-row">{advantages}</div>
        </div>
      </section>
    );
  }
}
