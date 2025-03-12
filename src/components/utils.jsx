export function Input({
  label,
  name,
  data,
  type = "text",
  handleChange,
  placeholder,
  minlenght = "2",
  maxlenght = "40"
}
) {
  return (
    <>
      <label>{label} </label>
      <input 
        type={type}
        name={name}
        value={data}
        onChange={(e) => handleChange(e, name)}
        minLength={minlenght}
        maxLength={maxlenght}
        placeholder={placeholder}
        />
    </>
  );
}
