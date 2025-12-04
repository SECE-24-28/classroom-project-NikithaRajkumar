import React from "react";
import { FlexBoxStyle } from "./flex-box-style";
const FlexBox = () => {
  return (
    <FlexBoxStyle>
      {/* <h1 className="element">Sri eshwar</h1> */}
      <div className="parent">
        <div className="square__child"></div>
        <div className="square__child"></div>
        <div className="square__child"></div>
        <div className="square__child"></div>
      </div>
    </FlexBoxStyle>
  );
};
export default FlexBox;