import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { RxDashboard, RxLaptop, RxArchive, RxChatBubble } from 'react-icons/rx';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'

import './Sidebar.css';

const links = [
	{ to: '/', icon: <RxDashboard />, text: 'Home' },
	{ to: '/projects', icon: <RxLaptop />, text: 'Projects' },
	{ to: '/company', icon: <RxArchive />, text: 'Company' },
	{ to: '/contact', icon: <RxChatBubble />, text: 'Contact' },
];

const Sidebar = () => {
	const location = useLocation();

	return (
		<div>
			<div className='sidebar'>
				<div className='sidebar-header'>
					<div className='sidebar-logo'>
						<img src='../public/logo.png' alt='logo' />
						<span className='sidebar-logo-text'>Taskee</span>
					</div>
				</div>

				<div className='sidebar-links'>
					{links.map((link, index) => (
						<Link key={index} to={link.to}>
							<div className={`sidebar-link ${location.pathname === link.to ? 'active' : ''}`}>
								{link.icon}
								<span>{link.text}</span>
							</div>
						</Link>
					))}
				</div>

				<div className='sidebar-rights'>
					<div className='sidebar-rights-text'>
						<div className='sidebar-icons'>
							<span><FaFacebookF/></span>
							<span><FaInstagram/> </span>
							<span><FaLinkedinIn/></span>
						</div>
						<span style={{marginBottom: '1em'}}>www.budget.com</span>
						<span>&copy; 2023 | All Rights Reserved</span>
					</div>
				</div>

			</div>
		</div>
	);
};

export default Sidebar;