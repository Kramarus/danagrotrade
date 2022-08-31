import React from "react";

const content = {
  en: {
    flour: {
      productTitle: "Wheat flour",
    },
    bran: {
      productTitle: "Wheat bran",
    },
    semolina: {
      productTitle: "Semolina",
    },
  },
};

export default function ProductInfo(props) {

  const handleClick = () => {
    props.xCloseProduct(); 
    props.openForm();
  }

  return (
    <div
      className="modalOverlay"
      id="modalOverlay"
      onClick={props.closeProduct}
    >
      <div className="container modalProductInfo" id="modalProductInfo">
        <div className="modal-header">
          <div className="">
            <h2>{props.productData.productInfo[props.lang].label}</h2>
          </div>
          <div className="x-btn" onClick={props.xCloseProduct}>
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
        <div className="modal-body">
          <div className="short-info">
            <div className="product-img">
              <img src={props.productData.src} />
            </div>
            <div className="product-desc">
              <p>{props.productData.productInfo[props.lang].standard}</p>
              <p>{props.productData.productInfo[props.lang].origin}</p>
            </div>
          </div>
          <div className="modal-table">{props.productData.table}</div>
        </div>
        <div className="modal-footer">
          <a className="cta cta-primary" onClick={handleClick}>Order</a>
        </div>
      </div>
    </div>
  );
}
