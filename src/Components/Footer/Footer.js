import React from "react";

import content from "../../content";
import danAgroLogo from "../Navbar/img/logo.png";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="custom-height">
        <div className="container">
          <div className="footer-logo">
            <div className="logo-container">
              <img src={danAgroLogo} />
            </div>
            <div className="logo-descriptor">
              <p>{content.descriptor[this.props.lang]}</p>
            </div>
          </div>
          <div className="footer-content">
            <div className="contacts">
              <h3>{content.contactTitle[this.props.lang]}</h3>
              <p>{content.address[this.props.lang]}</p>
              <p>{content.phoneNumber[this.props.lang]}</p>
              <p>{content.contactEmail[this.props.lang]}</p>
              <a>{content.contactFacebook[this.props.lang]}</a>
            </div>
            <div className="newsletter">
              <h3>{content.newsletter[this.props.lang]}</h3>
              <div className="newsletter-box">
                <form>
                  <input type="text" placeholder={content.newsletterEmail[this.props.lang]}></input>
                  <input type="submit" value={content.newsletterButton[this.props.lang]} />
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
