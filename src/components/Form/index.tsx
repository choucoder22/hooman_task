import React, { useState } from 'react';
import styles from '../../app/page.module.css';
import Input from '../Input';
import Button from '../Button';


const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (name.length > 0 && email.length > 0 && message.length > 0) {
      /* enviar mensaje, simular */
      setName("");
      setEmail("");
      setMessage("");
      // mostrar un alert que el mensaje fue enviado exitosamente
    }
  }

  return (
    <div className={styles.formContainer}>
      <div className={styles.formInputContainer}>
        <Input 
          placeholder="Full name"
          value={name}
          onChange={(value: string) => setName(value) }
        />
        <Input
          placeholder="Email address"
          value={email}
          type={"email"}
          onChange={(value: string) => setEmail(value)}
        />
        <Input
          placeholder="Your message"
          value={message}
          onChange={(value: string) => setMessage(value)}
        />
      </div>
      <Button
        value="Send Message"
        onPress={() => { sendMessage() }}
      />
    </div>
  );
};

export default Form;
