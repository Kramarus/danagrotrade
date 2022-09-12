import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import contentOrder from "../../content/contentOrder";

export default function OrderForm(props) {
  const validateForm = () => {
    const nameField = document.getElementById("name");

    if (nameField.value.includes("CryptoCep")) {
      nameField.value = "";
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_t3g0qae",
        "template_8k4br6n",
        form.current,
        "LHnq7SREKvjXiCNxZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    props.xCloseForm();
    props.openThank();
  };

  return (
    <div className="modalOverlay component" id="modalOverlay">
      <div className="container modalOrderForm" id="modalOrderForm">
        <div className="modal-header">
          <div className="">
            <h2>{contentOrder[props.lang].title}</h2>
          </div>
          <div className="x-btn" onClick={props.xCloseForm}>
            <svg>
              <line
                x1="1"
                y1="25"
                x2="25"
                y2="1"
                stroke="black"
                stroke-width="3"
              />
              <line
                x1="1"
                y1="1"
                x2="25"
                y2="25"
                stroke="black"
                stroke-width="3"
              />
            </svg>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="modal-body"
          // action="https://formsubmit.co/bb578093b6a53e03850716bdb2a99164"
          // method="POST"
          // onSubmit={() => {
          // }}
        >
          {/* Name */}
          <div className="form-query">
            <label for="name" className="form-label">
              {contentOrder[props.lang].name}
            </label>
            <input
              type="text"
              className="text-input"
              name="name"
              id="name"
              required
            />
          </div>
          {/* Contact */}
          <div className="form-query">
            <label for="location" className="form-label">
              {contentOrder[props.lang].location}
            </label>
            <input
              type="text"
              className="text-input"
              name="location"
              id="location"
              required
            />
          </div>
          <div className="form-query">
            <label for="email" className="form-label">
              {contentOrder[props.lang].email}
            </label>
            <input
              type="text"
              className="text-input"
              name="email"
              id="email"
              required
            />
          </div>
          <div className="form-query">
            <label for="phoneNumber" className="form-label">
              {contentOrder[props.lang].phone}
            </label>
            <input
              type="text"
              className="text-input"
              name="phone"
              id="phoneNumber"
            />
          </div>
          {/* Product */}
          <div className="form-row">
            <div className="form-query form-product">
              <label for="product" class="form-label">
                {contentOrder[props.lang].product.label}
              </label>

              <select className="form-select" id="product" name="product">
                <option selected>{contentOrder[props.lang].product.choose}</option>
                <option value={contentOrder[props.lang].product.flour}>
                  {contentOrder[props.lang].product.flour}
                </option>
                <option value={contentOrder[props.lang].product.bran}>
                  {contentOrder[props.lang].product.bran}
                </option>
                <option value={contentOrder[props.lang].product.semolina}>
                  {contentOrder[props.lang].product.semolina}
                </option>
                <option value={contentOrder[props.lang].product.oil}>
                  {contentOrder[props.lang].product.oil}
                </option>
              </select>
            </div>
            <div className="form-query form-volume">
              <label for="volume" className="form-label">
                {contentOrder[props.lang].volume}
              </label>
              <input
                type="text"
                className="text-input"
                name="volume"
                id="volume"
                required
              />
            </div>
          </div>
          {/* Commentary */}
          <div className="form-query">
            <label for="comments" className="form-label">
              {contentOrder[props.lang].comment}
            </label>
            <textarea
              className="text-input"
              id="comments"
              name="comment"
              rows="3"
            ></textarea>
          </div>
          {contentOrder[props.lang].required}
          {/* Hidden queries */}
          {/* <>
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://dan-agro.com/" />
            <input type="hidden" name="_subject" value="Product order" />
            <input type="hidden" name="_template" value="table" />
          </> */}
          {/* Buttons */}
          <div className="form-buttons-row">
            <button type="submit" className="cta-form-submit" onClick={validateForm}>
              {contentOrder[props.lang].submitBtn}
            </button>
            <button className="cta-form-close" onClick={props.xCloseForm}>
              {contentOrder[props.lang].backBtn}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
