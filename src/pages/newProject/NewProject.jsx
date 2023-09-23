import { useNavigate } from 'react-router-dom';
import ProjectForm from '../../components/project/form/ProjectForm'
import './NewProject.css'

import { FaPlus } from 'react-icons/fa6'

const NewProject = () => {

    const navigate = useNavigate();

    function createPost(project){
        project.cost = 0;
        project.services = [];
        project.tasks = [];

        fetch('http://localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project)
        })
      .then(res => res.json())
      .then((data) => {
        console.log(data)
        navigate('/projects', {state:{text: 'Project created successfully!'}})
      })
      .catch((err) => console.log(err))
    }

    return (
        <div className='main'>
            <div className='new-project'>
                <section className='new-project-container'>
                    <h1>Create Project</h1>
                    <ProjectForm handleSubmit={createPost} btnText={"Create project"} Icon={FaPlus}/>
                </section>
            </div>
        </div>
    )
}

export default NewProject