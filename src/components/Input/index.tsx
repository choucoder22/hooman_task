const Input = ({
  placeholder,
  value,
  onChange,
  type="text"
}: any) => {
  return (
    <input
      type={type}
      name="input"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default Input;
