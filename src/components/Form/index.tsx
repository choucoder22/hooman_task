import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import styles from '../../app/page.module.css';
import Input from '../Input';
import Button from '../Button';
import Label from '../Label';
import PrimaryButton from '../PrimaryButton';
import 'react-toastify/dist/ReactToastify.css';


const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (name.length > 0 && email.length > 0 && message.length > 0) {
      setName("");
      setEmail("");
      setMessage("");
      toast("El mensaje ha sido enviado correctamente");
    } else {
      toast("Faltan campos por llenar en el formulario");
    }
  }

  return (
    <div className={styles.formContainer}>
      <div className={styles.formInputContainer}>
        <Input
          value={name}
          placeholder="Full name"
          onChange={(value: string) => setName(value)}
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
      <div className={styles.containerButton}>
        <PrimaryButton
          value="Send Message"
          onPress={() => {
            sendMessage();
          }}
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Form;
