import React from "react";
import "./App.css";

import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Products from "../Products/Products";
import Advantages from "../Advantages/Advantages";
import OurCompany from "../OurCompany/OurCompany";
import Footer from "../Footer/Footer";
import OrderForm from "../OrderForm/OrderForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lang: "en", order: false }; /* en, de, ru,  */

    this.changeLang = this.changeLang.bind(this);
  }

  changeLang(e) {
    this.setState({ lang: e.target.value });
  }

  render() {
    return (
      <div className="background-image">
        <Navbar lang={this.state.lang} onchange={this.changeLang} />
        {this.state.order ? (
          <OrderForm />
        ) : (
          <div>
            <Hero lang={this.state.lang} />
            <Products lang={this.state.lang} />
            <Advantages lang={this.state.lang} />
            <OurCompany lang={this.state.lang} />
          </div>
        )}

        <Footer lang={this.state.lang} />
      </div>
    );
  }
}

export default App;
