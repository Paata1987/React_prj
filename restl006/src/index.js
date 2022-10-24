import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import FruitList from './Component/fruitList';
import Timer from './Component/Timer';
import "bootstrap/dist/css/bootstrap.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Timer me="Props"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
//<FruitList fruits={["Mango", "Banan", "Lime"]} />
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
