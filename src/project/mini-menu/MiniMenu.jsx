import { Link } from 'react-router-dom';
import './MiniMenu.css';

import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'


const MiniMenu = ( {projectId, onDelete} ) => {
    return (
        <div>
            <div className="mini-menu">
                <Link to={`/project/${projectId}`}>
                    <div className="menu-item"><AiOutlineEdit/> Edit</div>
                </Link>
                <div className="menu-item" onClick={onDelete}><AiOutlineDelete/> Delete</div>
            </div>
        </div>
    )

}

export default MiniMenu