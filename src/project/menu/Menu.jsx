import { useState } from 'react';
import './Menu.css'

import { BiTask } from 'react-icons/bi'
import { MdOutlineMiscellaneousServices } from 'react-icons/md'
import Card from './card/Card';

const Menu = ({ project }) => {
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

	const service = {
		name: "Hire scrum master",
		cost: 2000,
		description: "The scrum master will lead the Jira implementation"
	}

	const task = {
		name: "Team Meeting",
		description: "We have a meeting on 9am 7th July. So I request everyone to join",
		deadline: "2023-09-30",
		status: "Completed",
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
							<Card service={service} />
							<Card service={service} />
							<Card service={service} />
							<Card service={service} />
							<Card addCard={true} setForm={setServiceForm} text={"Service"}/>
						</div>
					) : (
						<div>
							Form
							<button onClick={() => setServiceForm(false)}>
								Voltar
							</button>
						</div>
					)
				)}

				{!tabServices && (
					!taskForm ? (
						<div className='menu-cards'>
							<Card task={task} />
							<Card addCard={true} setForm={setTaskForm} text={"Task"} />
						</div>
					) : (
						<div>
							Form
							<button onClick={() => setTaskForm(false)}>
								Voltar
							</button>
						</div>
					)
				)}

			</div>

		</div>
	)
}

export default Menu