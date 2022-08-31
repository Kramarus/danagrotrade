import React, { useState } from "react";

import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Products from "../Products/Products";
import Advantages from "../Advantages/Advantages";
import OurCompany from "../OurCompany/OurCompany";
import Footer from "../Footer/Footer";
import OrderForm from "../OrderForm/OrderForm";
import ProductInfo from "../ProductInfo/ProductInfo";

const content = {
  en: {
    descriptor: <><span>Dan Agro Trade</span><br />a wholesale supplier of food products in Europe</>,
    ctaPrimary: <>Get a quote</>,
    ctaSecondary: <>Learn more</>,
  },
  de: {
    descriptor: <><span>Dan Agro Trade</span><br />Großhandelslieferant für Lebensmittelprodukte in Europa</>,
    ctaPrimary: <>Preis anfragen</>,
    ctaSecondary: <>Mehr erfahren</>,
  },
  ru: {
    descriptor: <><span>Дан Агро Трейд</span><br />оптовый поставщик пищевых продуктов в Европе</>,
    ctaPrimary: <>Узнать цену</>,
    ctaSecondary: <>Подробнее</>,
  },
};

export default function App() {
  var [lang, setLang] = useState("en");

  const changeLang = (e) => {
    setLang((lang = e.target.value));
  };

  var [formDisplay, setFormDisplay] = useState(false);

  const openForm = () => {
    setFormDisplay((formDisplay = true));
  };

  const closeForm = (e) => {
    if (
      e.tagret === document.getElementById("form-x-btn") ||
      (e.target === document.getElementById("modalOverlay") &&
        e.target !== document.getElementById("modalOrderForm"))
    ) {
      setFormDisplay((formDisplay = false));
    }
  };

  const xCloseForm = () => {
    setFormDisplay((formDisplay = false));
  };



  ///

  return (
    <div className="background-image">
      {formDisplay ? (
        <OrderForm lang={lang} closeForm={closeForm} xCloseForm={xCloseForm} />
      ) : null}
      <Navbar
        lang={lang}
        changeLang={changeLang}
        openForm={openForm}
        content={content}
      />
      <Hero lang={lang} openForm={openForm} content={content} />
      <Products lang={lang} openForm={openForm} />
      <Advantages lang={lang} />
      <OurCompany lang={lang} />
      <Footer lang={lang} openForm={openForm} content={content} />
    </div>
  );
}
