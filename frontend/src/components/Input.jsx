const Input = ({ label, type = 'text', placeholder, value, onChange }) => {
  return (
    <div className='flex flex-col space-y-2'>
      <label htmlFor={label} className='capitalize'>
        {label}
      </label>
      <input
        type={type}
        name={label}
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
