import './Card.css'

import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'

const Card = ({ service, task, addCard, setForm, text, handleService, handleTask }) => {

    const removeService = (e) => {
        e.preventDefault(e);
        handleService(service.id, service.cost)
    }

    const removeTask = (e) => {
        e.preventDefault(e);
        handleTask(task.id)
    }


    let costDollars = ""

    if (service) {
        costDollars = `$${parseFloat(service.cost).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`
    }

    function getDate(deadline) {
        const dataDeadline = new Date(deadline);

        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];

        const day = dataDeadline.getDate();
        const month = months[dataDeadline.getMonth()];
        const year = dataDeadline.getFullYear();

        return `${day} ${month} ${year}`;
    }

    return (
        <div>
            {addCard &&
                <div>
                    <div className='add-card'>
                        <div className='add-card-text' onClick={() => setForm(true)}>
                            + Add {text}
                        </div>
                    </div>
                </div>
            }

            {service &&
                <div className='card'>
                    <div className='card-name'>
                        {service.name}
                        <div className='card-options'>
                            <AiOutlineEdit />
                            <AiOutlineDelete onClick={removeService}/>
                        </div>
                    </div>
                    <div className='card-description'>
                        {service.description}
                    </div>
                    <div className='card-cost'>
                        Total cost: <span>{costDollars}</span>
                    </div>

                </div>
            }

            {task &&
                <div className='card'>
                    <div className='card-status'>
                        <div className={`card-status-icon ${task.status?.name}`}></div>
                        {task.status?.name}
                    </div>
                    <div className='card-name'>
                        {task.name}
                        <div className='card-options'>
                            <AiOutlineEdit />
                            <AiOutlineDelete onClick={removeTask} />
                        </div>
                    </div>
                    <div className='card-description'>
                        {task.description}
                    </div>
                    <div className='card-date'>
                        Deadline: <span>{getDate(task.deadline)}</span>
                    </div>

                </div>
            }



        </div>



    )
}

export default Card