import { useContext } from "react";
import NotesContext from "../../../context/NotesContext";
import { FIELDS } from "../../../quintadb";
import styles from "./Sidebar.module.css";
import ListItem from "../../ListItem/ListItem";

function Sidebar() {
  const Notes = useContext(NotesContext);
  console.log(Notes);
  return (
    <div className={styles.sidebar}>
      <ul>
        {Notes.map((item) => {
          return (
            <li>
              <ListItem
                key={item.id}
                title={item.values[FIELDS.title]}
                text={item.values[FIELDS.text]}
                date={item.updated_at}
              ></ListItem>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
