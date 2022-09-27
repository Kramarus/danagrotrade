import React from "react";

import content from "../../content/content";
export default function ProductInfo(props) {

  const handleClick = () => {
    props.xCloseProduct(); 
    props.openForm();
  }

  return (
    <div
      className="modalOverlay component background-image"
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
              <p>{props.productData.productInfo[props.lang].preserve}</p>
              <p>{props.productData.productInfo[props.lang].toxic}</p>
              <p>{props.productData.productInfo[props.lang].gmo}</p>
            </div>
          </div>
          <div className="modal-table"><div>{props.productData.table}</div></div>
        </div>
        <div className="modal-footer">
          <a className="cta cta-primary" onClick={handleClick}><h4>{content[props.lang].ctaPrimary}</h4></a>
        </div>
      </div>
    </div>
  );
}
