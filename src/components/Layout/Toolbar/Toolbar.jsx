import styles from "./Toolbar.module.css";
import Button from "../../Ui/Button/Button";
import SearchBox from "../../Ui/SearchBox/SearchBox";
import add from "../../../assets/add.svg";
import trash from "../../../assets/trash.svg";
import edit from "../../../assets/edit.svg";
import { useContext } from "react";
import NotesContext from "../../../context/NotesContext";

function Toolbar() {
  const { data, selectedNote, deletedNote, editor, updateValue } =
    useContext(NotesContext);
  const toggleEdit = () => {
    updateValue({ editor: !editor });
  };

  const deleteNote = () => {
    updateValue({ deletedNote: data.items.splice(selectedNote, 1) });
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.buttonsContainer}>
        <Button image={add} title={"add"} />
        <Button image={trash} onClick={deleteNote} title={"remove"} />
        <Button image={edit} onClick={toggleEdit} title={"edit"} />
      </div>
      <SearchBox />
    </div>
  );
}

export default Toolbar;
