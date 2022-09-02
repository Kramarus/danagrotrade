import React from "react";
import advImage1 from "../../img/inventory.png";
import advImage2 from "../../img/inventory.png";
import advImage3 from "../../img/inventory.png";

const content = {
  en: {
    advantagesTitle: (
      <>
        <span>Our</span> advantages
      </>
    ),
    advantage1: {
      title: <>Quality</>,
      text: (
        <>
          The best food products of Ukrainian origin. We buy products from
          trusted farmers only.
        </>
      ),
    },
    advantage2: {
      title: <>Efficiency</>,
      text: (
        <>
          Convenient 24/7 service.Delivery across Ukraine and all over Europe.
        </>
      ),
    },
    advantage3: {
      title: <>Responsibility</>,
      text: (
        <>
          Trusted cooperation and long term partnership on mutually beneficial
          terms.
        </>
      ),
    },
  },
  de: {
    advantagesTitle: (
      <>
        <span>Unsere</span> Vorteile
      </>
    ),
    advantage1: {
      title: <>Qualität</>,
      text: (
        <>
          Die besten Lebensmittel aus der Ukraine. Wir kaufen unsere Produkte
          von vertrauenswürdigen Bauern ein.
        </>
      ),
    },
    advantage2: {
      title: <>Effizienz</>,
      text: (
        <>Bequemes 24/7 Service. Lieferung in der Ukraine und in ganz Europa.</>
      ),
    },
    advantage3: {
      title: <>Verantwortung</>,
      text: (
        <>
          Vertrauensvolle Zusammenarbeit und langfristige Partnerschaft zu
          vorteilhaften Bedingungen.
        </>
      ),
    },
  },
  ua: {
    advantagesTitle: (
      <>
        <span>Наші</span> переваги
      </>
    ),
    advantage1: {
      title: <>Якість</>,
      text: (
        <>
          Найкраща продукція українського походження. Закупівля продукції тільки
          у перевірених агровиробників.
        </>
      ),
    },
    advantage2: {
      title: <>Оперативність</>,
      text: (
        <>Зручний сервіс у режимі 24/7. Доставка по Україні та всій Європі.</>
      ),
    },
    advantage3: {
      title: <>Надійність</>,
      text: (
        <>
          Довірча співпраця та довгострокові партнерські відносини на
          взаємовигідні умови.
        </>
      ),
    },
  },
  ru: {
    advantagesTitle: (
      <>
        <span>Наши</span> преимущества
      </>
    ),
    advantage1: {
      title: <>Качество</>,
      text: (
        <>
          Лучшая продукция украинского происхождения.Закупка продукции только у
          проверенных агропроизводителей.
        </>
      ),
    },
    advantage2: {
      title: <>Оперативность</>,
      text: (
        <>Удобный сервис в режиме 24/7. Доставка по Украине и всей Европе.</>
      ),
    },
    advantage3: {
      title: <>Надёжность</>,
      text: (
        <>
          Доверительное сотрудничество и долгосрочные партнёрские отношения на
          взаимовыгодных условиях.
        </>
      ),
    },
  },
};

function Advantages(props) {
  const advantagesData = [
    {
      src: advImage1,
      title: content[props.lang].advantage1.title,
      text: content[props.lang].advantage1.text,
    },
    {
      src: advImage2,
      title: content[props.lang].advantage2.title,
      text: content[props.lang].advantage2.text,
    },
    {
      src: advImage3,
      title: content[props.lang].advantage3.title,
      text: content[props.lang].advantage3.text,
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
    <section className="advantages" id="advantages">
      <div className="container">
        <h2 className="section-title">{content[props.lang].advantagesTitle}</h2>
        <div className="advantages-row">{advantages}</div>
      </div>
    </section>
  );
}

export default Advantages;
