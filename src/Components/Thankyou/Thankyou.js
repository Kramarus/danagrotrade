import React from "react";

export default function Thankyou(props) {
  const content = {
    en: {
      thankyou: <>Thank you!</>,
      text: (
        <>
          We have received your request and will answer you within several hours
        </>
      ),
      backButton: <>Back</>,
    },
    de: {
      thankyou: <>Danke!</>,
      text: (
        <>
          We have receiver your request and will answer you within several hours
        </>
      ),
      backButton: <>Zurück</>,
    },
    ua: {
      thankyou: <>Дякуємо!</>,
      text: (
        <>
          We have receiver your request and will answer you within several hours
        </>
      ),
      backButton: <>Назад</>,
    },
    ru: {
      thankyou: <>Спасибо</>,
      text: (
        <>
          We have receiver your request and will answer you within several hours
        </>
      ),
      backButton: <>Назад</>,
    },
  };

  return (
    <div className="background-image">
      <div
        className="modalOverlay"
        id="modalOverlayThank"
        onClick={props.closeOutside}
      >
        <div className="container modalThankyou" id="modalThank">
          <div className="modal-header">
            <div className="">
              <h2>{content[props.lang].thankyou}</h2>
            </div>
          </div>
          <div className="modal-body">
            <p>{content[props.lang].text}</p>
            <center>
              <button className="cta" onClick={props.close}>
                <center>{content[props.lang].backButton}</center>
              </button>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}
