import React from "react";
import { HashLink as Link } from 'react-router-hash-link';

import danAgroLogo from "../Navbar/img/logo.png";

const content = {
  en: {
    links: {
      title: <>Links</>,
      home: <>Home</>,
      products: <>Products</>,
      advantages: <>Advantages</>,
      about: <>About us</>,
    },
    newsletter: {
      title: <>Newsletter</>,
      email: "Your Email",
      button: "Subscribe",
    },
    contacts: {
      salesEurope: {
        title: <>Sales in Europe</>,
        agent: <>Ruslan Kramarev</>,
        phone: <>+49 176 432 342 83</>,
        email: <>rkramarev@gmail.com</>,
      },
      companyUkraine: {
        title: <>Dan Agro Trade LLC.</>,
        address: (
          <>
            16/30, Chernyahovskogo st.
            <br />
            03190 Kyiv
            <br />
            Ukraine
          </>
        ),
        code: <>EDRPOU Code 44014756</>,
      },
      companySlovakia: {
        title: <>Teploenergo Slovakia LLC.</>,
        address: (
          <>
            Budovatelska 29
            <br />
            093 01 Vranov nad Toplou
            <br />
            Slovakia
          </>
        ),
        code: <>ID number: 36512206</>,
      },
    },
    copyright: <>Powered by Teploenergo © 2022 | All rights reserved</>,
  },
  de: {
    links: {
      title: <>Links</>,
      home: <>Hauptseite</>,
      products: <>Produkte</>,
      advantages: <>Vorteile</>,
      about: <>Über uns</>,
    },
    newsletter: {
      title: <>Newsletter</>,
      email: "Ihre Email",
      button: "Folgen",
    },
    contacts: {
      salesEurope: {
        title: <>Vertrieb in Europa</>,
        agent: <>Ruslan Kramarev</>,
        phone: <>+49 176 432 342 83</>,
        email: <>rkramarev@gmail.com</>,
      },
      companyUkraine: {
        title: <>Dan Agro Trade GmbH.</>,
        address: (
          <>
            16/30, Chernyahovskogo str.
            <br />
            03190 Kiew
            <br />
            die Ukraine
          </>
        ),
        code: <>EDRPOU Code 44014756</>,
      },
      companySlovakia: {
        title: <>Teploenergo Slovakia GmbH.</>,
        address: (
          <>
            Budovatelska 29
            <br />
            093 01 Vranov nad Toplou
            <br />
            die Slovakei
          </>
        ),
        code: <>ID nummer: 36512206</>,
      },
    },
    copyright: <>Powered by Teploenergo © 2022 | All rights reserved</>,
  },
  ua: {
    links: {
      title: <>Посилання</>,
      home: <>Головна</>,
      products: <>Продукти</>,
      advantages: <>Преимущества</>,
      about: <>Про нас</>,
    },
    newsletter: {
      title: <>Підписатися <br />на оновлення</>,
      email: "Ваш Email",
      button: "Підписатися",
    },
    contacts: {
      salesEurope: {
        title: <>Продаж у Європі</>,
        agent: <>Руслан Крамарев</>,
        phone: <>+49 176 432 342 83</>,
        email: <>rkramarev@gmail.com</>,
      },
      companyUkraine: {
        title: <>Дан Агро Трейд ТОВ</>,
        address: (
          <>
            16/30, вул. Черняховського
            <br />
            03190 Київ
            <br />
            Україна
          </>
        ),
        code: <>ЄДРПОУ код 44014756</>,
      },
      companySlovakia: {
        title: <>Теплоенерго Словаччина ТОВ</>,
        address: (
          <>
            вул. Будовательска 29
            <br />
            093 01 Вранов-над-Теплою
            <br />
            Словаччина
          </>
        ),
        code: <>Идентификационный номер: 36512206</>,
      },
    },
    copyright: <>Теплоенерго © 2022 | Всі права захищені</>,
  },
  ru: {
    links: {
      title: <>Ссылки</>,
      home: <>Главная</>,
      products: <>Продукты</>,
      advantages: <>Преимущества</>,
      about: <>О нас</>,
    },
    newsletter: {
      title: <>Подписаться <br />на обновления</>,
      email: "Ваш Email",
      button: "Подписаться",
    },
    contacts: {
      salesEurope: {
        title: <>Продажи в Европе</>,
        agent: <>Руслан Крамарев</>,
        phone: <>+49 176 432 342 83</>,
        email: <>rkramarev@gmail.com</>,
      },
      companyUkraine: {
        title: <>Дан Агро Трейд ООО</>,
        address: (
          <>
            16/30, ул. Черняховского
            <br />
            03190 Киев
            <br />
            Украина
          </>
        ),
        code: <>ЕДРПОУ код 44014756</>,
      },
      companySlovakia: {
        title: <>Теплоэнерго Словакия ООО</>,
        address: (
          <>
            ул. Будовательска 29
            <br />
            093 01 Вранов-над-Топлёу
            <br />
            Словакия
          </>
        ),
        code: <>Идентификационный номер: 36512206</>,
      },
    },
    copyright: <>Теплоэнерго © 2022 | Все права защищены</>,
  },
};

function Footer(props) {
  return (
    <footer className="">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-logo">
            <div className="logo-row">
              <div className="logo-container">
                <img src={danAgroLogo} alt="Dan Agro Logo" />
              </div>
              <div className="logo-descriptor">
                <p>{props.content[props.lang].descriptor}</p>
              </div>
            </div>
            <button className="cta cta-primary" onClick={props.openForm}>
              {props.content[props.lang].ctaPrimary}
            </button>
          </div>
          <div className="footer-links">
            <h3>{content[props.lang].links.title}</h3>
            <ul>
              <li>
                <Link to="#home">{content[props.lang].links.home}</Link>
              </li>
              <li>
                <Link to="#our-production">
                  {content[props.lang].links.products}
                </Link>
              </li>
              <li>
                <Link to="#advantages">{content[props.lang].links.advantages}</Link>
              </li>
              <li>
                <Link to="#about">{content[props.lang].links.about}</Link>
              </li>
            </ul>
          </div>
          <div className="newsletter">
            <div className="newsletter-title">
              <h3>{content[props.lang].newsletter.title}</h3>
            </div>

            <form className="newsletter-box">
              <input
                className="newsletter-text"
                type="text"
                placeholder={content[props.lang].newsletter.email}
              />
              <input
                className="newsletter-btn"
                type="submit"
                value={content[props.lang].newsletter.button}
              />
            </form>
          </div>
          <div className="contact-box">
            <h3>{content[props.lang].contacts.salesEurope.title}</h3>
            <p>{content[props.lang].contacts.salesEurope.agent}</p>
            <p>{content[props.lang].contacts.salesEurope.phone}</p>
            <p>{content[props.lang].contacts.salesEurope.email}</p>
          </div>
          <div className="contact-box">
            <h3>{content[props.lang].contacts.companyUkraine.title}</h3>
            <p>{content[props.lang].contacts.companyUkraine.address}</p>
            <p>{content[props.lang].contacts.companyUkraine.code}</p>
          </div>
          <div className="contact-box">
            <h3>{content[props.lang].contacts.companySlovakia.title}</h3>
            <p>{content[props.lang].contacts.companySlovakia.address}</p>
            <p>{content[props.lang].contacts.companySlovakia.code}</p>
          </div>
        </div>
        <div className="copyright">{content[props.lang].copyright}</div>
      </div>
    </footer>
  );
}

export default Footer;
