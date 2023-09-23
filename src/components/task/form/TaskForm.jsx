import { useEffect, useState } from 'react'

import Select from '../../form/select/Select';
import Input from '../../form/input/Input';
import SubmitButton from '../../form/submitButton/SubmitButton';

const TaskForm = ( { handleSubmit, textBtn, Icon, projectData } ) => {
    const [task, setTask] = useState({})
    const [status, setStatus] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/status', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((res) => res.json())
        .then((data) => {
            setStatus(data);
        })
        .catch((err) => console.error(err));
    }, []);

    function submit(e) {
        e.preventDefault();
        projectData.tasks.push(task);
        handleSubmit(projectData);
    }

    function handleChange(e) {
        setTask({ ...task, [e.target.name]: e.target.value})
    }

    function handleStatus(e) {
        setTask({
            ...task,
            status: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text
            }, 
        });
    };

    return (
        <form onSubmit={submit}>
            <Input
                type={"text"}
                placeholder={"Enter task name..."}
                name={"name"}
                id={"name"}
                text={"Task name"}
                handleOnChange={handleChange}
            />

            <Input
                type={"text"}
                placeholder={"Enter task description..."}
                name={"description"}
                id={"description"}
                text={"Task description"}
                handleOnChange={handleChange}
            />

            <Input
                type={"date"}
                placeholder={"Enter task deadline..."}
                name={"deadline"}
                id={"deadline"}
                text={"Task deadline"}
                handleOnChange={handleChange}
            />

            <Select
                text={"Task status"}
                name={"status"}
                options={status}
                handleOnChange={handleStatus}
                value={task.status ? task.status.id : ''} 
            />
            <SubmitButton text={textBtn} Icon={Icon}/>
        </form>
    );
}

export default TaskForm