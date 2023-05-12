import styles from "./Workspace.module.css";
import MDEditor from "@uiw/react-md-editor";
import { FIELDS } from "../../../quintadb";
import { useContext } from "react";
import NotesContext from "../../../context/NotesContext";
function Workspace() {
  const { data, selectedNote, editor, updateValue } = useContext(NotesContext);
  const index = data.items.findIndex((item) => item.id === selectedNote);
  const setValue = (value, title) => {
    if (value.length === 0) value = "Empty Note";
    if (title === "title") {
      data.items[index].values[FIELDS.title] = value;
    } else data.items[index].values[FIELDS.text] = value;

    data.changed = !!data.changed;
    const date = new Date();
    const isoString = date.toISOString();
    data.items[index].updated_at =
      isoString.slice(0, 23) + isoString.slice(23).replace(".", "-");
    data.items.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    if (data.changedNotes.indexOf(index) == -1) {
      data.changedNotes.push(index);
    }
    updateValue(data);
  };
  const text =
    data.items && data.items[index]
      ? data.items[index].values[FIELDS.text]
      : "";
  const title =
    data.items && data.items[index]
      ? data.items[index].values[FIELDS.title]
      : "";
  return (
    <div className={styles.workspace}>
      <input
        type="text"
        value={title}
        disabled={!editor}
        onChange={(event) => setValue(event.target.value, "title")}
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
