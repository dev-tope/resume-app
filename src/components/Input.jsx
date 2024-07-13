const Input = ({ label, name, type, value, handleChange }) => {
  return (
    <div>
      <label htmlFor="">{label}</label>{" "}
      <input name={name} type={type} value={value} onChange={handleChange} required></input>
    </div>
  );
};

export { Input }