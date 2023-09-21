import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

import Navbar from '../components/navbar/Navbar';

import { FaPlus, FaArrowRightArrowLeft } from 'react-icons/fa6'
import './Projects.css';
import Message from '../components/layout/Message';
import ProjectCard from '../project/ProjectCard';


const Projects = () => {

	const [projects, setProjects] = useState([]);

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
				<div className='projects-cards'>
					{projects.length > 0 &&
						projects.map((project) => (
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
							/>
						))
					}
				</div>

			</div>
		</div>
	)
}

export default Projects