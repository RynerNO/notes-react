import styles from './SearchBox.module.css'
import search from "../../../assets/search.svg";
function SearchBox() {
    return (
        <div className={styles.search}>
        <input type="text" placeholder="Search" />
        <span className={styles.searchIcon}>
          <svg className={styles.image}>
            <use href={search + `#img`}></use>
          </svg>
        </span>
      </div>
    )
}

export default SearchBox;