import React from "react";
import content from "../../content/content";

import Descriptor from "../Descriptor/Descriptor";

function Navbar(props) {
  return (
    <div className="component">
      <>
        <Descriptor lang={props.lang} />
      </>
      <>
        <div className="lang-selector">
          <form>
            <select onChange={props.changeLang}>
              <option value="en" selected={props.lang == "en" ? true : false}>
                EN
              </option>
              <option value="de" selected={props.lang == "de" ? true : false}>
                DE
              </option>
              <option value="ua" selected={props.lang == "ua" ? true : false}>
                UA
              </option>
              <option value="ru" selected={props.lang == "ru" ? true : false}>
                RU
              </option>
            </select>
          </form>
        </div>
      </>
      <>
        <div className="cta-navbar">
          <button className="cta cta-primary" onClick={props.openForm}>
            <h4>{content[props.lang].ctaPrimary}</h4>
          </button>
        </div>
      </>
    </div>
  );
}

export default Navbar;
