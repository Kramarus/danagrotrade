import React from "react";
import danAgroLogo from "../Navbar/img/logo.png";

const content = {
  //Footer
  descriptor: {
    en: (
      <p>
        <span>Dan Agro Trade</span>
        <br />a wholesale supplier of food products in Europe
      </p>
    ),
    de: (
      <p>
        <span>Dan Agro Trade</span>
        <br />
        Großhandelslieferant für Lebensmittelprodukte in Europa
      </p>
    ),
    it: (
      <p>
        <span>Dan Agro Trade</span>
        <br />
      </p>
    ),
    pl: (
      <p>
        <span>Dan Agro Trade</span>
        <br />
      </p>
    ),
    ua: (
      <p>
        <span>Дан Агро Трейд</span>
        <br />
      </p>
    ),
    ru: (
      <p>
        <span>Дан Агро Трейд</span>
        <br />
        оптовый поставщик пищевых продуктов в Европе
      </p>
    ),
  },
  contactTitle: {
    en: "Contacts",
    de: "Kontakte",
    it: "",
    pl: "",
    ua: "",
    ru: "Контакты",
  },
  address: {
    en: "Office 402, Solomyanska sqare, 2, 03035 Kiev, Ukraine",
    de: "Office 402, Solomyanska sqare, 2, 03035 Kiew, die Ukraine",
    it: "",
    pl: "",
    ua: "",
    ru: "Офис 402, Соломянская площадь, 2, 03035 Киев, Украина",
  },
  phoneNumber: {
    en: "+49 176 432 342 83",
    de: "+49 176 432 342 83",
    it: "",
    pl: "",
    ua: "",
    ru: "+49 176 432 342 83",
  },
  contactEmail: {
    en: "rkramarev@gmail.com",
    de: "rkramarev@gmail.com",
    it: "",
    pl: "",
    ua: "",
    ru: "rkramarev@gmail.com",
  },
  contactFacebook: {
    en: "Facebook",
    de: "Facebook",
    it: "",
    pl: "",
    ua: "",
    ru: "Facebook",
  },
  newsletter: {
    en: "Newsletter",
    de: "Newsletter",
    it: "",
    pl: "",
    ua: "",
    ru: "Newsletter",
  },
  newsletterEmail: {
    en: "Your Email",
    de: "Ihre Email",
    it: "",
    pl: "",
    ua: "",
    ru: "Ваш Email",
  },
  newsletterButton: {
    en: "Subscribe",
    de: "Folgen",
    it: "",
    pl: "",
    ua: "",
    ru: "Подписаться",
  },
};

function Footer(props) {
  return (
    <footer className="">
      <div className="container">
        <div className="footer-logo">
          <div className="logo-row">
            <div className="logo-container">
              <img src={danAgroLogo} />
            </div>
            <div className="logo-descriptor">
              <p>{props.content[props.lang].descriptor}</p>
            </div>
          </div>
          <a className="cta cta-primary" onClick={props.openForm}>
            {props.content[props.lang].ctaPrimary}
          </a>
        </div>
        <div className="contacts">
          <h3>{content.contactTitle[props.lang]}</h3>
          <p>{content.address[props.lang]}</p>
          <p>{content.phoneNumber[props.lang]}</p>
          <p>{content.contactEmail[props.lang]}</p>
          <a>{content.contactFacebook[props.lang]}</a>
        </div>
        <div className="newsletter">
          <h3>{content.newsletter[props.lang]}</h3>
          <div className="newsletter-box">
            <form>
              <input
                type="text"
                placeholder={content.newsletterEmail[props.lang]}
              ></input>
              <input
                type="submit"
                value={content.newsletterButton[props.lang]}
              />
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
