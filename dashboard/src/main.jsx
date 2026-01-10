import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import { AuthProvider } from "./components/auth/AuthContext.jsx";
import { GeneralContextProvider } from "./components/GeneralContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <GeneralContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GeneralContextProvider>
  </AuthProvider>
);
