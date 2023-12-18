import styles from '../../app/page.module.css';
const Input = ({
  placeholder,
  value,
  onChange,
  type="text"
}: any) => {
  return (
    <input
      className={styles.input}
      type={type}
      name="input"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default Input;
