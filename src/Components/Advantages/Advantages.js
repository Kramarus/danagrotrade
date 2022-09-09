import React from "react";
import advImage1 from "../../img/inventory.png";
import advImage2 from "../../img/inventory.png";
import advImage3 from "../../img/inventory.png";

import contentAdvantages from "../../content/contentAdvantages";


function Advantages(props) {
  const advantagesData = [
    {
      src: advImage1,
      title: contentAdvantages[props.lang].advantage1.title,
      text: contentAdvantages[props.lang].advantage1.text,
    },
    {
      src: advImage2,
      title: contentAdvantages[props.lang].advantage2.title,
      text: contentAdvantages[props.lang].advantage2.text,
    },
    {
      src: advImage3,
      title: contentAdvantages[props.lang].advantage3.title,
      text: contentAdvantages[props.lang].advantage3.text,
    },
  ];

  const advantages = [];

  advantagesData.forEach((e) => {
    advantages.push(
      <div className="advantage ">
        <div className="img-container ">
          <img src={e.src} alt={e.title} />
        </div>
        <h3>{e.title}</h3>
        <p className="">{e.text}</p>
      </div>
    );
  });

  return (
    <div className="advantages component" id="advantages">
      <div className="advantages-row">{advantages}</div>
    </div>
  );
}

export default Advantages;
