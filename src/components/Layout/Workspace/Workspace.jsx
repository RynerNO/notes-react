import styles from "./Workspace.module.css";
import MDEditor from "@uiw/react-md-editor";
import { FIELDS } from "../../../quintadb";
import { useContext } from "react";
import NotesContext from "../../../context/NotesContext";
function Workspace() {
  const { data, selectedNote, editor, updateValue } = useContext(NotesContext);
  const setValue = (value, title) => {
    if (title) {
      data.items[selectedNote].values[FIELDS.title] = value;
    } else data.items[selectedNote].values[FIELDS.text] = value;
    data.changed = !data.changed;
    if (data.changedNotes.indexOf(selectedNote) == -1) {
      data.changedNotes.push(selectedNote);
    }
    updateValue(data);
  };
  const text =
    data.items && data.items[selectedNote]
      ? data.items[selectedNote].values[FIELDS.text]
      : "";
  const title =
    data.items && data.items[selectedNote]
      ? data.items[selectedNote].values[FIELDS.title]
      : "";
  return (
    <div className={styles.workspace}>
      <input
        type="text"
        value={title}
        disabled={!editor}
        onChange={(event) => setValue(event.target.value, true)}
      />
      <MDEditor
        value={text}
        onChange={setValue}
        height={"100%"}
        preview={editor ? "edit" : "preview"}
      />
    </div>
  );
}

export default Workspace;
