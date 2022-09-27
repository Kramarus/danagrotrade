import React, { useState, useEffect } from "react";
import { useNavigate, Route, useLocation } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Products from "../Products/Products";
import Advantages from "../Advantages/Advantages";
import OurCompany from "../OurCompany/OurCompany";
import Footer from "../Footer/Footer";
import OrderForm from "../OrderForm/OrderForm";
import Thankyou from "../Thankyou/Thankyou";

import content from "../../content/content";

export default function Landing(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const changeLang = (e) => {
    const lang = e.target.value;
    navigate("/" + lang);
  };

  var [formDisplay, setFormDisplay] = useState(false);

  const openForm = () => {
    navigate(location.pathname+"/orderform")
  };

  const closeForm = (e) => {
    if (
      e.target === document.getElementById("modalOverlay") &&
      e.target !== document.getElementById("modalOrderForm")
    ) {
      navigate(-1);
    }
  };

  const xCloseForm = () => {
    navigate(-1)
  };

  var [thank, setThank] = useState(false);

  const openThank = () => {
    setThank((thank = true));
  };

  const closeThank = () => {
    setThank((thank = false));
  };

  const closeThankOutside = (e) => {
    if (
      e.target === document.getElementById("modalOverlayThank") &&
      e.target !== document.getElementById("modalThank")
    ) {
      setThank((thank = false));
    }
  };

  return (
    <div className="landing background-image component">
      <nav className="navbar">
        <div className="container">
          <Navbar
            lang={props.lang}
            changeLang={changeLang}
            openForm={openForm}
            content={content}
          />
        </div>
      </nav>
      <main className="hero" id="hero">
        <div className="container">
          <Hero lang={props.lang} openForm={openForm} content={content} />
        </div>
      </main>
      <section className="production filled" id="our-production">
        <div className="container">
          <h2 className="section-title">{content[props.lang].productionTitle}</h2>
          <Products lang={props.lang} openForm={openForm} content={content} />
        </div>
      </section>
      <section className="advantages" id="our-advantages">
        <div className="container">
        <h2 className="section-title">{content[props.lang].advantagesTitle}</h2>
          <Advantages lang={props.lang} />
        </div>
      </section>
      <section className="company filled" id="about">
        <div className="container">
        <h2 className="section-title">{content[props.lang].aboutTitle}</h2>
          <OurCompany lang={props.lang} />
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <Footer lang={props.lang} openForm={openForm} content={content} />
        </div>
      </footer>

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
    </div>
  );
}
