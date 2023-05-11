import styles from "./Workspace.module.css";
import MDEditor from "@uiw/react-md-editor";
import { FIELDS } from "../../../quintadb";
import { useContext } from "react";
import NotesContext from "../../../context/NotesContext";
function Workspace() {
  const { data, selectedNote, editor, updateValue } = useContext(NotesContext);
  const setValue = (value) => {
    data.items[selectedNote].values[FIELDS.text] = value;
    data.changed = !data.changed;
    updateValue({ data });
  };
  return (
    <div className={styles.workspace}>
      <MDEditor
        value={
          data.items && data.items[selectedNote]
            ? data.items[selectedNote].values[FIELDS.text]
            : ""
        }
        onChange={setValue}
        height={"100%"}
        preview={editor ? "edit" : "preview"}
      />
    </div>
  );
}

export default Workspace;
