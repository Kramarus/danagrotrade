import React from "react";
import OrderForm from "../OrderForm/OrderForm";
import { Link, useNavigate } from "react-router-dom";

import danAgroLogo from "./img/logo.png";

function Navbar(props) {
  const navigate = useNavigate();

  return (
    <section className="navbar container">
      <div className="logo-row">
        <div className="logo-container">
          <img src={danAgroLogo} alt="Dan Agro Logo" />
        </div>
        <div className="logo-descriptor">
          <p>{props.content[props.lang].descriptor}</p>
        </div>
      </div>
      <div className="lang-selector">
        <form>
          <select onChange={props.changeLang}>
            <option value="en" selected={props.lang == "en" ? true : false}>English</option>
            <option value="de" selected={props.lang == "de" ? true : false}>Deutsch</option>
            <option value="ua" selected={props.lang == "ua" ? true : false}>Українська</option>
            <option value="ru" selected={props.lang == "ru" ? true : false}>Русский</option>
          </select>
        </form>
      </div>
      <div className="cta-navbar">
        <button className="cta cta-primary" onClick={props.openForm}>
          {props.content[props.lang].ctaPrimary}
        </button>
      </div>
    </section>
  );
}

export default Navbar;
