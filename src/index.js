import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import state, { store, subscribe } from "./redux/state";
import App from "./App";
import { addPost, updatePost } from "./redux/state";

// let renderPage = (state) => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App state={state} addPost={addPost} updateTextArea={updatePost} />
//     </React.StrictMode>,
//     document.getElementById("root")
//   );
// };


let renderPage = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App store = {store} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};



renderPage(state);
store.subscribe(renderPage);
// subscribe(renderPage);