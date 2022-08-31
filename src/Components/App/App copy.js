import React from "react";

import useNavigate from 'react';

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
    this.state = { lang: "en", displayOrderForm: false }; /* en, de, ru,  */

    this.changeLang = this.changeLang.bind(this);
    this.openForm = this.openForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.closeOutside = this.closeOutside.bind(this);
  }

  changeLang(e) {
    this.setState({ lang: e.target.value });
  }

  openForm() {
    this.setState({ displayOrderForm: true });
  }

  closeForm() {
    this.setState({ displayOrderForm: false });
  }

  closeOutside(e){
      if (e.target === document.getElementById('modalOverlay') && e.target !== document.getElementById('modalOrderForm')){
        this.setState({displayOrderForm: false});
      }
  }

  render() {
    return (
      <div className="background-image">
        {this.state.displayOrderForm ? <OrderForm lang={this.state.lang} closeForm={this.closeForm} closeOutside={this.closeOutside} /> : null}
        <Navbar lang={this.state.lang} onChange={this.changeLang} openForm={this.openForm}  />
        <Hero lang={this.state.lang} openForm={this.openForm} />
        <Products lang={this.state.lang} />
        <Advantages lang={this.state.lang} />
        <OurCompany lang={this.state.lang} />
        <Footer lang={this.state.lang} />
      </div>
    );
  }
}

export default App;
