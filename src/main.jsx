import { StrictMode } from "preact/compat";
import { createRoot } from "preact/compat/client";
import App from "./app/App";
import "./styles/global.css";

const SITE_IN_MAINTENANCE = false;

function MaintenanceScreen() {
  return (
    <main className='maintenance-page'>
      <div className='maintenance-card'>
        <p className='maintenance-tag'>Portfolio update in progress</p>
        <h1>Site under maintenance</h1>
        <p>
          I am improving this portfolio right now. Please check back soon for
          the full experience.
        </p>
      </div>
    </main>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {SITE_IN_MAINTENANCE ? <MaintenanceScreen /> : <App />}
  </StrictMode>,
);
