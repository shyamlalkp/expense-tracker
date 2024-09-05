import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalProvider } from "./context/GlobalState";

// ReactDOM.render(
//   <React.StrictMode>
//     <GlobalProvider>
//       <App />
//     </GlobalProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { createRoot } from "react-dom/client";
// import App from "./App";

// const root = createRoot(document.getElementById("root"));
// root.render(<App />);
