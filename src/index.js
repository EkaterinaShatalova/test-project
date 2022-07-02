import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);

// const a = React.createElement('button', {disabled: false},  onclick = () => {
//   console.log('button')});
// const root1 = ReactDOM.createRoot(document.getElementById("root1"));
// root.render(a);

// const b = React.createElement('button', {disabled: false}, 'button', onclick = () => {
//   console.log('button pressed');
// });
// const root2 = ReactDOM.createRoot(document.getElementById("root2"));
// root2.render(b);


// ReactDOM.render(<App/>, document.getElementById('root'));
