import { useContext } from 'react'
import NotesContext from '../../../context/NotesContext'
import styles from './Sidebar.module.css'

function Sidebar() {
    const Notes = useContext(NotesContext)
    console.log(Notes)
    return (
        <div className={styles.sidebar}>
        
        </div>
    )
}

export default Sidebar