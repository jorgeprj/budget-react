import Input from '../components/form/Input';
import Select from '../components/form/Select';
import SubmitButton from '../components/form/SubmitButton';
import './ProjectForm.css';

const ProjectForm = () => {
    return (
        <div className="project-form">
            <form>
                <Input type="text" text="Name" name="name" placeholder="Enter project name..."/> 
                <Input type="text" text="Description" name="description" placeholder="Enter project description..."/>
                <Select name="priority_id" text="Select project priority" />
                <Input type="number" text="Budget" name="budget" placeholder="Enter total project budget..."/>
                <Input type="date" text="Deadline" name="deadline" placeholder="Enter project deadline..."/>
                <Select name="tag_id" text="Select project tag" />
                <SubmitButton text="Create project" />
            </form>
        </div>
    )
}

export default ProjectForm