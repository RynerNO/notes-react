import Toolbar from "../../components/Layout/Toolbar/Toolbar";
import Sidebar from "../../components/Layout/Sidebar/Sidebar";
import styles from "./App.module.css";
import React, { useEffect, useContext, useCallback } from "react";
import { FIELDS, fetchData } from "../../quintadb";
import NotesContext from "../../context/NotesContext";
import Workspace from "../../components/Layout/Workspace/Workspace";
import { debounce } from "lodash";
import { updateEntry, deleteEntry, createEntry } from "../../quintadb";
import SearchContext from "../../context/SearchContext";
const App = () => {
  const { data, selectedNote, editor, newNote, deletedNote, updateValue } =
    useContext(NotesContext);
  // Sotring by date
  const sort = () => {
    data.items.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    updateValue(data);
  };
  useEffect(() => {
    console.log("Sort");
    sort();
  }, [data.items]);
  useEffect(() => {
    // Оборачиваем асинхронный вызов в IIFE (Immediately Invoked Function Expression)
    (async () => {
      let response = await fetchData();
      if (response) {
        updateValue({
          data: { changed: false, items: response, changedNotes: [] },
          selectedNote: 0,
          filteredItems: response,
          deletedNote: null,
        });
      }
    })();
  }, []);

  const saveToDB = (data) => {
    console.log("Save");
    for (let i = 0; i < data.changedNotes.length; i++) {
      const changedNotes = data.changedNotes;
      updateEntry(
        data.items[changedNotes[i]].id,
        data.items[changedNotes[i]].values[FIELDS.title],
        data.items[changedNotes[i]].values[FIELDS.text]
      );
    }
    data.changedNotes = [];
    updateValue(data);
  };
  const debouncedSave = useCallback(debounce(saveToDB, 3000), []);
  // Saving Note
  useEffect(() => {
    if (!data.items) return;

    debouncedSave(data);
  }, [data.changed, editor, selectedNote, data.changedNotes]);

  // Deletion of a Note
  useEffect(() => {
    if (!deletedNote || !deletedNote[0].id) return;
    console.log("Delete");
    deleteEntry(deletedNote[0].id);
    updateValue({ deletedNote: null });
  }, [deletedNote]);
  // Creation of a Note
  useEffect(() => {
    if (!newNote) return;
    console.log("Create");
    const request = createEntry("New note", "Note text");
    request.then((response) => {
      data.items.push(response.data.record);
      sort();
      updateValue({ data: data, selectedNote: response.data.record.id });
    });

    updateValue({ newNote: false });
  }, [newNote]);
  // Search
  const { value } = useContext(SearchContext);
  useEffect(() => {
    if (value.length === 0) {
      updateValue({ filteredItems: data.items });
      return;
    }
    const filteredItems = data.items.filter((item) => {
      return (
        item.values[FIELDS.title].toLowerCase().includes(value.toLowerCase()) ||
        item.values[FIELDS.text].toLowerCase().includes(value.toLowerCase())
      );
    });

    updateValue({
      filteredItems: filteredItems,
    });
  }, [value]);

  return (
    <div className={styles.app}>
      <Toolbar />
      <Sidebar />
      <Workspace />
    </div>
  );
};

export default App;
