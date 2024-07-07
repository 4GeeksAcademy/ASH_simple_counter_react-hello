//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let num6 = 0, num5 = 0, num4 = 0, num3 = 0, num2 = 0, num1 = 0;

setInterval(function() {
    num6 >= 9 ? (num6 = 0, num5 >= 9 ? (num5 = 0, num4 >= 9 ? (num4 = 0, num3 >= 9 ? (num3 = 0, num2 >= 9 ? (num2 = 0, num1 >= 9 ? num1 = 0 : num1++) : num2++) : num3++) : num4++) : num5++) : num6++;
    // if (num6 >=9) {
    //     num6 = 0;
    // if (num5 >=9) {
    //     num5 = 0;
    // if (num4 >=9) {
    //     num4 = 0;
    // if (num3 >=9) {
    //     num3 = 0;
    // if (num2 >=9) {
    //     num2 = 0;
    // if (num1 >=9) {
    //     num1 = 0;
    // } else {
    //     num1++;
    // }
    // } else {
    //     num2++;
    // }
    // } else {
    //     num3++;
    //     }
    // } else {
    //     num4++;
    // }
    // } else {
    //     num5++;
    // }
    // } else {
    //     num6++;
    // };

//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<Home digito6={num6} digito5={num5} digito4={num4} digito3={num3} digito2={num2} digito1={num1}/>);
}, 1000)



