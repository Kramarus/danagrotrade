import React, { Component } from "react";

import OrderForm from "../OrderForm/OrderForm";

import shipped from "./img/shipped.png";
import packaging from "./img/package.png";
import twenty from "./img/twenty.png";

import content from "../../content";

const featuresData = [
  {
    src: shipped,
    alt: "shipping",
    desc: content.shippingFeature,
  },
  {
    src: packaging,
    alt: "package",
    desc: content.packagingFeature,
  },
  {
    src: twenty,
    alt: "twenty",
    desc: content.orderFeature,
  },
];

export default class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = { displayOrderForm: false };

    this.openForm = this.openForm.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }

  openForm() {
    this.setState({ displayOrderForm: true });
  }

  closeForm() {
    this.setState({ displayOrderForm: false });
  }

  render() {
    const features = [];

    featuresData.forEach((e) => {
      features.push(
        <div className="hero-feature">
          <div className="hero-feature-img">
            <img src={e.src} alt={e.alt} />
          </div>
          <div className="hero-feature-content">{e.desc[this.props.lang]}</div>
        </div>
      );
    });

    const modalOrderForm = (
      <div className="modalOverlay">
        <div className="container modalOrderForm" id="modalOrderForm">
          <div className="modal-header">
            <h2>Ordering form</h2>
            <a onClick={this.closeForm}>+</a>
          </div>
          <form
            action="https://formsubmit.co/bb578093b6a53e03850716bdb2a99164"
            method="POST"
            className="modal-body"
          >
            {/* Name */}
            <div className="form-query">
              <label for="name" className="form-label">
                Your name or company name
              </label>
              <input
                type="text"
                className="text-input"
                name="Name (or company name)"
                id="name"
                required
              />
            </div>
            {/* Contact */}
            <div className="form-query">
              <label for="location" className="form-label">
                Your location (city and country)
              </label>
              <input
                type="text"
                className="text-input"
                name="Location"
                id="location"
                required
              />
            </div>
            <div className="form-query">
              <label for="phoneNumber" className="form-label">
                Your Email
              </label>
              <input
                type="text"
                className="text-input"
                name="Email"
                id="email"
                required
              />
            </div>
            <div className="form-query">
              <label for="phoneNumber" className="form-label">
                Your phone number
              </label>
              <input
                type="text"
                className="text-input"
                name="Phone"
                id="phoneNumber"
              />
            </div>
            {/* Product */}
            <div className="form-row">
              <div className="form-query form-product">
                <label for="product" class="form-label">
                  Product
                </label>

                <select
                  className="form-select mb-3"
                  id="product"
                  name="Product"
                >
                  <option selected="">Choose your product</option>
                  <option value="Wheat flour">Wheat flour</option>
                  <option value="Wheat bran">Wheat bran</option>
                  <option value="Semolina">Semolina</option>
                </select>
              </div>
              <div className="form-query form-volume">
                <label for="volume" className="form-label">
                  Volume (ton)
                </label>
                <input
                  type="text"
                  className="text-input"
                  name="Volume (ton)"
                  id="volume"
                  required
                />
              </div>
            </div>
            <div className="form-query">
              <label for="custom-label" className="form-label">
                Do you need a custom label?
                <input type="radio" id="label-no" name="Custom label" value="not needed" />
                <label for="label-no">No</label>
                <input type="radio" id="label-yes" name="Custom label" value="needed"/>
                <label for="label-yes">Yes</label>
                
              </label>
            </div>
            {/* Commentary */}
            <div className="form-query">
              <label for="comments" className="form-label">
                Commentary (your demands to quality level, package etc.)
              </label>
              <textarea
                className="text-input"
                id="comments"
                name="Commentary"
                rows="3"
              ></textarea>
            </div>
            * required fields
            {/* Hidden queries */}
            <>
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="https://dan-agro.com/thankyou.html"
              />
              <input type="hidden" name="_subject" value="Product order" />
              <input type="hidden" name="_template" value="table" />
            </>
            {/* Buttons */}
            <div className="form-buttons-row">
              <button type="submit" className="cta-form-submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    );

    return (
      <>
        <section className="hero container">
          <div className="hero-content">
            {content.heroTitle[this.props.lang]}
            {content.heroSubtitle[this.props.lang]}
            <div className="cta-group">
              <a className="cta cta-primary" onClick={this.openForm}>
                {content.ctaPrimary[this.props.lang]}
              </a>
              <a className="cta cta-secondary" href="#our-production">
                {content.ctaSecondary[this.props.lang]}
              </a>
            </div>
          </div>
          <div className="hero-features">{features}</div>
        </section>
        {this.state.displayOrderForm ? modalOrderForm : null}
      </>
    );
  }
}
