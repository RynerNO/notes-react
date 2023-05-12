import styles from "./Modal.module.css";
const Modal = ({ show, handleClose, handleDelete }) => {
  return (
    <div
      className={
        show
          ? `${styles.modal} ${styles.displayBlock}`
          : `${styles.modal} ${styles.displayNone}`
      }
    >
      <section className={styles.modalMain}>
        <h3>Подтвердить удаление</h3>
        <p>Вы уверены, что хотите удалить эту заметку?</p>
        <button onClick={handleDelete}>Удалить</button>
        <button onClick={handleClose}>Отмена</button>
      </section>
    </div>
  );
};

export default Modal;
