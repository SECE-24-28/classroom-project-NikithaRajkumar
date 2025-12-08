import React,{useState}from "react"
const UseStateComponent=()=>{
//let count=0;
const [count,setCount]=useState(0);
let sum=0;
const fun1=(count)=>{
    sum=sum+count;
    console.log("Hello",sum);
};
return(
    <div>
        <h1>count</h1>
        <h2>Count:{count}</h2> 
        <button onClick={()=>fun1(1000)}>increase</button>
    </div>
)
}
export default UseStateComponent;