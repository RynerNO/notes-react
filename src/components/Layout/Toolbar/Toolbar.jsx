import styles from "./Toolbar.module.css";
import Button from "../../Ui/Button/Button";
import SearchBox from "../../Ui/SearchBox/SearchBox";
import add from "../../../assets/add.svg";
import trash from "../../../assets/trash.svg";
import edit from "../../../assets/edit.svg";
import { useContext, useState } from "react";
import NotesContext from "../../../context/NotesContext";
import Modal from "../../Ui/Modal/Modal";
function Toolbar() {
  const { data, selectedNote, editor, updateValue } = useContext(NotesContext);
  const toggleEdit = () => {
    updateValue({ editor: !editor });
  };

  const createNote = () => {
    updateValue({ newNote: true });
  };

  const [modalShow, setModalShow] = useState(false);

  const handleModalClose = () => {
    setModalShow(false);
  };

  const handleModalOpen = () => {
    setModalShow(true);
  };

  const handleDelete = () => {
    console.log("Заметка удалена");
    updateValue({ deletedNote: data.items.splice(selectedNote, 1) });
    setModalShow(false);
  };
  const notSelected =
    data.items.findIndex((item) => item.id === selectedNote) === -1;
  return (
    <div className={styles.wrapper}>
      <div className={styles.buttonsContainer}>
        <Button image={add} onClick={createNote} title={"Create"} />
        <Button
          image={trash}
          onClick={handleModalOpen}
          title={"Remove"}
          disabled={notSelected}
        />
        <Button
          image={edit}
          onClick={toggleEdit}
          title={"Edit"}
          disabled={notSelected}
        />
      </div>
      <Modal
        show={modalShow}
        handleClose={handleModalClose}
        handleDelete={handleDelete}
      />
      <SearchBox />
    </div>
  );
}

export default Toolbar;
