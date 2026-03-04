import { StrictMode } from "preact/compat";
import { createRoot } from "preact/compat/client";
import App from "./app/App";
import "./styles/global.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
