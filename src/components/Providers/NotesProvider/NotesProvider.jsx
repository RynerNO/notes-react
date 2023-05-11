import React, { useState } from "react";
import NotesContext from "../../../context/NotesContext";

function NotesProvider({ children }) {
  const [value, setValue] = useState({
    data: [],
    selectedNote: 0,
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
