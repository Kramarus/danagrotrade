import React from "react";

const content = {
  en: {
    companyTitle: (
      <>
        <span>Our</span> company
      </>
    ),
    aboutInfo: (
      <>
        <p>
          Dan Agro Trade LLC. is a Ukrainian trade company which supplies the
          European markets with the agricultural products from Ukraine.
        </p>
        <p>
          Dan Agro Trade LLC. is a part of a Ukrainian multiindustrial corporate
          group DAN LLC, which has been producing enegry equipment and heat
          generators for agricultural dryers for 28 years by now as well as is
          involved in the modernization and re-equipment of agricultural and
          farming facilities.
        </p>
      </>
    ),
  },
  de: {
    companyTitle: (
      <>
        <span>Unsere</span> Firma
      </>
    ),
    aboutInfo: (
      <>
        <p>
          Dan Agro Trade GmbH ist eine ukrainische Handelgesellschaft, die
          landwirtschaftliche Lebensmittel aus der Ukraine nach Europa liefert.
        </p>
        <p>
          Dan Agro Trade GmbH ist ein Mitglied der multiindustriellen
          Unternehmensgruppe DAN GmbH, die Energieanlagen und Wärmeerzeuger seit
          28 Jahren herstellt, sowie an der Modernisierung und Umrüstung
          landwirtschaftlicher Einrichtungen teilnimmt.
        </p>
      </>
    ),
  },
  it: {
    companyTitle: (
      <>
        <span>La nostra</span> azienda
      </>
    ),
    aboutInfo: (
      <>
        <p>
          Dan Agro Trade LLC. è una società commerciale ucraina che rifornisce i
          mercati europei di prodotti agricoli ucraini.
        </p>
        <p>
          Dan Agro Trade LLC. fa parte di un gruppo aziendale multiindustriale
          ucraino DAN LLC, che produce apparecchiature energetiche e generatori
          di calore per essiccatori agricoli da 28 anni ormai ed è coinvolto
          nella modernizzazione e riattrezzaggio di strutture agricole e
          agricole.
        </p>
      </>
    ),
  },
  pl: {
    companyTitle: (
      <>
        <span>Nasza</span> firma
      </>
    ),
    aboutInfo: (
      <>
        <p>
          Dan Agro Trade LLC. jest ukraińską firmą handlową, która zaopatruje
          produkty rolne z Ukrainy na rynki europejskie.
        </p>
        <p>
          Dan Agro Trade LLC. jest częścią ukraińskiej wielobranżowej grupy
          korporacyjnej DAN LLC, która już od 28 lat produkuje urządzenia
          energetyczne i generatory ciepła do suszarni rolniczych, a także
          zajmuje się modernizacją i wyposażeniem obiektów rolniczych.
        </p>
      </>
    ),
  },
  ua: {
    companyTitle: (
      <>
        <span>Наша</span> компанiя
      </>
    ),
    aboutInfo: (
      <>
        <p>
          ТОВ «Дан Агро Трейд» - українська компанія, яка займається експортом
          сільськогосподарської продукції на ринки Західної Європи.
        </p>
        <p>
          ТОВ «Дан Агро Трейд» входить до складу корпорації «Теплоенерго» -
          мультигалузевої групи компаній, що вже 28 років виробляє
          теплоенергетичне обладнання, теплогенератори для зерносушарок,
          займається модернізацією зерносушарних комплексів та переоснащенням
          аграрних об’єктів різного призначення.
        </p>
      </>
    ),
  },
  ru: {
    companyTitle: (
      <>
        <span>Наша</span> компания
      </>
    ),
    aboutInfo: (
      <>
        <p>
          ТОВ «Дан Агро Трейд» - украинская компания, которая занимается
          экспортом сельскохозяйственной продукции на рынки Западной Европы.
        </p>
        <p>
          ТОВ «Дан Агро Трейд» входит в состав корпорации «Теплоэнерго» -
          мультиотраслевой группы компаний, которая уже 28 лет производит
          теплоэнергетичное оборудование, теплогенераторы для зерносушилок,
          занимается модернизацией зерносушильных комплексов и переоборудованием
          аграрных объектов разного назначения.
        </p>
      </>
    ),
  },
};

function OurCompany(props) {
  return (
    <section className="company filled" id="about">
      <div className="container">
        <h2 className="section-title">{content[props.lang].companyTitle}</h2>
        {content[props.lang].aboutInfo}
      </div>
    </section>
  );
}

export default OurCompany;
