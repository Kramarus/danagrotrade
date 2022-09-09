import React from "react";
import contentThank from "../../content/contentThank";

export default function Thankyou(props) {
  return (
    <div className="background-image component">
      <div
        className="modalOverlay"
        id="modalOverlayThank"
        onClick={props.closeOutside}
      >
        <div className="container modalThankyou" id="modalThank">
          <div className="modal-header">
            <div className="">
              <h3>{contentThank[props.lang].thankyou}</h3>
            </div>
          </div>
          <div className="modal-body">
            <p>{contentThank[props.lang].text}</p>
            <center>
              <button className="cta" onClick={props.close}>
                <center>{contentThank[props.lang].backButton}</center>
              </button>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}
