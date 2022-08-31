import React from "react";

import ProductInfo from "../ProductInfo/ProductInfo";
import { useState } from "react";

import flourImg from "./img/flour.jpg";
import branImg from "./img/bran.jpg";
import semolinaImg from "./img/semolina.jpg";

const content = {
  en: {
    productsTitle: (
      <>
        <span>Our</span> production
      </>
    ),
    flourLabel: <>Wheat flour</>,
    branLabel: <>Wheat bran</>,
    semolinaLabel: <>Semolina</>,
  },
  de: {
    productsTitle: (
      <>
        <span>Unsere</span> Produkte
      </>
    ),
    flourLabel: <>Weizenmehl</>,
    branLabel: <>Weizenkleie</>,
    semolinaLabel: <>Grieß</>,
  },
  ru: {
    productsTitle: (
      <>
        <span>Наши</span> продукты
      </>
    ),
    flourLabel: <>Пшеничная мука</>,
    branLabel: <>Пшеничные отруби</>,
    semolinaLabel: <>Манная крупа</>,
  },
};

export default function Products(props) {
  ////////
  var [state, setState] = useState({ productDisplay: false });

  const closeProduct = (e) => {
    if (
      e.target === document.getElementById("modalOverlay") &&
      e.target !== document.getElementById("modalOrderForm")
    ) {
      setState({ productDisplay: false });
    }
  };

  const xCloseProduct = () => {
    setState({ productDisplay: false });
  };

  const tableData = {
    en: {
      grade: <>Grade</>,
      highest: <>highest</>,
      first: <>first</>,
      color: <>Color</>,
      colorFlour: <>White or white with yellow shade</>,
      colorBran: <>Red-yellow with grey shade</>,
      colorSemolina: <>White with creme shade</>,
      moisture: <>Moisture, %, max</>,
      ash: <>Ash content in terms of dry matter, %, max</>,
      gluten: <>Raw gluten content, %, min</>,
      falling: <>Falling number, min</>,
      protein: <>Protein content in terms of dry matter, %</>,
      packaging: <>Packaging</>,
      order: <>Min. order</>,
      orderValue: <>from 20 ton</>,
      kg: <>kg</>,
    },
    de: {
      grade: <>Sorte</>,
      highest: <>premium</>,
      first: <>erste</>,
      color: <>Farbe</>,
      colorFlour: <>Weiß oder weiß mit gelbem Schatten</>,
      colorBran: <>Rot-gelb mit grauen Schatten</>,
      colorSemolina: <>Weiß mit cremefarbenen Schatten</>,
      moisture: <>Feuchtigkeit, %, max</>,
      ash: <>Aschegehalt bezogen auf Trockenmasse, %, max</>,
      gluten: <>Rohglutengehalt, %, mind</>,
      falling: <>Fallzahl, mind</>,
      protein: <>Proteingehalt in der Trockenmasse, %</>,
      packaging: <>Verpackung</>,
      order: <>Mind. Bestellung</>,
      orderValue: <>ab 20 Tonnen</>,
      kg: <>kg</>,
    },
    ru: {
      grade: <>Сорт</>,
      highest: <>высший</>,
      first: <>первый</>,
      color: <>Цвет</>,
      colorFlour: <>Белый или белый с желтым оттенком</>,
      colorBran: <>Красно-желтый с сыроватым оттенком</>,
      colorSemolina: <>Белый или с кремовым оттенком</>,
      moisture: <>Влажность, %, не больше</>,
      ash: <>Зольность в перерасчете на сухое вещество, %, не меньше</>,
      gluten: <>Клейковина сырая, %, не меньше</>,
      falling: <>Число падения, %, не меньше</>,
      protein: <>Белок в перерасчёте на сухое вещество, %</>,
      packaging: <>Фасовка</>,
      order: <>Минимальный заказ</>,
      orderValue: <>от 20 тонн</>,
      kg: <>кг</>,
    },
  };
  /////
  const productDetails = [
    {
      src: flourImg,
      alt: "flour",
      table: (
        <table>
          <thead>
            <tr>
              <th>{tableData[props.lang].grade}</th>
              <th>{tableData[props.lang].highest}</th>
              <th>{tableData[props.lang].first}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{tableData[props.lang].color}</td>
              <td colspan="2">{tableData[props.lang].colorFlour}</td>
            </tr>
            <tr>
              <td>{tableData[props.lang].moisture}</td>
              <td colspan="2">15.0</td>
            </tr>
            <tr>
              <td>{tableData[props.lang].ash}</td>
              <td>0.55</td>
              <td>0.75</td>
            </tr>
            <tr>
              <td>{tableData[props.lang].gluten}</td>
              <td>24.00</td>
              <td>25.00</td>
            </tr>
            <tr>
              <td>{tableData[props.lang].falling}</td>
              <td colspan="2">160</td>
            </tr>
            <tr>
              <td>{tableData[props.lang].protein}</td>
              <td colspan="2">11.50</td>
            </tr>

            <tr>
              <td>{tableData[props.lang].packaging}</td>
              <td colspan="2">
                1, 2, 5, 10, 25, 50 <span>{tableData[props.lang].kg}</span>
              </td>
            </tr>
            <tr>
              <td>{tableData[props.lang].order}</td>
              <td colspan="2">{tableData[props.lang].orderValue}</td>
            </tr>
          </tbody>
        </table>
      ),
      productInfo: {
        en: {
          label: <>Wheat flour</>,
          standard: <>Wheat flour in accordance with the International Technical Standard (GOST) 46.004-99.</>,
          origin: <>Country of origin: Ukraine</>,
        },
        de: {
          label: <>Weizenmehl</>,
          standard: <>Weizenmehl laut dem Internationalen Technischen Standart (GOST) 46.004-99</>,
          origin: <>Herkunftsland: die Ukraine</>,
        },
        ru: {
          label: <>Пшеничная мука</>,
          standard: <>Пшеничная мука в соответствии с ГОСТ 46.004-99</>,
          origin: <>Страна происхождения сырья: Украина</>,
        },
      },
    },
    {
      src: branImg,
      alt: "bran",
      table: (
        <table class="table table-bordered">
          <tbody>
            <tr>
              <td>{tableData[props.lang].color}</td>
              <td>{tableData[props.lang].colorBran}</td>
            </tr>
            <tr>
              <td>{tableData[props.lang].moisture}</td>
              <td>15.0</td>
            </tr>
            <tr>
              <td>{tableData[props.lang].protein}</td>
              <td>14.0</td>
            </tr>
            <tr>
              <td>{tableData[props.lang].gluten}</td>
              <td>9.0</td>
            </tr>

            <tr>
              <td>{tableData[props.lang].packaging}</td>
              <td>
                25, 50 <span>{tableData[props.lang].kg}</span>
              </td>
            </tr>
            <tr>
              <td>{tableData[props.lang].order}</td>
              <td>{tableData[props.lang].orderValue}</td>
            </tr>
          </tbody>
        </table>
      ),
      productInfo: {
        en: {
          label: <>Wheat bran</>,
          standard: <>Wheat bran in accordance with the State Technical Standard (DSTU) 3016-95.</>,
          origin: <>Country of origin: Ukraine</>,
        },
        de: {
          label: <>Weizenkleie</>,
          standard: <>Weizenkleie laut dem Staatlichen Technischen Standart der Ukraine (DSTU) 3016-95</>,
          origin: <>Herkunftsland: die Ukraine</>,
        },
        ru: {
          label: <>Пшеничные отруби</>,
          standard: <>Пшеничные отруби в соответствии с ДСТУ 3016-95</>,
          origin: <>Страна происхождения сырья: Украина</>,
        },
      },
    },
    {
      src: semolinaImg,
      alt: "semolina",
      table: (
        <table class="table table-bordered">
          <tbody>
            <tr>
              <td>{tableData[props.lang].color}</td>
              <td>{tableData[props.lang].colorSemolina}</td>
            </tr>
            <tr>
              <td>{tableData[props.lang].moisture}</td>
              <td>15.5</td>
            </tr>
            <tr>
              <td>{tableData[props.lang].moisture}</td>
              <td>0.6</td>
            </tr>

            <tr>
              <td>{tableData[props.lang].packaging}</td>
              <td>1<span>{tableData[props.lang].kg}</span> - 50 <span>{tableData[props.lang].kg}</span></td>
            </tr>
            <tr>
              <td>{tableData[props.lang].order}</td>
              <td>{tableData[props.lang].orderValue}</td>
            </tr>
          </tbody>
        </table>
      ),
      productInfo: {
        en: {
          label: <>Semolina</>,
          standard: <>Semolina in accordance with the International Technical Standard (GOST) 7022-97.</>,
          origin: <>Country of origin: Ukraine</>,
        },
        de: {
          label: <>Grieß</>,
          standard: <>Grießlaut dem Internationalen Technischen Standart (GOST) 7022-97</>,
          origin: <>Herkunftsland: die Ukraine</>,
        },
        ru: {
          label: <>Манная крупа</>,
          standard: <>Крупа манная в соответствии с ГОСТ 7022-97</>,
          origin: <>Страна происхождения сырья: Украина</>,
        },
      },
    },
  ];

  const products = [];

  productDetails.forEach((e) => {
    products.push(
      <a className="product" href={e.href}>
        <div className="product-img">
          <img src={e.src} alt={e.alt} />
        </div>
        <div className="product-content">
          <a
            className="product-cta"
            onClick={() => {
              setState({ productDisplay: true, productData: e });
            }}
          >
            {e.productInfo[props.lang].label}
          </a>
        </div>
      </a>
    );
  });

  return (
    <section className="production filled" id="our-production">
      <div className="container">
        <h2 className="section-title">{content[props.lang].productsTitle}</h2>
        <div className="products">{products}</div>
      </div>
      {state.productDisplay ? (
        <ProductInfo
          lang={props.lang}
          closeProduct={closeProduct}
          xCloseProduct={xCloseProduct}
          productData={state.productData}
          openForm={props.openForm}
        />
      ) : null}
    </section>
  );
}
