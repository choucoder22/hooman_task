"use client";
import Image from 'next/image'
import styles from './page.module.css'
import Form from '../components/Form';
import Input from '../components/Input';
import Header from '../components/Header';
import React, { useState } from 'react';

const Ellipse = () => {
  return (
    <div className={styles.ellipseContainer}>
      <div className={styles.ellipse}></div>
    </div>
  );
}


export default function Home() {
  const [showForm, setShowForm] = useState(false);

  return (
    <main className={styles.main}>
      <Header
        isShowingForm={showForm}
        onPressButton={() => { setShowForm(!showForm) }}
      />
      {showForm ? (
        <Form />
      ) : null}
    </main>
  );
}

