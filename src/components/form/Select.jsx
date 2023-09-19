import "./Select.css"

const Select = ( { text, name, options, handleOnChange, value } ) => {
  return (
    <div className="form-select">
        <label htmlFor={name}>{text}</label>
        <select name={name} id={name}>
            <option>Select an option</option>
        </select>
    </div>
  )
}

export default Select