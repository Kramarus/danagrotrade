import React from "react";

const content = {
  en: {
    title: "Get a quote",
    name: "Your name or company name",
    location: "Your location (city and country)",
    email: "Your Email",
    phone: "Your phone number",
    product: {
      label: "Product",
      choose: "Choose your product",
      flour: "Wheat flour",
      bran: "Wheat bran",
      semolina: "Semolina",
      oil: "Sunflower oil",
    },
    volume: "Volume (ton)",
    customLabel: {
      question: "Do you need a custom label?",
      no: "No",
      yes: "Yes",
    },
    comment: "Commentary (your demands to quality level, package etc.)",
    submit: "Send",
    required: "* required fields",
  },
  de: {
    title: "Preis anfragen",
    name: "Ihr Name oder Firmenname",
    location: "Ihr Ort (Land, Stadt)",
    email: "Ihr Email",
    phone: "Ihre Handy nummer",
    product: {
      label: "Produkt",
      choose: "Choose your product",
      flour: "Weizenmehl",
      bran: "Weizenkleie",
      semolina: "Grieß",
      oil: "Sonnenblumenöl",
    },
    volume: "Volumen (Tonnen)",
    customLabel: {
      question: "Brauchen Sie Eigenmarkenetikett?",
      no: "Nein",
      yes: "Ja",
    },
    comment: "Kommentar (Ihre Anforderungen an Qualität, Verpackung etc.)",
    submit: "Schicken",
    required: "* Pflichtfelder",
  },
  it: {},
  pl: {},
  ua: {
    title: "Запросити цiну",
    name: "Ваше ім'я або назва компанії",
    location: "Ваше місцезнаходження (країна, місто)",
    email: "Ваш Email",
    phone: "Ваш номер телефону",
    product: {
      label: "Продукт",
      choose: "Оберіть продукт",
      flour: "Пшеничне борошно",
      bran: "Пшеничні висівки",
      semolina: "Манна крупа",
      oil: "Соняшникова олія",
    },
    volume: "Об'єм (тонн)",
    customLabel: {
      question: "Вам потрібна своя етикетка на продукті?",
      no: "Ні",
      yes: "Так",
    },
    comment: "Коментар (Ваші вимоги до рівня якості, упаковки тощо)",
    submit: "Надіслати",
    required: "* обов'язкові поля",
  },
  ru: {
    title: "Узнать цену",
    name: "Ваше имя или название компании",
    location: "Ваше местоположение (страна, город)",
    email: "Ваш Email",
    phone: "Ваш номер телефона",
    product: {
      label: "Продукт",
      choose: "Выберите продукт",
      flour: "Пшеничная мука",
      bran: "Пшеничные отруби",
      semolina: "Манная крупа",
      oil: "Подсолнечное масло",
    },
    volume: "Объём (тонн)",
    customLabel: {
      question: "Вам нужна своя этикетка на продукте?",
      no: "Нет",
      yes: "Да",
    },
    comment: "Коментарий (Ваши требования к уровню качества, упаковке и т.д.)",
    submit: "Отправить",
    required: "* обязательные поля",
  },
};

export default function OrderForm(props) {
  
  const validateForm = (e) => {
    const nameField = document.getElementById("name");

    if (nameField.value.includes("CryptoCep")) {
      nameField.value = "";
    }
  };

  return (
    <div className="modalOverlay" id="modalOverlay" onClick={props.closeForm}>
      <div className="container modalOrderForm" id="modalOrderForm">
        <div className="modal-header">
          <div className="">
            <h2>{content[props.lang].title}</h2>
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
          action="https://formsubmit.co/bb578093b6a53e03850716bdb2a99164"
          method="POST"
          className="modal-body"
          onSubmit={() => {
            props.xCloseForm();
            props.openThank();
          }}
        >
          {/* Name */}
          <div className="form-query">
            <label for="name" className="form-label">
              {content[props.lang].name}
            </label>
            <input
              type="text"
              className="text-input"
              name={content[props.lang].name}
              id="name"
              required
            />
          </div>
          {/* Contact */}
          <div className="form-query">
            <label for="location" className="form-label">
              {content[props.lang].location}
            </label>
            <input
              type="text"
              className="text-input"
              name={content[props.lang].location}
              id="location"
              required
            />
          </div>
          <div className="form-query">
            <label for="email" className="form-label">
              {content[props.lang].email}
            </label>
            <input
              type="text"
              className="text-input"
              name={content[props.lang].email}
              id="email"
              required
            />
          </div>
          <div className="form-query">
            <label for="phoneNumber" className="form-label">
              {content[props.lang].phone}
            </label>
            <input
              type="text"
              className="text-input"
              name={content[props.lang].phone}
              id="phoneNumber"
            />
          </div>
          {/* Product */}
          <div className="form-row">
            <div className="form-query form-product">
              <label for="product" class="form-label">
                {content[props.lang].product.label}
              </label>

              <select
                className="form-select mb-3"
                id="product"
                name={content[props.lang].product.label}
              >
                <option selected>{content[props.lang].product.choose}</option>
                <option value={content[props.lang].product.flour}>
                  {content[props.lang].product.flour}
                </option>
                <option value={content[props.lang].product.bran}>
                  {content[props.lang].product.bran}
                </option>
                <option value={content[props.lang].product.semolina}>
                  {content[props.lang].product.semolina}
                </option>
                <option value={content[props.lang].product.oil}>
                  {content[props.lang].product.oil}
                </option>
              </select>
            </div>
            <div className="form-query form-volume">
              <label for="volume" className="form-label">
                {content[props.lang].volume}
              </label>
              <input
                type="text"
                className="text-input"
                name={content[props.lang].volume}
                id="volume"
                required
              />
            </div>
          </div>
          <div className="form-query">
            <label for="custom-label" className="form-label">
              {content[props.lang].customLabel.question}
              <input
                type="radio"
                id="label-no"
                name={content[props.lang].customLabel.question}
                value={content[props.lang].customLabel.no}
              />
              <label for="label-no">{content[props.lang].customLabel.no}</label>
              <input
                type="radio"
                id="label-yes"
                name={content[props.lang].customLabel.question}
                value={content[props.lang].customLabel.yes}
              />
              <label for="label-yes">
                {content[props.lang].customLabel.yes}
              </label>
            </label>
          </div>
          {/* Commentary */}
          <div className="form-query">
            <label for="comments" className="form-label">
              {content[props.lang].comment}
            </label>
            <textarea
              className="text-input"
              id="comments"
              name={content[props.lang].comment}
              rows="3"
            ></textarea>
          </div>
          {content[props.lang].required}
          {/* Hidden queries */}
          <>
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://dan-agro.com/"
            />
            <input type="hidden" name="_subject" value="Product order" />
            <input type="hidden" name="_template" value="table" />
          </>
          {/* Buttons */}
          <div className="form-buttons-row">
            <button
              type="submit"
              className="cta-form-submit"
              onClick={() => {
                validateForm();
              }}
            >
              {content[props.lang].submit}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
