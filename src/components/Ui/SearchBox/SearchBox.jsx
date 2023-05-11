import styles from './SearchBox.module.css'
import search from "../../../assets/search.svg";
import SearchContext from '../../../context/SearchContext';
import { useContext } from 'react';



function SearchBox() {
    const { updateValue } = useContext(SearchContext);
    function handleInput(event) {
        const input = event.target.value;
       updateValue({value: input})
      }
   
    return (
        <div className={styles.search}>
        <input type="text" placeholder="Search" onInput={handleInput} />
        <span className={styles.searchIcon}>
          <svg className={styles.image}>
            <use href={search + `#img`}></use>
          </svg>
        </span>
      </div>
    )
}

export default SearchBox;