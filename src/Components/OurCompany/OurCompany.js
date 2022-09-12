import React from "react";
import contentCompany from "../../content/contentCompany";

function OurCompany(props) {
  return (
    <div className="company filled component" id="about">
      <div className="company-info">{contentCompany[props.lang].aboutInfo}</div>
    </div>
  );
}

export default OurCompany;
