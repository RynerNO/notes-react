import styles from "./Workspace.module.css";
import MDEditor from "@uiw/react-md-editor";
import { FIELDS } from "../../../quintadb";
import { useContext } from "react";
import NotesContext from "../../../context/NotesContext";
function Workspace() {
  const { data, selectedNote, updateValue } = useContext(NotesContext);
  const setValue = (value) => {
    data[selectedNote].values[FIELDS.text] = value;
    updateValue({ data });
  };
  return (
    <div className={styles.workspace}>
      <MDEditor
        value={data[selectedNote] ? data[selectedNote].values[FIELDS.text] : ""}
        onChange={setValue}
        height={"100%"}
        preview="preview"
      />
    </div>
  );
}

export default Workspace;
