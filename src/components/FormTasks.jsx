import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'; // uuidv4(); ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

export const FormTasks = ({tasks, changeTasks}) => {
    const [inputTask, ChangeInputTask] = useState('')

    const handleInput = (e) => {
        ChangeInputTask(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputTask === ''){
            return
        }

        changeTasks([
            ...tasks, 
            {
                id:uuidv4(),
                text:inputTask,
                completed:false
            }        
        ])
        
        ChangeInputTask('')
    }
    
    return (
        <form action='' className='form-tasks' onSubmit={(e) => handleSubmit(e)}>
            <input 
                type='text' 
                placeholder='Type one task here'
                className='form-tasks__input' 
                value={inputTask}
                onChange={(e) => handleInput(e)}
            />
            <button 
                type='submit'
                className='form-tasks__btn'
            >
            <FontAwesomeIcon 
                icon={faPlusSquare} 
                className='form-tasks__icon-btn' 
            />
            </button>
        </form>
    )
}
