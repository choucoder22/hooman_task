import styles from '../../app/page.module.css';


const PrimaryButton = ({ value, onPress } : any) => {
  return (
    <button
      className={styles['primary-button']}
      onClick={() => onPress()}
    >
        <div className={styles.iconButton}>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24" fill="#ffffff">
          <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z"/>
        </svg>
        </div>
      {value}
    </button>
  )
}

export default PrimaryButton;
