import styles from '../../app/page.module.css';


const Button = ({ value, onPress } : any) => {
  return (
    <button
      className={styles.button}
      onClick={() => onPress()}
    >
      {value}
    </button>
  )
}

export default Button;
