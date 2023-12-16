import { useState } from 'react';
import styles from '../../app/page.module.css';
import Button from '../Button';

const Header = ({ title="Let’s Talk!", onPressButton, isShowingForm }: any) => {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.headerTitle}>
        {title}
      </h1>
      <Button
        value={isShowingForm ? "x" : "click here to begin"}
        onPress={() => onPressButton()}
      />
    </div>
  );
}

export default Header;
