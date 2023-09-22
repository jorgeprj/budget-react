import './ProjectCard.css'

import { FiMoreHorizontal } from 'react-icons/fi'
import { FaRegCalendar } from 'react-icons/fa'
import { BiTask } from 'react-icons/bi'
import { MdOutlineMiscellaneousServices } from 'react-icons/md'

import MiniMenu from './mini-menu/MiniMenu'

import { useEffect, useRef, useState } from 'react'


const ProjectCard = ({ id, name, description, tag, priority, budget, deadline, tasks, services, handleRemove }) => {

	const remove = (e) => {
		e.preventDefault();
		handleRemove(id);
	}

	const budgetDollars = `$${parseFloat(budget).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`

	function getDate(deadline) {
		const dataDeadline = new Date(deadline);

		const months = [
			'January', 'February', 'March', 'April', 'May', 'June',
			'July', 'August', 'September', 'October', 'November', 'December'
		];

		const day = dataDeadline.getDate();
		const month = months[dataDeadline.getMonth()];
		const year = dataDeadline.getFullYear();

		return `${day} ${month} ${year}`;
	}

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef(null);

	const handleMenuToggle = (e) => {
		e.stopPropagation(); 
		setIsMenuOpen(!isMenuOpen);
	  };

	useEffect(() => {
		const handleDocumentClick = (e) => {
		  if (menuRef.current && !menuRef.current.contains(e.target)) {
			setIsMenuOpen(false);
		  }
		};
	
		document.addEventListener('click', handleDocumentClick);
	
		return () => {
		  document.removeEventListener('click', handleDocumentClick);
		};
	  }, []);

	return (
		<div className='project-card'>
			<div className='project-card-header'>
				<span className={`project-card-tag ${tag.name}`}>{tag.name}</span>
				<div className='project-card-options'>
					<FiMoreHorizontal onClick={handleMenuToggle} />
					{isMenuOpen && (
						<div ref={menuRef}>
							<MiniMenu projectId={id} onDelete={remove}/>
						</div>
					)}
				</div>
			</div>
			<div className='project-card-name'>
				<h1>{name}</h1>
				<div className={`square ${priority.name}`}></div>
			</div>
			<p>{description}</p>
			<p><strong>Budget:</strong> {budgetDollars}</p>

			<div className='project-card-date'>
				<FaRegCalendar />
				<p>{getDate(deadline)}</p>
			</div>

			<div className='project-card-last-infos'>
				<span><BiTask /> {tasks.length} tasks</span>
				<span><MdOutlineMiscellaneousServices /> {services.length} services</span>
			</div>
		</div>
	)
}

export default ProjectCard