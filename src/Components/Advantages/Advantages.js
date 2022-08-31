import React from "react";
import advImage1 from "../../img/inventory.png";
import advImage2 from "../../img/inventory.png";
import advImage3 from "../../img/inventory.png";

const content = {
    //Advantages
    advantagesTitle: {
      en: { 1: "Our", 2: "advantages" },
      de: { 1: "Unsere", 2: "Vorteile" },
      it: "",
      pl: "",
      ua: "",
      ru: { 1: "Наши", 2: "преимущества" },
    },
    advantage1: {
      en: { title: "Diversity", text: "en-lorem1" },
      de: { title: "de-title1", text: "de-lorem1" },
      it: { title: "", text: "" },
      pl: { title: "", text: "" },
      ua: { title: "", text: "" },
      ru: { title: "", text: "" },
    },
    advantage2: {
      en: { title: "Easiness", text: "en-lorem2" },
      de: { title: "de-title2", text: "de-lorem2" },
      it: { title: "", text: "" },
      pl: { title: "", text: "" },
      ua: { title: "", text: "" },
      ru: { title: "", text: "" },
    },
    advantage3: {
      en: { title: "Reliability", text: "en-lorem3" },
      de: { title: "de-title3", text: "de-lorem3" },
      it: { title: "", text: "" },
      pl: { title: "", text: "" },
      ua: { title: "", text: "" },
      ru: { title: "", text: "" },
    },
};

function Advantages(props) {
  const advantagesData = [
    {
      src: advImage1,
      title: content.advantage1[props.lang].title,
      text: content.advantage1[props.lang].text,
    },
    {
      src: advImage2,
      title: content.advantage2[props.lang].title,
      text: content.advantage2[props.lang].text,
    },
    {
      src: advImage3,
      title: content.advantage3[props.lang].title,
      text: content.advantage3[props.lang].text,
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
          <span>{content.advantagesTitle[props.lang][1]}</span>{" "}
          {content.advantagesTitle[props.lang][2]}
        </h2>
        <div className="advantages-row">{advantages}</div>
      </div>
    </section>
  );
}

export default Advantages;
