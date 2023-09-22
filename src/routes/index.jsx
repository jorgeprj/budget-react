import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/home/Home';
import Company from '../pages/company/Company';
import Contact from '../pages/contact/Contact';
import Projects from '../pages/projects/Projects';
import NewProject from '../pages/newProject/NewProject';
import Project from '../pages/project/Project';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/company" element={<Company />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/newproject" element={<NewProject/>} />
            <Route path="/project/:id" element={<Project/>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}