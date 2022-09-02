import React from "react";

import danAgroLogo from "./img/logo.png";

function Navbar (props) {
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
              <option value="en" selected>English</option>
              <option value="de">Deutsch</option>
              <option value="ua">Українська</option>
              <option value="ru">Русский</option>
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
