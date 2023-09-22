import "./SubmitButton.css";

import { FaPlus } from 'react-icons/fa6'

const SubmitButton = ({ text }) => {
    return (
        <div className='submit-btn'>
            <button type='submit'><FaPlus /> {text}</button>
        </div>
    )
}

export default SubmitButton