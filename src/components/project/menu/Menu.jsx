import { useState } from 'react';
import './Menu.css'

import { FaPlus, FaArrowLeftLong } from 'react-icons/fa6'
import { BiTask } from 'react-icons/bi'
import { MdOutlineMiscellaneousServices } from 'react-icons/md'

import { parse, v4 as uuidv4 } from 'uuid';


import Card from './card/Card';
import ServiceForm from '../../service/form/ServiceForm';
import TaskForm from '../../task/form/TaskForm';

const Menu = ({ project, setMessage, setType }) => {
	const [tabServices, setTabServices] = useState(true);
	const [serviceForm, setServiceForm] = useState(false);
	const [taskForm, setTaskForm] = useState(false);


	function toggleServices() {
		setTabServices(true);
		setTaskForm(false);
	}

	function toggleTasks() {
		setTabServices(false);
		setServiceForm(false);
	}

	const taskExample = {
		name: "Team Meeting",
		description: "We have a meeting on 9am 7th July. So I request everyone to join",
		deadline: "2023-09-30",
		status: "Completed",
	}

	function createService(project) {

		setMessage("");

		const lastService = project.services[project.services.length - 1];
		lastService.id = uuidv4();

		const lasServiceCost = lastService.cost

		const newCost = parseFloat(project.cost) + parseFloat(lasServiceCost);

		if(newCost > parseFloat(project.budget)){
			setMessage("Budget exceeded, check the service amount");
			setType("error");
			project.services.pop();
			return false;
		}

		project.cost = newCost;

		fetch(`http://localhost:5000/projects/${project.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(project),
		}).then(resp => resp.json())
			.then((data) => {
				setServiceForm(false);
				setMessage("Service added!");
				setType('success');
			})
			.catch((err) => console.log(err));
	}

	function createTask(project) {
		setMessage("");

		const projectDeadline = new Date(project.deadline);
		const lastTask = project.tasks[project.tasks.length - 1];
		lastTask.id = uuidv4();
		const lastTaskDeadline = new Date(lastTask.deadline);


		if(lastTaskDeadline > projectDeadline){
			setMessage("The task deadline is longer than the project deadline, check the task deadline");
			setType("error");
			project.tasks.pop();
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
				setTaskForm(false);
				setMessage("Task added!");
				setType('success');
			})
			.catch((err) => console.log(err));
	}

	return (
		<div className='menu'>
			<div className='menu-header'>
				<div className={`menu-item ${tabServices ? 'active' : ''}`} onClick={toggleServices}>
					<MdOutlineMiscellaneousServices />
					<h2>Services</h2>
				</div>
				<div className={`menu-item ${!tabServices ? 'active' : ''}`} onClick={toggleTasks}>
					<BiTask />
					<h2>Tasks</h2>
				</div>
			</div>
			<div className='menu-container'>
				{tabServices && (
					!serviceForm ? (
						<div className='menu-cards'>
							{project.services?.map( (service) => <Card key={service.id} service={service} />)}
							<Card addCard={true} setForm={setServiceForm} text={"Service"} />
						</div>
					) : (
						<div>
							<button className='back' onClick={() => setServiceForm(false)}>
								<FaArrowLeftLong/>
							</button>
							<ServiceForm
								handleSubmit={createService}
								textBtn="Create service"
								Icon={FaPlus}
								projectData={project}
							/>
						</div>
					)
				)}

				{!tabServices && (
					!taskForm ? (
						<div className='menu-cards'>
							{project.tasks?.map( (task) => <Card key={task.id} task={task} />)}
							<Card addCard={true} setForm={setTaskForm} text={"Task"} />
						</div>
					) : (
						<div>
							<button className='back' onClick={() => setTaskForm(false)}>
								<FaArrowLeftLong/>
							</button>
							<TaskForm
								handleSubmit={createTask}
								textBtn="Create task"
								Icon={FaPlus}
								projectData={project}
							/>
						</div>
					)
				)}

			</div>

		</div>
	)
}

export default Menu