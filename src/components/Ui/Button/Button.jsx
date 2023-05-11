import styles from './Button.module.css'
function Button({image, title}) {
    return (
        <button type="button" className={styles.button} title={title}>
       <span>
          <svg className={styles.image}>
          <use href={image + `#img`}></use>
            </svg>
            </span> 
        </button>
      );
}


export default Button;