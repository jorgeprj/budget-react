import { useState } from 'react';
import Input from '../../form/input/Input';
import SubmitButton from '../../form/submitButton/SubmitButton';

const ServiceForm = ( { handleSubmit, textBtn, Icon, projectData } ) => {

    const [service, setService] = useState({})

    function submit(e) {
        e.preventDefault();
        projectData.services.push(service);
        handleSubmit(projectData);
    }

    function handleChange(e) {
        setService({ ...service, [e.target.name]: e.target.value})
    }

    return (
        <form onSubmit={submit}>
            <Input
                type={"text"}
                placeholder={"Enter service name..."}
                name={"name"}
                id={"name"}
                text={"Service name"}
                handleOnChange={handleChange}
            />

            <Input
                type={"text"}
                placeholder={"Enter service description..."}
                name={"description"}
                id={"description"}
                text={"Service description"}
                handleOnChange={handleChange}
            />

            <Input
                type={"number"}
                placeholder={"Enter service cost..."}
                name={"cost"}
                id={"cost"}
                text={"Service cost"}
                handleOnChange={handleChange}
            />
            <SubmitButton text={textBtn} Icon={Icon}/>
        </form>
    )
}

export default ServiceForm