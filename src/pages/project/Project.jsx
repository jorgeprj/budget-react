import './Project.css'

import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { FaX, FaPenToSquare, FaCheck } from 'react-icons/fa6'

import ProjectForm from '../../project/form/ProjectForm'
import Message from '../../components/layout/message/Message';
import Menu from '../../project/menu/Menu'

const Project = () => {

	const { id } = useParams();

	const [project, setProject] = useState([]);
	const [showProjectForm, setShowProjectForm] = useState(false);
	const [message, setMessage] = useState();
	const [type, setType] = useState();



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

	function editPost(project){
		setMessage("")

		if(project.budget < project.cost){
			setMessage("The budget cannot be less than the project cost!");
			setType('error');
			return false;
		}
		fetch(`http://localhost:5000/projects/${project.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(project),
		}).then(resp => resp.json())
			.then((data) => {
				setProject(data);
				setShowProjectForm(false);
				setMessage("Project updated!");
				setType('success');
			})
			.catch((err) => console.log(err));

	}

	return (
		<div className='main'>
			<div className='project'>
				{message && <Message type={type} text={message}/>}
				<div className='project-path'>
					<Link to='/projects'>My Project/</Link>
					{project.name}
				</div>
				<div className='project-name'>
					<h1>{project.name}</h1>
					{!showProjectForm ? <FaPenToSquare onClick={toggleProjectForm} /> : <FaX onClick={toggleProjectForm} />}
				</div>
				{showProjectForm ? (
					<div>
						<ProjectForm 
							handleSubmit={editPost}
							btnText={"Update"} 
							Icon={FaCheck} 
							projectData={project} />
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
						<div>
							<Menu project={project}/>
						</div>
					</div>
				)}

			</div>
		</div>
	)
}

export default Project