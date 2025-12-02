import React from "react";
import { HelloWorldStyle } from "./hello-world-style";

const HelloWorldComponent = () => {
  return (
    <HelloWorldStyle>
      <table className="element">
        <tr>
          <th>name</th>
          <th>class</th>
          <th>mobile number</th>
        </tr>
        <tr>
          <td>Nikitha</td>
          <td>cse</td>
          <td>9962548227</td>
        </tr>
        <tr>
          <td>nethra</td>
          <td>cse</td>
          <td>9994099567</td>
        </tr>
      </table>
    </HelloWorldStyle>
  );
};

export default HelloWorldComponent;
