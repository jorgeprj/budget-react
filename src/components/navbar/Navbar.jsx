import './Navbar.css';

import { FaSearch } from 'react-icons/fa'

const Navbar = ({search, setSearch}) => {
    return (
        <div>
            <div className='navbar'>
                <div className='search'>
                    <FaSearch/>
                    <input type="text" value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder={'Search for projects and status...'}
                        className='search-input'
                    />
                </div>
            </div>
        </div>
    )
}

export default Navbar