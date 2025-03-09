import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Ensure you're using the correct import
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Use createRoot correctly
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
