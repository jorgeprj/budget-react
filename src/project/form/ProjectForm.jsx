import { useEffect, useState } from 'react';
import Input from '../../components/form/input/Input';
import Select from '../../components/form/select/Select';
import SubmitButton from '../../components/form/submit-button/SubmitButton';

import './ProjectForm.css';

const ProjectForm = ( { handleSubmit, projectData }) => {
    const [tags, setTags] = useState([]);
    const [priorities, setPriorities] = useState([]);
    const [project, setProject] = useState(projectData || {});

    useEffect(() => {
        fetch('http://localhost:5000/tags', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((res) => res.json())
        .then((data) => {
            setTags(data);
        })
        .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/priorities', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
       .then((res) => res.json())
       .then((data) => {
            setPriorities(data);
        })
       .catch((err) => console.error(err));
    }, []);

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(project);
    };

    function handleChange(e) {
        setProject({...project, [e.target.name]: e.target.value});
        console.log(project);
    };

    function handleTag(e) {
        setProject({
            ...project,
            tag: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text
            }, 
        });
    };

    function handlePriority(e) {
        setProject({
            ...project,
            priority: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text
            }, 
        });
    };

    return (
        <div className="project-form">
            <form onSubmit={submit}>
                <Input type="text" 
                       text="Name" 
                       name="name" 
                       placeholder="Enter project name..." 
                       handleOnChange={handleChange}
                       value={project.name ? project.name : ""}
                /> 
                <Input type="text" 
                       text="Description" 
                       name="description" 
                       placeholder="Enter project description..." 
                       handleOnChange={handleChange}
                       value={project.description ? project.description : ""}
                />
                <Select name="priority_id" 
                        text="Select project priority" 
                        options={priorities} 
                        handleOnChange={handlePriority}
                        value={project.priority ? project.priority.id : ''}  
                />
                <Input type="number" 
                       text="Budget" 
                       name="budget" 
                       placeholder="Enter total project budget..." 
                       handleOnChange={handleChange}
                       value={project.budget ? project.budget : ""}
                />
                
                <Input type="date" 
                       text="Deadline" 
                       name="deadline" 
                       placeholder="Enter project deadline..." 
                       handleOnChange={handleChange}
                       value={project.deadline ? project.deadline : ""}
                />
                
                <Select name="tag_id" 
                        text="Select project tag" 
                        options={tags} 
                        handleOnChange={handleTag} 
                        value={project.tag ? project.tag.id : ''} 
                />
                <SubmitButton text="Create project" />
            </form>
        </div>
    )
}

export default ProjectForm