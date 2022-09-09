import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import content from "../../content/content";

  
export default function HeroContent(props) {
  return (
    <div className="component hero-content">
      {content[props.lang].heroTitle}
      {content[props.lang].heroSubtitle}
      <div className="cta-group">
        <button className="cta cta-primary" onClick={props.openForm}>
          {content[props.lang].ctaPrimary}
        </button>
        <Link className="cta cta-secondary" to="#our-production">
          {content[props.lang].ctaSecondary}
        </Link>
      </div>
    </div>
  );
}
