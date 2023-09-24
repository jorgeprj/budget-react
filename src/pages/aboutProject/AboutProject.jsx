import './AboutProject.css'

const AboutProject = () => {
	return (
		<div className="main">
			<div className="about-project">
				<h1>About Project</h1>
				<p>Welcome to the Taskee project! Taskee is a ReactJS-based project management tool created to help you organize your projects, tasks, and services effectively. It demonstrates various React concepts and features, including React Hooks, routing, and more.</p>
				<img src="../public/print1.png" alt="" />
				<div className='info'>
					<h2>Key Features</h2>
					<ul>
						<li>Utilization of React Hooks for state and effect management.</li>
						<li>Styling with CSS for an attractive and responsive interface.</li>
						<li>Event handling, such as onClick and onChange, for user interactions.</li>
						<li>Use of props to pass data between components.</li>
						<li>Page navigation with React Router.</li>
						<li>Beautiful and intuitive icons provided by the React Icons library.</li>
					</ul>

					<h2>Additional Features</h2>
					<ul>
						<li>Project Management - Create, edit, and delete projects with automatic cost updates.</li>
						<li>Add Tasks - Create tasks within project deadlines.</li>
						<li>Add Services - Add services if costs fit within the project's budget.</li>
						<li>Automatic Cost Update - Project cost updates automatically based on added or removed services.</li>
					</ul>
				</div>

				<footer>
					<p>Contact me at <a href="/contact">@jorgeprj</a></p>
				</footer>


			</div>
		</div>
	)
}

export default AboutProject