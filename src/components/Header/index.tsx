import styles from '../../app/page.module.css';
import Button from '../Button';

const Header = ({ title="Let’s Talk!", onPressButton, isShowingForm }: any) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center'}}>
      <div className={styles.headerContainer}>
        <h1 className={styles.headerTitle}>
          {title}
        </h1>
        <Button
          value={isShowingForm ? "X" : "click here to begin"}
          onPress={() => onPressButton()}
        ></Button>
      </div>
    </div>  
  );
}

export default Header;
