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
  // Получаем данные и функции контекста
  const { data, selectedNote, editor, updateValue } = useContext(NotesContext);

  // Переключает состояние редактирования
  const toggleEdit = () => {
    updateValue({ editor: !editor });
  };

  // Создает новую заметку
  const createNote = () => {
    updateValue({ newNote: true, editor: true });
  };

  // Состояние для отображения модального окна
  const [modalShow, setModalShow] = useState(false);

  // Закрывает модальное окно
  const handleModalClose = () => {
    setModalShow(false);
  };

  // Открывает модальное окно
  const handleModalOpen = () => {
    setModalShow(true);
  };

  // Удаляет выбранную заметку и закрывает модальное окно
  const handleDelete = () => {
    updateValue({ deletedNote: data.items.splice(selectedNote, 1) });
    setModalShow(false);
  };

  // Проверяет, выбрана ли заметка
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
          active={editor}
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
