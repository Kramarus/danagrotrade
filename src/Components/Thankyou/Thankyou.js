import React from "react";

export default function Thankyou(props) {
  const content = {
    en: {
      thankyou: <>Your request was successfully sent</>,
      text: (
        <>
          Thank you for contacting us! We have received your message
          and our representatives will contact you as soon as possible.
        </>
      ),
      backButton: <>Back</>,
    },
    de: {
      thankyou: <>Ihre Anfrage war erfolgreich geschickt</>,
      text: (
        <>
          Danke dafür, dass Sie uns kontaktiert haben! Wir haben Ihre Nachricht bekommen und unsere Verträter werden Ihnen so früh wie möglich antworten.
        </>
      ),
      backButton: <>Zurück</>,
    },
    ua: {
      thankyou: <>Ваш запит було успішно надіслано</>,
      text: (
        <>
          Дякуємо Вам за те, що Ви нам написали! Ми отримали Ваше повідомлення і наші представники незабаром Вам нададуть відповідь.
        </>
      ),
      backButton: <>Назад</>,
    },
    ru: {
      thankyou: <>Ваш запрос был успешно отправлен</>,
      text: (
        <>
          Спасибо Вам за то, что Вы нам написали! Мы получили Ваше сообщение и наши представители скоро Вам ответят.
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
              <h3>{content[props.lang].thankyou}</h3>
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
