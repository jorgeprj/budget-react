import "./SubmitButton.css";

const SubmitButton = ({ text, Icon }) => {
    return (
        <div className='submit-btn'>
            <button type='submit'><Icon /> {text}</button>
        </div>
    )
}

export default SubmitButton