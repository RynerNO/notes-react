import { useContext, useState } from "react";
import NotesContext from "../../../context/NotesContext";
import { FIELDS } from "../../../quintadb";
import styles from "./Sidebar.module.css";
import ListItem from "../../ListItem/ListItem";

function Sidebar() {
  const { data, selectedNote, updateValue } = useContext(NotesContext);
  const selectNote = () => {
    console.log(data);
    updateValue({ selectedNote: 2 });
  };
  return (
    <div className={styles.sidebar}>
      <ul>
        {data.map((item, index) => {
          return (
            <li key={item.id} onClick={selectNote}>
              <ListItem
                title={item.values[FIELDS.title]}
                text={item.values[FIELDS.text]}
                date={item.updated_at}
                isSelected={index === selectedNote}
              ></ListItem>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
