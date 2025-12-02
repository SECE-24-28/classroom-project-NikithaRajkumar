import React from "react";
import { FormStyle } from "./formStyle";
const Form=()=>{
    return(
        <FormStyle>
        <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name"/>
            <br></br>
            <br></br>
            <label htmlFor="mobile">Mobile:</label>
            <input type="number" id="mobile"/>
        </form>
        </FormStyle>
    );

};
export default Form;