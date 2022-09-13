import React from "react";
import content from "../../content/content";

import danAgroLogo from "./img/logo.png";

export default function Descriptor(props) {
  return (
    <div className="component">
      <div className="logo-row">
        <div className="logo-container">
          <img src={danAgroLogo} alt="Dan Agro Logo" />
        </div>
        <div className="logo-descriptor">
          <h3>{content[props.lang].companyName}</h3>
          <p>{content[props.lang].descriptor}</p>
        </div>
      </div>
    </div>
  );
}
