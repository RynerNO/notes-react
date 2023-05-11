import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App/App";
import SearchProvider from "./components/Providers/SearchProvider/SearchProvider";
import NotesProvider from "./components/Providers/NotesProvider/NotesProvider";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NotesProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </NotesProvider>
  </React.StrictMode>
);
