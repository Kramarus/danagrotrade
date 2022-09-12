import React from "react";

import ProductInfo from "../ProductInfo/ProductInfo";
import { useState } from "react";

import flourImg from "./img/flour.jpg";
import branImg from "./img/bran.jpg";
import semolinaImg from "./img/semolina.jpg";
import oilImg from "./img/oil.jpg";
import drymilkImg from "./img/drymilk.jpg";

import tableData from "../../content/tableData";



export default function Products(props) {

  const productDetails = [
    // Wheat flour
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
          standard: (
            <>
              Wheat flour in accordance with the International Technical
              Standard (GOST) 46.004-99.
            </>
          ),
          origin: <>Country of origin: Ukraine</>,
        },
        de: {
          label: <>Weizenmehl</>,
          standard: (
            <>
              Weizenmehl laut dem Internationalen Technischen Standart (GOST)
              46.004-99
            </>
          ),
          origin: <>Herkunftsland: die Ukraine</>,
        },
        ua: {
          label: <>Пшеничне борошно</>,
          standard: <>Борошно пшеничне відповідно до ГОСТ 46.004-99</>,
          origin: <>Країна походження сировини: Україна</>,
        },
        ru: {
          label: <>Пшеничная мука</>,
          standard: <>Пшеничная мука в соответствии с ГОСТ 46.004-99</>,
          origin: <>Страна происхождения сырья: Украина</>,
        },
      },
    },
    // Sunflower oil
    {
      src: oilImg,
      alt: "sunflower oil",
      table: (
        <table class="table table-bordered">
          <tbody>
            <tr>
              <td>{tableData[props.lang].sort}</td>
              <td>{tableData[props.lang].sortValue}</td>
            </tr>
            <tr>
              <td>{tableData[props.lang].clarity}</td>
              <td>{tableData[props.lang].clarityValue}</td>
            </tr>
            <tr>
              <td>{tableData[props.lang].flavor}</td>
              <td>{tableData[props.lang].flavorValue}</td>
            </tr>
            <tr>
              <td>{tableData[props.lang].colorValue}</td>
              <td>2</td>
            </tr>
            <tr>
              <td>{tableData[props.lang].acid}</td>
              <td>0,10</td>
            </tr>
            <tr>
              <td>{tableData[props.lang].phosphorus}</td>
              <td>{tableData[props.lang].none}</td>
            </tr>
            <tr>
              <td>{tableData[props.lang].mixtures}</td>
              <td>{tableData[props.lang].none}</td>
            </tr>
            <tr>
              <td>{tableData[props.lang].moistureVolatile}</td>
              <td>0,10</td>
            </tr>
            <tr>
              <td>{tableData[props.lang].peroxide}</td>
              <td>0,58</td>
            </tr>
            <tr>
              <td>{tableData[props.lang].shelfLife}</td>
              <td>24 {tableData[props.lang].months}</td>
            </tr>
            <tr>
              <td>{tableData[props.lang].purpose}</td>
              <td>{tableData[props.lang].purposeValue}</td>
            </tr>
            <tr>
              <td>{tableData[props.lang].energy}</td>
              <td>{tableData[props.lang].energyValue}</td>
            </tr>
            <tr>
              <td>{tableData[props.lang].nutritional}</td>
              <td>{tableData[props.lang].nutritionalValue}</td>
            </tr>
            <tr>
              <td>{tableData[props.lang].netWeight}</td>
              <td>{tableData[props.lang].netWeightValue}</td>
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
          label: <>Sunflower oil</>,
          standard: (
            <>
              Sunflower seed oil in accordance with the State Technical Standard
              of Ukraine (DSTU) 4492-2017 .
            </>
          ),
          origin: <>Country of origin: Ukraine</>,
          preserve: (
            <>Store in a dark room at the temperature of 8°C to 25°C.</>
          ),
          toxic: (
            <>
              Residual content of toxic elements, pesticides, aflatoxins do not
              exceed standard microbiological requirements.
            </>
          ),
          gmo: <>Without GMO</>,
        },
        de: {
          label: <>Sonnenblumenöl</>,
          standard: (
            <>
              Sonnenblumenöl laut dem Staatlichen Technischen Standart der
              Ukraine (DSTU) 4492-2017
            </>
          ),
          origin: <>Herkunftsland: die Ukraine.</>,
          preserve: (
            <>
              In einem dunklen Raum bei einer Temperatur von 8°С bis 25°С
              lagern.
            </>
          ),
          toxic: (
            <>
              Der Restgehalt an toxischen Elementen, Pestiziden, Aflatoxinen
              überschreitet nicht die mikrobiologischen Standardanforderungen.
            </>
          ),
          gmo: <>Ohne GVO</>,
        },
        ua: {
          label: <>Соняшникова олія</>,
          standard: <>Соняшникова олія відповідно до ДСТУ 4492-2017</>,
          origin: <>Країна походження сировини: Україна</>,
          preserve: (
            <>Зберігати в темному приміщенні при температурі від 8°C до 25°C.</>
          ),
          toxic: (
            <>
              Залишковий вміст токсичних елементів, пестицидів, афлатоксинів не
              перевищує норм МБТ.
            </>
          ),
          gmo: <>Без ГМО</>,
        },
        ru: {
          label: <>Подсолнечное масло</>,
          standard: <>Подсолнечное масло в соответствии с ДСТУ 4492-2017</>,
          origin: <>Страна происхождения сырья: Украина</>,
          preserve: <>Хранить в темном месте при температуре от 8°C до 25°C.</>,
          toxic: (
            <>
              Остаточное содержание точкисных элементов, пестицидов,
              афлатоксинов не превышает норм МБТ.
            </>
          ),
          gmo: <>Без ГМО</>,
        },
      },
    },
    //Wheat bran
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
          standard: (
            <>
              Wheat bran in accordance with the State Technical Standard of
              Ukraine (DSTU) 3016-95.
            </>
          ),
          origin: <>Country of origin: Ukraine</>,
        },
        de: {
          label: <>Weizenkleie</>,
          standard: (
            <>
              Weizenkleie laut dem Staatlichen Technischen Standart der Ukraine
              (DSTU) 3016-95
            </>
          ),
          origin: <>Herkunftsland: die Ukraine</>,
        },
        ua: {
          label: <>Пшеничні висівки</>,
          standard: <>Пшеничні висівки відповідно до ДСТУ 3016-95.</>,
          origin: <>Країна походження сировини: Україна</>,
        },
        ru: {
          label: <>Пшеничные отруби</>,
          standard: <>Пшеничные отруби в соответствии с ДСТУ 3016-95</>,
          origin: <>Страна происхождения сырья: Украина</>,
        },
      },
    },
    //Semolina
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
              <td>
                1 <span>{tableData[props.lang].kg}</span> - 50{" "}
                <span>{tableData[props.lang].kg}</span>
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
          label: <>Semolina</>,
          standard: (
            <>
              Semolina in accordance with the International Technical Standard
              (GOST) 7022-97.
            </>
          ),
          origin: <>Country of origin: Ukraine</>,
        },
        de: {
          label: <>Grieß</>,
          standard: (
            <>
              Grießlaut dem Internationalen Technischen Standart (GOST) 7022-97
            </>
          ),
          origin: <>Herkunftsland: die Ukraine</>,
        },
        ua: {
          label: <>Манна крупа</>,
          standard: <>Крупа манна відповідно до ГОСТ 7022-97</>,
          origin: <>Країна походження сировини: Україна</>,
        },
        ru: {
          label: <>Манная крупа</>,
          standard: <>Крупа манная в соответствии с ГОСТ 7022-97</>,
          origin: <>Страна происхождения сырья: Украина</>,
        },
      },
    },
    // Dry milk
    {
      src: drymilkImg,
      alt: "dry milk",
      table: (
        <table class="table table-bordered">
          <tbody>
            <tr>
              <td>{tableData[props.lang].order}</td>
              <td>{tableData[props.lang].orderValue}</td>
            </tr>
          </tbody>
        </table>
      ),
      productInfo: {
        en: {
          label: <>Powdered milk</>,
          standard: (
            <>
              Powdered milk in accordance with the State Technical Standard of
              Ukraine (DSTU) 4556-2006.
            </>
          ),
          origin: <>Country of origin: Ukraine</>,
        },
        de: {
          label: <>Milchpulver</>,
          standard: (
            <>
              Milchpulver dem Staatlichen Technischen Standart der Ukraine
              (DSTU) 4556-2006
            </>
          ),
          origin: <>Herkunftsland: die Ukraine</>,
        },
        ua: {
          label: <>Сухе молоко</>,
          standard: <>Сухе молоко відповідно до ДСТУ 4556-2006</>,
          origin: <>Країна походження сировини: Україна</>,
        },
        ru: {
          label: <>Сухое молоко</>,
          standard: <>Сухое молоко в соответствии с ДСТУ 4556-2006</>,
          origin: <>Страна происхождения сырья: Украина</>,
        },
      },
    },
  ];
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

 
  /////


  const products = [];

  productDetails.forEach((e) => {
    products.push(
      <a className="product" href={e.href}>
        <div
          className="product-img"
          onClick={() => {
            setState({ productDisplay: true, productData: e });
          }}
        >
          <img src={e.src} alt={e.alt} />
        </div>
        <div className="product-content">
          <button
            className="product-cta"
            onClick={() => {
              setState({ productDisplay: true, productData: e });
            }}
          >
            {e.productInfo[props.lang].label}
          </button>
        </div>
      </a>
    );
  });

  return (
    <div className="component" id="our-production">
      <div className="products">{products}</div>
      {state.productDisplay ? (
        <ProductInfo
          lang={props.lang}
          closeProduct={closeProduct}
          xCloseProduct={xCloseProduct}
          productData={state.productData}
          openForm={props.openForm}
        />
      ) : null}
    </div>
  );
}
