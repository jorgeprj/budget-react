import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

import Navbar from '../components/navbar/Navbar';

import { FaPlus, FaArrowRightArrowLeft } from 'react-icons/fa6'
import './Projects.css';
import Message from '../components/layout/Message';


const Projects = () => {

	const [search, setSearch] = useState();

	
	const location = useLocation();
	let message = ""
	if(location.state){
		message = location.state.text
	}

	return (
		<div className='main'>
			<div className='projects'>
				<Navbar search={search} setSearch={setSearch} />
				{message && <Message type="success" text={message}/>}
				<section className='projects-container'>
					<div className='projects-header'>
						<h1>Project Manager</h1>
						<div className='projects-actions'>
							<button className='sort-btn'><FaArrowRightArrowLeft/> Sort</button>
							<Link to='/newproject'>
								<button><FaPlus/>Create</button>
							</Link>
						</div>
					</div>
				</section>
			</div>
		</div>
	)
}

export default Projects