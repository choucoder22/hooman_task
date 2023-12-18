import styles from '../../app/page.module.css';
const Label = ({
    text
  }: any) => {
    return (
      <h2 className={styles.label}>
        {text}
      </h2>
    );
  }
  
  export default Label;