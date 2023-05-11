import styles from "./ListItem.module.css";
import { formatDate } from "../../helpers";
function ListItem({ title, text, date }) {
  const formatedDate = formatDate(date);
  return (
    <div className={styles.listItem}>
      <h2>{title}</h2>
      <p>{text}</p>
      <p>{formatedDate}</p>
    </div>
  );
}

export default ListItem;
