import Toolbar from "../../components/Layout/Toolbar/Toolbar";
import Sidebar from "../../components/Layout/Sidebar/Sidebar";
import styles from "./App.module.css";
import React, { useState, useEffect, useContext } from "react";
import { fetchData, FIELDS } from "../../quintadb";
import NotesContext from "../../context/NotesContext";
//import SearchContext from "../../context/SearchContext";
const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Оборачиваем асинхронный вызов в IIFE (Immediately Invoked Function Expression)
    (async () => {
      const response = await fetchData();
      if (response) {
        setData(response);
      }
    })();
  }, []);
  const Notes = useContext(NotesContext);
  //const Search = useContext(SearchContext)
  return (
    <div className={styles.app}>
      <NotesContext.Provider value={data}>
        <Toolbar />
        <Sidebar />
      </NotesContext.Provider>
    </div>
  );
};

export default App;
