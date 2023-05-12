import styles from "./Toolbar.module.css";
import Button from "../../Ui/Button/Button";
import SearchBox from "../../Ui/SearchBox/SearchBox";
import add from "../../../assets/add.svg";
import trash from "../../../assets/trash.svg";
import edit from "../../../assets/edit.svg";
import { useContext } from "react";
import NotesContext from "../../../context/NotesContext";

function Toolbar() {
  const { data, selectedNote, editor, newNote, updateValue } =
    useContext(NotesContext);
  const toggleEdit = () => {
    updateValue({ editor: !editor });
  };

  const deleteNote = () => {
    updateValue({ deletedNote: data.items.splice(selectedNote, 1) });
  };

  const createNote = () => {
    updateValue({ newNote: true });
  };
  const notSelected =
    data.items.findIndex((item) => item.id === selectedNote) === -1;
  return (
    <div className={styles.wrapper}>
      <div className={styles.buttonsContainer}>
        <Button image={add} onClick={createNote} title={"add"} />
        <Button
          image={trash}
          onClick={deleteNote}
          title={"remove"}
          disabled={notSelected}
        />
        <Button
          image={edit}
          onClick={toggleEdit}
          title={"edit"}
          disabled={notSelected}
        />
      </div>
      <SearchBox />
    </div>
  );
}

export default Toolbar;
