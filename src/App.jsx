import "./App.css";
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
    {/* <HelloWorldComponent/>
    <Form/>
    <LoginForm/> 
    <ImpactAtGlance/> */}
    {/* <PromiseComponent/> */}
    <TrustedByStyle
    titleColor="#333"
    numberColor="#333"
    detailColor="#555"
    cardBg="#f8f8f8"
    shadow="0 4px 10px rgba(0,0,0,0.2)"
    gap="40px"
    cardWidth="250px"
    cardHeight="220px"
    >
    <TrustedbyComponent 
    title="Trusted By"
    items={[
      {number:"100+",label:"Colleges"},
      {number:"150",label:"Professional trainers"},
      {number:"1000+",label:"Study Materials"},
      {number:"10000+",label:"Students"},
    ]}
    />
    </TrustedByStyle>

    </>
  );
}

export default App;