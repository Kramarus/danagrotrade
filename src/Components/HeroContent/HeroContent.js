import React from "react";
import { HashLink } from "react-router-hash-link";
import { useNavigate, Link, useLocation } from "react-router-dom";

import content from "../../content/content";

  
export default function HeroContent(props) {

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="component hero-content">
      <h1>{content[props.lang].heroTitle}</h1>
      <h2>{content[props.lang].heroSubtitle}</h2>
      <div className="cta-group">
        <button className="cta cta-primary" onClick={props.openForm}>
          <h4>{content[props.lang].ctaPrimary}</h4>
        </button>
        <HashLink className="cta cta-secondary" to="#our-production">
          <h4>{content[props.lang].ctaSecondary}</h4>
        </HashLink>
      </div>
    </div>
  );
}
