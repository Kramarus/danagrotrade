import React from "react";

import danAgroLogo from "./img/logo.png";

import content from "../../content";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="navbar container">
        <div className="logo-container">
          <img src={danAgroLogo} />
        </div>
        <div className="logo-descriptor">
          {content.descriptor[this.props.lang]}
        </div>
        <div className="lang-selector">
          <form>
            <select onChange={this.props.onchange}>
              <option value="en" selected>
                English
              </option>
              <option value="de">Deutsch</option>
              <option value="ru">Русский</option>
            </select>
          </form>
        </div>
        <div className="cta-navbar">
          <a className="cta cta-primary">
            {content.ctaPrimary[this.props.lang]}
          </a>
        </div>
      </section>
    );
  }
}

export default Navbar;
