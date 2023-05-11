import Toolbar from "../../components/Layout/Toolbar/Toolbar";
import Sidebar from "../../components/Layout/Sidebar/Sidebar";
import styles from "./App.module.css";
import React, { useEffect, useContext } from "react";
import { fetchData } from "../../quintadb";
import NotesContext from "../../context/NotesContext";
import Workspace from "../../components/Layout/Workspace/Workspace";
//import SearchContext from "../../context/SearchContext";
const App = () => {
  const { data, editor, updateValue } = useContext(NotesContext);
  useEffect(() => {
    console.log("Изменение контекста");
    // Оборачиваем асинхронный вызов в IIFE (Immediately Invoked Function Expression)
    (async () => {
      const response = await fetchData();
      if (response) {
        updateValue({
          data: { changed: false, items: response },
          selectedNote: 0,
        });
      }
    })();
  }, []);
  useEffect(() => {
    console.log("Изменение контекста");
  }, [data.changed, editor]);
  //const Search = useContext(SearchContext)
  return (
    <div className={styles.app}>
      <Toolbar />
      <Sidebar />
      <Workspace />
    </div>
  );
};

export default App;
