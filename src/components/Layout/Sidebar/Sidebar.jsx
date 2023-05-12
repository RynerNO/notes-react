import { useContext, useState } from "react";
import NotesContext from "../../../context/NotesContext";
import { FIELDS } from "../../../quintadb";
import styles from "./Sidebar.module.css";
import ListItem from "../../ListItem/ListItem";

function Sidebar() {
  const { filteredItems, selectedNote, updateValue } = useContext(NotesContext);

  const selectNote = (id) => {
    updateValue({ selectedNote: id, editor: false });
  };
  const items = filteredItems || [];
  return (
    <div className={styles.sidebar}>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={item.id} onClick={() => selectNote(item.id)}>
              <ListItem
                title={item.values[FIELDS.title]}
                text={item.values[FIELDS.text]}
                date={item.updated_at}
                isSelected={item.id === selectedNote}
              ></ListItem>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
