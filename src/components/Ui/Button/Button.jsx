import styles from "./Button.module.css";
function Button({ image, title, onClick, disabled }) {
  const clickHandler = (e) => {
    if (disabled) return;
    onClick(e);
  };
  return (
    <button
      type="button"
      onClick={clickHandler}
      className={`${styles.button} ${disabled ? styles.disabled : ""}`}
      title={title}
      disabled={disabled}
    >
      <span>
        <svg className={styles.image}>
          <use href={image + `#img`}></use>
        </svg>
      </span>
    </button>
  );
}

export default Button;
