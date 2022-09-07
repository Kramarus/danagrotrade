import React, { useState, useEffect } from "react";
import { useNavigate, Route } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Products from "../Products/Products";
import Advantages from "../Advantages/Advantages";
import OurCompany from "../OurCompany/OurCompany";
import Footer from "../Footer/Footer";
import OrderForm from "../OrderForm/OrderForm";
import Thankyou from "../Thankyou/Thankyou";

const content = {
  en: {
    descriptor: (
      <>
        <span>Dan Agro Trade</span>
        <br />a wholesale supplier of food products in Europe
      </>
    ),
    ctaPrimary: <>Get a quote</>,
    ctaSecondary: <>Learn more</>,
  },
  de: {
    descriptor: (
      <>
        <span>Dan Agro Trade</span>
        <br />
        Großhandelslieferant für Lebensmittelprodukte in Europa
      </>
    ),
    ctaPrimary: <>Preis anfragen</>,
    ctaSecondary: <>Mehr erfahren</>,
  },
  it: {
    destiptor: (
      <>
        <span>Dan Agro Trade</span>
        <br />
        un fornitore all'ingrosso di prodotti alimentari in Europa
      </>
    ),
    ctaPrimary: <>Fai un ordine</>,
    ctaSecondary: <>Scopri di più</>,
  },
  pl: {
    destiptor: (
      <>
        <span>Dan Agro Trade</span>
        <br />
        dostawca hurtowy produktów spożywczych w Europie
      </>
    ),
    ctaPrimary: <>Do zamówienia</>,
    ctaSecondary: <>Dowiedz się więcej</>,
  },
  ua: {
    descriptor: (
      <>
        <span>Дан Агро Трейд</span>
        <br />
        оптовий постачальник харчових продуктів у Європі
      </>
    ),
    ctaPrimary: <>Запросити ціну</>,
    ctaSecondary: <>Дізнатися більше</>,
  },
  ru: {
    descriptor: (
      <>
        <span>Дан Агро Трейд</span>
        <br />
        оптовый поставщик пищевых продуктов в Европе
      </>
    ),
    ctaPrimary: <>Узнать цену</>,
    ctaSecondary: <>Подробнее</>,
  },
};

export default function Landing(props) {
  
  const navigate = useNavigate();

  const changeLang = (e) => {
    const lang = e.target.value;
    navigate("/" + lang);
  };

  var [formDisplay, setFormDisplay] = useState(false);

  const openForm = () => {
    setFormDisplay((formDisplay = true));
  };

  const closeForm = (e) => {
    if (
      e.target === document.getElementById("modalOverlay") &&
      e.target !== document.getElementById("modalOrderForm")
    ) {
      setFormDisplay((formDisplay = false));
    }
  };

  const xCloseForm = () => {
    setFormDisplay((formDisplay = false));
  };

  var [thank, setThank] = useState(false);

  const openThank = () => {
    setThank(thank = true);
  }

  const closeThank = () => {
    setThank(thank = false);
  }

  const closeThankOutside = (e) => {
    if (
      e.target === document.getElementById("modalOverlayThank") &&
      e.target !== document.getElementById("modalThank")
    ) {
      setThank(thank = false);
    }
  };


  // const closeThank = (e) => {
  //   if (
  //     e.target === document.getElementById("modalOverlayThank") &&
  //     e.target !== document.getElementById("modalThank")
  //   ) {
  //     setThank({ thank: false });
  //   }
  // };

  return (
    <div className="background-image">
      {formDisplay ? (
        <OrderForm
          lang={props.lang}
          closeForm={closeForm}
          xCloseForm={xCloseForm}
          openThank={openThank}
        />
      ) : null}
      {thank ? (
        <Thankyou
          lang={props.lang}
          openForm={openForm}
          close={closeThank}
          closeOutside={closeThankOutside}
        />
      ) : null}
      <Navbar
        lang={props.lang}
        changeLang={changeLang}
        openForm={openForm}
        content={content}
      />
      <Hero lang={props.lang} openForm={openForm} content={content} />
      <Products lang={props.lang} openForm={openForm} content={content} />
      <Advantages lang={props.lang} />
      <OurCompany lang={props.lang} />
      <Footer lang={props.lang} openForm={openForm} content={content} />
    </div>
  );
}
