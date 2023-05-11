import Toolbar from "../../components/Layout/Toolbar/Toolbar";
import Sidebar from "../../components/Layout/Sidebar/Sidebar";
import styles from "./App.module.css";
import React, { useEffect, useContext, useCallback } from "react";
import { FIELDS, fetchData } from "../../quintadb";
import NotesContext from "../../context/NotesContext";
import Workspace from "../../components/Layout/Workspace/Workspace";
import { debounce } from "lodash";
import { updateEntry, deleteEntry } from "../../quintadb";
//import SearchContext from "../../context/SearchContext";
const App = () => {
  const { data, selectedNote, deletedNote, updateValue } =
    useContext(NotesContext);
  useEffect(() => {
    console.log("Изменение контекста");
    // Оборачиваем асинхронный вызов в IIFE (Immediately Invoked Function Expression)
    (async () => {
      const response = await fetchData();
      if (response) {
        updateValue({
          data: { changed: false, items: response, changedNotes: [] },
          selectedNote: 0,
          deletedNote: null,
        });
      }
    })();
  }, []);
  const saveToDB = (data) => {
    for (let i = 0; i < data.changedNotes.length; i++) {
      console.log(data.changedNotes[i]);
      updateEntry(
        data.items[data.changedNotes[i]].id,
        data.items[data.changedNotes[i]].values[FIELDS.title],
        data.items[data.changedNotes[i]].values[FIELDS.text]
      );
    }
    data.changedNotes = [];
    updateValue(data);
  };
  const debouncedSave = useCallback(debounce(saveToDB, 5000), []);
  useEffect(() => {
    if (!data.items[selectedNote]) return;

    debouncedSave(data);
  }, [data.changed]);

  useEffect(() => {
    console.log("Delete");
    if (!deletedNote || !deletedNote[0].id) return;
    deleteEntry(deletedNote[0].id);
    updateValue({ deletedNote: null });
  }, [deletedNote]);
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
