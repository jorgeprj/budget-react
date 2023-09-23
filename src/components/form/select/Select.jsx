import "./Select.css"

const Select = ( { text, name, options, handleOnChange, value } ) => {
  return (
    <div className="form-select">
        <label htmlFor={name}>{text}</label>
        <select name={name} id={name} onChange={handleOnChange} value={value || ""} required>
            <option>Select an option</option>
            {options.map((option) => (
              <option value={option.id} key={option.id} >{option.name}</option>
            ))}
        </select>
    </div>
  )
}

export default Select