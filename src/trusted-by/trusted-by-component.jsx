import React from "react";
import { TrustedByStyle } from "./trusted-by-style";
//import { faBuildingColumns } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TrustedbyComponent = ({title,items}) => {
  return (
    <TrustedByStyle>
      <h1>{title}</h1>
      <div className="parent">
        {items.map((item,index)=>(
          <div className="child" key={index}>
            <span className="numbers">{item.number}</span>
            <br/>
            <span className="details">{item.label}</span>
            </div>


        ))}
        </div>
        </TrustedByStyle>
  );
};
export default TrustedbyComponent;
