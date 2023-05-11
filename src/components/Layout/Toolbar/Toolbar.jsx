import styles from "./Toolbar.module.css";

import add from "../../../assets/add.svg";
import trash from "../../../assets/trash.svg";
import edit from "../../../assets/edit.svg";
import search from '../../../assets/search.svg'
function Toolbar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.buttonsContainer}>
        <button type="button" className={styles.button} title="add">
          <span>
            <svg className={styles.image}>
              <use href={add + `#img`}></use>
            </svg>
          </span>
        </button>
        <button type="button" className={styles.button} title="remove">
          <span>
            <svg className={styles.image}>
              <use href={trash + `#img`}></use>
            </svg>
          </span>
        </button>
        <button type="button" className={styles.button} title={edit}>
          <span>
            <svg className={styles.image}>
              <use href={edit + `#img`}></use>
            </svg>
          </span>
        </button>
      </div>
      <div className={styles.search}>
        <input type="text" placeholder="Search" />
        <span className={styles.searchIcon}>
            <svg className={styles.image}>
                <use href={search + `#img`}></use>
                </svg>
        </span>
      </div>
    </div>
  );
}

export default Toolbar;
