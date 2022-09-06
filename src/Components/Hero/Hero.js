import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

import shipped from "./img/shipped.png";
import packaging from "./img/package.png";
import twenty from "./img/twenty.png";

const content = {
  en: {
    heroTitle: <h1>Export of wheat flour with delivery all over Europe</h1>,
    heroSubtitle: <h2>All sorts and high quality standards directly from a Ukrainian manufacturer</h2>,
    features: {
      first: <p>Safe delivery from Slovakia <br />to any location in Europe</p>,
      second: <p>A custom package<br />with your label</p>,
      third: <p>Minimal order: 20 tons</p>,
    },
  },
  de: {
    heroTitle: <h1>Export von Weizenmehl mit Lieferung in ganz Europa</h1>,
    heroSubtitle: <h2>Alle Sorten und hohe Qualitätsstandards direkt vom ukrainischen Hersteller</h2>,
    features: {
      first: <p>Sichere Lieferung aus der Slowakei an jeden Ort in Europa</p>,
      second: <p>Individuelle Verpackung<br />mit Ihrem Etikett</p>,
      third: <p>Minimale Bestellung: <br />20 Tonnen</p>,
    },
  },
  it: {
    heroTitle: "",
    heroSubtitle: "",
    features: {
      first: "",
      second: "",
      third: "",
    },
  },
  pl: {
    heroTitle: "",
    heroSubtitle: "",
    features: {
      first: "",
      second: "",
      third: "",
    },
  },
  ua: {
    heroTitle: <h1>Експорт пшеничного борошна з доставкою в Європі</h1>,
    heroSubtitle: <h2>Усі види та високі стандарти якості безпосередньо від українського виробника</h2>,
    features: {
      first: <p>Надійна доставка зі Словаччини <br />в будь-яку точку Європи.</p>,
      second: <p>Індивідуальна упаковка<br />з Вашою етикеткою</p>,
      third: <p>Мінімальне замовлення: 20 тонн</p>,
    },
  },
  ru: {
    heroTitle: <h1>Экспорт пшеничной муки с доставкой по Европе</h1>,
    heroSubtitle: <h2>Все виды и высокие стандарты качества напрямую от украинского производителя</h2>,
    features: {
      first: <p>Надёжная доставка из  Словакии <br />в любую точку Европы</p>,
      second: <p>Индивидуальная упаковка<br />с Вашей этикеткой</p>,
      third: <p>Минимальный заказ: 20 тонн</p>,
    },
  },
}



export default function Hero(props) {
  const featuresData = [
    {
      src: shipped,
      alt: "shipping",
      desc: content[props.lang].features.first,
    },
    {
      src: packaging,
      alt: "package",
      desc: content[props.lang].features.second,
    },
    {
      src: twenty,
      alt: "twenty",
      desc: content[props.lang].features.third,
    },
  ];
  const features = [];

  featuresData.forEach((e) => {
    features.push(
      <div className="hero-feature">
        <div className="hero-feature-img">
          <img src={e.src} alt={e.alt} />
        </div>
        <div className="hero-feature-content">{e.desc}</div>
      </div>
    );
  });

  return (
    <>
      <section className="hero container" id="home">
        <div className="hero-content">
          {content[props.lang].heroTitle}
          {content[props.lang].heroSubtitle}
          <div className="cta-group">
            <button className="cta cta-primary" onClick={props.openForm}>
              {props.content[props.lang].ctaPrimary}
            </button>
            <Link className="cta cta-secondary" to="#our-production">
              {props.content[props.lang].ctaSecondary}
            </Link>
          </div>
        </div>
        <div className="hero-features">{features}</div>
      </section>
    </>
  );
}
