import ProjectForm from '../project/ProjectForm'
import './NewProject.css'

const NewProject = () => {
    return (
        <div className='main'>
            <div className='new-project'>
                <section className='new-project-container'>
                    <h1>Create Project</h1>
                    <ProjectForm/>
                </section>
            </div>
        </div>
    )
}

export default NewProject