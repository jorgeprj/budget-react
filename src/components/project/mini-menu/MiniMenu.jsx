import { Link } from 'react-router-dom';
import './MiniMenu.css';

import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'


const MiniMenu = ( {pathToEdit, onDelete} ) => {
    return (
        <div>
            <div className="mini-menu">
                <Link to={`${pathToEdit}`}>
                    <div className="mini-menu-item"><AiOutlineEdit/> Edit</div>
                </Link>
                <div className="mini-menu-item" onClick={onDelete}><AiOutlineDelete/> Delete</div>
            </div>
        </div>
    )

}

export default MiniMenu