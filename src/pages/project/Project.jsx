import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { AiOutlineEdit, AiOutlineClose } from 'react-icons/ai'

import './Project.css'

const Project = () => {

	const { id } = useParams();

	const [project, setProject] = useState([]);

	const [showProjectForm, setShowProjectForm] = useState(false);

	useEffect(() => {
		fetch(`http://localhost:5000/projects/${id}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		}).then(resp => resp.json())
			.then((data) => {
				setProject(data);
			})
			.catch((err) => console.log(err));
	}, [id]);

	const budgetDollars = `$${parseFloat(project.budget).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
	const costDollars = `$${parseFloat(project.cost).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`

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
	};

	function toggleProjectForm() {
		setShowProjectForm(!showProjectForm);
	};

	return (
		<div className='main'>
			<div className='project'>
				<div className='project-path'>
					<Link to='/projects'>My Project/</Link>
					{project.name}
				</div>
				<div className='project-name'>
					<h1>{project.name}</h1>
					{!showProjectForm ? <AiOutlineEdit onClick={toggleProjectForm} /> : <AiOutlineClose onClick={toggleProjectForm} />}
				</div>
				{showProjectForm ? (
					<div>
						Form
					</div>
				) : (
					<div>
						<p>{project.description}</p>
						<div className='project-info'>
							<div className='priority'>
								<h4>Priority:</h4>
								<span className={`priority ${project.priority?.name}`}>{project.priority?.name}</span>
							</div>
							<div className='deadline'>
								<h4>Date:</h4>
								<span className='deadline-date'>{getDate(project.deadline)}</span>
							</div>
							<div>
								<h4>Tag:</h4>
								<span className={`tag ${project.tag?.name}`}>{project.tag?.name}</span>
							</div>
							<div>
								<h4>Total budget:</h4>
								<span style={{ color: 'var(--primary-color)' }}>{budgetDollars}</span>
							</div>
							<div>
								<h4>Total cost:</h4>
								<span style={{ color: 'rgb(176, 33, 33)' }}>{costDollars}</span>
							</div>
						</div>
					</div>
				)}

			</div>
		</div>
	)
}

export default Project