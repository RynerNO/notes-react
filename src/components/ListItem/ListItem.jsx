import styles from "./ListItem.module.css";
import { formatDate } from "../../helpers";
function ListItem({ title, text, date, isSelected }) {
  const formatedDate = formatDate(date);
  return (
    <div className={`${styles.listItem} ${isSelected ? styles.selected : ""}`}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.dateTextContainer}>
        <p>{text}</p>
        <p>{formatedDate}</p>
      </div>
    </div>
  );
}

export default ListItem;
