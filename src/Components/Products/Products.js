import React from "react";

import ProductInfo from "../ProductInfo/ProductInfo";
import { useState } from "react";

import flourImg from "./img/flour.jpg";
import branImg from "./img/bran.jpg";
import semolinaImg from "./img/semolina.jpg";
import oilImg from "./img/oil.jpg";
import drymilkImg from "./img/drymilk.jpg";

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
  ua: {
    productsTitle: (
      <>
        <span>Наші</span> продукти
      </>
    ),
    flourLabel: <>Пшеничне борошно</>,
    branLabel: <>Пшеничні висівки</>,
    semolinaLabel: <>Манна крупа</>,
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
      sort: <>Sort</>,
      sortValue: <>Refined deodorized winterized sunflower seed oil mark "P"</>,
      clarity: <>Clarity</>,
      clarityValue: <>Transparent, without sediment</>,
      flavor: <>Flavor</>,
      flavorValue: <>impersonal to taste and smell</>,
      colorValue: <>Color value, mg iodine</>,
      acid: <>Acid number, mg KOH/g</>,
      none: <>none</>,
      phosphorus: (
        <>
          Phosphorus-containing substances recalculated as per
          stearoleolecitiny, %
        </>
      ),
      mixtures: <>Non-oil admixtures, %</>,
      moistureVolatile: <>Moisture and volatile substances, %</>,
      peroxide: <>Peroxide number, 1/2 O mmol/kg</>,
      shelfLife: <>Shelf life starting from manufacturing date</>,
      months: <>months</>,
      purpose: <>Product purpose</>,
      purposeValue: <>for food</>,
      energy: <>Energy value (calorie content) in 100g of the product</>,
      energyValue: <>899 kcal (3761 kJ)</>,
      nutritional: <>Nutritional value (food) in 100g of the product:</>,
      nutritionalValue: <>Fat - 99,9 g.</>,
      netWeight: <>Net weight of 1 liter</>,
      netWeightValue: <>0,92 kg</>,
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
      sort: <>Sorte</>,
      sortValue: (
        <>Raffiniertes, desodoriertes, winterfestes Sonnenblumenöl Marke „P“</>
      ),
      clarity: <>Klarheit</>,
      clarityValue: <>Transparent, ohne Sediment</>,
      flavor: <>Geschmack</>,
      flavorValue: <>Unpersönlich zu schmecken und zu riechen</>,
      colorValue: <>Farbwert, mg Jod</>,
      acid: <>Säurezahl, mg KOH/g</>,
      none: <>keine</>,
      phosphorus: (
        <>Phosphorhaltige Substanzen umgerechnet nach Stearolecitiny, %</>
      ),
      mixtures: <>Nicht-Öl-Beimischungen</>,
      moistureVolatile: <>Feuchtigkeit und flüchtige Stoffe, %</>,
      peroxide: <>Peroxidzahl, 1/2 P mmol/kg</>,
      shelfLife: <>Haltbarkeit</>,
      months: <>Monate</>,
      purpose: <>Produktzweck</>,
      purposeValue: <>für Lebensmittel</>,
      energy: <>Energiewert (Kaloriengehalt) von 100 g des Produkts</>,
      energyValue: <>899 kcal (3761 kJ)</>,
      nutritional: <>Nährwert (Lebensmittel) von 100 g des Produkts</>,
      nutritionalValue: <>Fett - 99,9 g.</>,
      netWeight: <>Nettogewicht von 1 Liter</>,
      netWeightValue: <>0,92 kg</>,
    },
    ua: {
      grade: <>Сорт</>,
      highest: <>вищий</>,
      first: <>перший</>,
      color: <>Колір</>,
      colorFlour: <>Білий або білий із жовтим відтінком</>,
      colorBran: <>Червоно-жовтий із сируватим відтінком</>,
      colorSemolina: <>Білий або з кремовим відтінком</>,
      moisture: <>Вологість, %, не більше</>,
      ash: <>Зольність у перерахунку на суху речовину, %, не менше</>,
      gluten: <>Клейковина сира, %, не менше</>,
      falling: <>Число падіння, %, не менше</>,
      protein: <>Білок у перерахунку на суху речовину, %</>,
      packaging: <>Фасування</>,
      order: <>Мінімальне замовлення</>,
      orderValue: <>від 20 тонн</>,
      kg: <>кг</>,
      sort: <>Сорт</>,
      sortValue: (
        <>
          Рафинированное дезодорированное вымороженное подсолнечное масло марки
          "П"
        </>
      ),
      clarity: <>Прозорість</>,
      clarityValue: <>прозорий продукт, без осаду</>,
      flavor: <>Запах та смак</>,
      flavorValue: <>без смаку та запаху</>,
      colorValue: <>Світлота, мг йоду</>,
      acid: <>Кислотне число, мг KOH/г</>,
      none: <>ні</>,
      phosphorus: (
        <>
          Масова частка фосфоровмісних речовин в перерахунку на
          стеароолеолецитин, %
        </>
      ),
      mixtures: <>Масова частка нежирових домішок</>,
      moistureVolatile: <>Масова частка вологи та летких речовин</>,
      peroxide: <>Перекисне число 1/2 О ммоль/кг</>,
      shelfLife: <>Термін придатності починаючи з дати виробництва</>,
      months: <>місяці</>,
      purpose: <>Призначення продукту</>,
      purposeValue: <>для їжі</>,
      energy: <>Енергетична цінність (калорійність) у 100г продукту</>,
      energyValue: <>899 ккал (3761 кДж)</>,
      nutritional: <>Харчова цінність у 100г продукту</>,
      nutritionalValue: <>Жири – 99,9 р.</>,
      netWeight: <>Маса нетто 1 л.</>,
      netWeightValue: <>0,92 кг</>,
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
      sort: <>Сорт</>,
      sortValue: (
        <>
          Рафинированное дезодорированное вымороженное подсолнечное масло марки
          "П"
        </>
      ),
      clarity: <>Прозрачность</>,
      clarityValue: <>прозрачный продукт, без осадка</>,
      flavor: <>Привкус</>,
      flavorValue: <>без вкуса и запаха</>,
      colorValue: <>Светлота, мг йода</>,
      acid: <>Кислотное число, мг KOH/г</>,
      none: <>нет</>,
      phosphorus: (
        <>
          Массовая доля фосфоросодержащих веществ в перерасчёте на
          стеароолеолецитин, %
        </>
      ),
      mixtures: <>Массовая доля нежировых примесей</>,
      moistureVolatile: <>Массовая доля воды и летучих веществ</>,
      peroxide: <>Перекисное число 1/2 О ммоль/кг</>,
      shelfLife: <>Срок годности начиная с даты производства</>,
      months: <>месяца</>,
      purpose: <>Назначение продукта</>,
      purposeValue: <>для еды</>,
      energy: <>Энергетическая ценность (калорийность) в 100г продукта</>,
      energyValue: <>899 ккал (3761 кДж)</>,
      nutritional: <>Пищевая ценность в 100 г. продукта</>,
      nutritionalValue: <>Жиры - 99,9 г.</>,
      netWeight: <>Масса нетто 1 л.</>,
      netWeightValue: <>0,92 кг</>,
    },
  };
  /////
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
              Sunflower seed oil in accordance with the International Technical
              Standard (GOST) 7022-97.
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
              Sonnenblumenöl laut dem Internationalen Technischen Standart
              (GOST) 7022-97
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
          standard: <>Соняшникова олія відповідно до ГОСТ 7022-97</>,
          origin: <>Країна походження сировини: Україна</>,
          preserve: (
            <>Зберігати в темному приміщенні при температурі від 8°C до 25°C.</>
          ),
          toxic: (
            <>
              Залишковий вміст токсичних елементів, пестицидів, афлатоксинів не перевищує норм МБТ.
            </>
          ),
          gmo: <>Без ГМО</>,
        },
        ru: {
          label: <>Подсолнечное масло</>,
          standard: <>Подсолнечное масло в соответствии с ГОСТ 7022-97</>,
          origin: <>Страна происхождения сырья: Украина</>,
          preserve: (
            <>Хранить в темном месте при температуре от 8°C до 25°C.</>
          ),
          toxic: (
            <>
              Остаточное содержание точкисных элементов, пестицидов, афлатоксинов не превышает норм МБТ.
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
              Wheat bran in accordance with the State Technical Standard (DSTU)
              3016-95.
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
              Powdered milk in accordance with the International Technical
              Standard (GOST) 7022-97.
            </>
          ),
          origin: <>Country of origin: Ukraine</>,
        },
        de: {
          label: <>Milchpulver</>,
          standard: (
            <>
              Milchpulver dem Internationalen Technischen Standart (GOST)
              7022-97
            </>
          ),
          origin: <>Herkunftsland: die Ukraine</>,
        },
        ua: {
          label: <>Сухе молоко</>,
          standard: <>Сухе молоко відповідно до ГОСТ 7022-97</>,
          origin: <>Країна походження сировини: Україна</>,
        },
        ru: {
          label: <>Сухое молоко</>,
          standard: <>Сухое молоко в соответствии с ГОСТ 7022-97</>,
          origin: <>Страна происхождения сырья: Украина</>,
        },
      },
    },
  ];

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
          content={props.content}
        />
      ) : null}
    </section>
  );
}
