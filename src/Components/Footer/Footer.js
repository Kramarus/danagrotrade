import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import Descriptor from "../Descriptor/Descriptor";
import Navbar from "../Navbar/Navbar";

import danAgroLogo from "../Navbar/img/logo.png";
import contentFooter from "../../content/contentFooter";
import content from "../../content/content";



function Footer(props) {
  return (
    <footer className="component">
        <div className="footer-grid">
          <div className="descriptor">
            <Descriptor lang={props.lang} />
            <button className="cta cta-primary" onClick={props.openForm}>
              {content[props.lang].ctaPrimary}
            </button>
          </div>
          <div className="footer-links">
            <div className="links">
              <h3>{contentFooter[props.lang].links.title}</h3>
              <ul>
                <li>
                  <Link to="#home">{contentFooter[props.lang].links.home}</Link>
                </li>
                <li>
                  <Link to="#our-production">
                    {contentFooter[props.lang].links.products}
                  </Link>
                </li>
                <li>
                  <Link to="#advantages">
                    {contentFooter[props.lang].links.advantages}
                  </Link>
                </li>
                <li>
                  <Link to="#about">{contentFooter[props.lang].links.about}</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="newsletter">
            <div className="newsletter-title">
              <h3>{contentFooter[props.lang].newsletter.title}</h3>
            </div>

            <form className="newsletter-box">
              <input
                className="newsletter-text"
                type="text"
                placeholder={contentFooter[props.lang].newsletter.email}
              />
              <input
                className="newsletter-btn"
                type="submit"
                value={contentFooter[props.lang].newsletter.button}
              />
            </form>
          </div>
          <div className="contact-box">
            <div>
              <h3>{contentFooter[props.lang].contacts.salesEurope.title}</h3>
              <p>{contentFooter[props.lang].contacts.salesEurope.agent}</p>
              <p>{contentFooter[props.lang].contacts.salesEurope.phone}</p>
              <p>{contentFooter[props.lang].contacts.salesEurope.email}</p>
            </div>
          </div>
          <div className="contact-box">
            <div>
              <h3>{contentFooter[props.lang].contacts.companyUkraine.title}</h3>
              <p>{contentFooter[props.lang].contacts.companyUkraine.address}</p>
              <p>{contentFooter[props.lang].contacts.companyUkraine.code}</p>
            </div>
          </div>
          <div className="contact-box">
            <div>
              <h3>{contentFooter[props.lang].contacts.companySlovakia.title}</h3>
              <p>{contentFooter[props.lang].contacts.companySlovakia.address}</p>
              <p>{contentFooter[props.lang].contacts.companySlovakia.code}</p>
            </div>
          </div>
        </div>
        <div className="copyright">{contentFooter[props.lang].copyright}</div>
    </footer>
  );
}

export default Footer;
