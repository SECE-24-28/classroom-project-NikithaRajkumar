import "./App.css";
import FlexBoxComponent from "./flex-box/flex-box-component";
import React from "react";
import { Routes, Route } from "react-router-dom";
import SymbolOfExcellenceComponent from "./Symbol_of_excellence/Symbol-of-excellence";
import FourOFourComponent from "./404-component/404-component";
import UseStateComponent from "./use-case-1st/use-state-component";

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/leetcode/:id" element={<SymbolOfExcellenceComponent />} />
        <Route path="*" element={<FourOFourComponent />} /> */}
        <Route path="/use-state-practice" element={<UseStateComponent />} />
      </Routes>
    </>
  );
}

export default App;
