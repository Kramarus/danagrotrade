import React from "react";
import contentCompany from "../../content/contentCompany";


function OurCompany(props) {
  return (
    <div className="company filled component" id="about">
        {contentCompany[props.lang].aboutInfo}
    </div>
  );
}

export default OurCompany;
