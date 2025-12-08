import "./App.css";
import FlexBoxComponent from "./flex-box/flex-box-component";
import { TrustedByStyle } from "./trusted-by/trusted-by-style";
// import HelloWorldComponent from "./hello-world/hello-world-component";
// import Form from "./hello-world/form";
// import LoginForm from "./hello-world/login-form";
// import ImpactAtGlance from "./impact-at-glance/impact-at-glance-component";
// import PromiseComponent from "./promise/promise-component";
import { Routes } from "react-router-dom";
function App() {
  return (
    <>
    <Routes>
      <Route path="/eshwar" element={<TrustedByStyle/>}/>
      <Route path="/flex-box" element={<FlexBoxComponent/>}/>
      <Route path="/flex-wrap" element={<FlexWrapComponent/>}/>
      <Route path="/getintouch" element={<GetInTouchComponent/>}/>
      <Route path="/impactatglance" element={<ImpactAtGlance/>}/>
    </Routes>
    </>
  );
}

export default App;