import './MiniMenu.css';

import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'


const MiniMenu = ( {onEdit, onDelete} ) => {
    return (
        <div>
            <div className="mini-menu">
                <div className="menu-item" onClick={onEdit}><AiOutlineEdit/> Edit</div>
                <div className="menu-item" onClick={onDelete}><AiOutlineDelete/> Delete</div>
            </div>
        </div>
    )

}

export default MiniMenu