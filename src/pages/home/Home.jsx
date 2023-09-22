import { Link } from 'react-router-dom';
import './Home.css';

import { FaCheck, FaPlus } from 'react-icons/fa6'

const Home = () => {
	return (
		<div className="main">
			<section className="home-container">
				<div className='home-content'>
					<h1>Welcome to Taskee</h1>
					<p>Taskee is a complete project management solution. We simplify the process of planning, tracking and completing projects, so you can achieve your goals with ease.</p>
					<ul>
						<li><FaCheck /> Budget Management</li>
						<li><FaCheck /> Identify critical tasks</li>
						<li><FaCheck />Create, assign and track</li>
					</ul>
					<Link to="/projects">
						<button>
							<FaPlus/>
							Get Started
						</button>
					</Link>
				</div>
				<img src="/logo.png" alt="Logo"/>
			</section>
		</div>
	)
}

export default Home

