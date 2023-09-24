import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/home/Home';
import AboutProject from '../pages/aboutProject/AboutProject';
import Contact from '../pages/contact/Contact';
import Projects from '../pages/projects/Projects';
import NewProject from '../pages/newProject/NewProject';
import Project from '../pages/project/Project';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutproject" element={<AboutProject />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/newproject" element={<NewProject/>} />
            <Route path="/project/:id" element={<Project/>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}