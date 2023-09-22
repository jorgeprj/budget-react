import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

import Navbar from '../../components/navbar/Navbar';

import { FaPlus, FaArrowRightArrowLeft } from 'react-icons/fa6'
import './Projects.css';
import Message from '../../components/layout/message/Message';
import ProjectCard from '../../project/card/ProjectCard';


const Projects = () => {

	const [projects, setProjects] = useState([]);
	const [projectMessage, setProjectMessage] = useState("");
	const [search, setSearch] = useState("");
	
	useEffect(() => {

		fetch('http://localhost:5000/projects', {
			method: 'GET',
			headers: { 
				'content-type': 'application/json',
			},
		})
		.then((resp) => resp.json())
		.then((data) => {
			setProjects(data);
		})
		.catch((err) => console.log(err));
	}, [])

	
	const location = useLocation();
	let message = ""
	if(location.state){
		message = location.state.text
	}

	function removeProject(id){
		fetch(`http://localhost:5000/projects/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			},
		}).then(resp => resp.json())
		  .then(() => {
			setProjects(projects.filter((project) => project.id !== id))
			setProjectMessage('Project removed successfully!');
		  })
		  .catch(err => console.log(err));
	}

	return (
		<div className='main'>
			<div className='projects'>
				<Navbar search={search} setSearch={setSearch} />
				{message && <Message type="success" text={message}/>}
				{projectMessage && <Message type="success" text={projectMessage}/>}
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
				<div className='projects-cards'>
					{projects.length > 0 &&
						projects
						.filter((project) => project?.name.toLowerCase().includes(search?.toLowerCase()) 
											|| 
											project?.description.toLowerCase().includes(search?.toLowerCase()) 
											||
											project?.priority?.name.toLowerCase().includes(search?.toLowerCase()) 
								)
						.map((project) => (
							<ProjectCard 
								id={project.id}
								name={project.name}
								description={project.description}
								priority={project.priority}
								budget={project.budget}
								deadline={project.deadline}
								tag={project.tag}
								tasks={project.tasks}
								services={project.services}
								key={project.id}
								handleRemove={removeProject}
							/>
						))
					}
				</div>

			</div>
		</div>
	)
}

export default Projects