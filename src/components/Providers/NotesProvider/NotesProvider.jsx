import React, { useState } from "react";
import NotesContext from "../../../context/NotesContext";

function NotesProvider({ children }) {
  const [value, setValue] = useState({
    data: {
      changed: false,
      changedNotes: [],
      items: [],
    },
    newNote: false,
    deletedNote: null,
    selectedNote: 0,
    editor: false,
  });

  const updateValue = (newData) => {
    setValue((prevState) => ({ ...prevState, ...newData }));
  };

  return (
    <NotesContext.Provider value={{ ...value, updateValue }}>
      {children}
    </NotesContext.Provider>
  );
}

export default NotesProvider;
