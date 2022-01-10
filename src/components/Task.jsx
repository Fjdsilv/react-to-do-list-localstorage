import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

export const Task = ({task, toggleCompleted, editTasks, removeTask}) => {
    const [editTask, changeEditTask] = useState(false)
    const [newTask, changeNewTask] = useState(task.text)

    const handleSubmit = (e) => {
        e.preventDefault()
        editTasks(task.id, newTask)
        changeEditTask(!editTask)
    }

    return (
        <li className='list-tasks__task'>
            <FontAwesomeIcon 
                icon={task.completed ? faCheckSquare : faSquare}
                className='list-tasks__icon list-tasks__icon-check'
                onClick={() => toggleCompleted(task.id)}
            />
            <div className='list-tasks__text'>
                {
                // edit task conditional ternary
                editTask ? 
                // edit task conditional ternary form edit
                <form 
                    action='' 
                    className='form-edit-task'
                    onSubmit={handleSubmit}
                >
                    <input 
                        type='text'
                        className='form-edit-task__input'
                        value={newTask}
                        onChange={(e) => changeNewTask(e.target.value)}
                    />
                    <button 
                        type='submit' 
                        className='form-edit-task__btn'
                        onClick={() => editTasks()}
                    >
                        Update
                    </button>    
                </form>
                // edit task conditional ternary fish form edit
                :
                task.text
                }
            </div>
            <div className='list-tasks__container-btn'>
                <FontAwesomeIcon 
                    icon={faEdit}
                    className='list-tasks__icon list-tasks__icon-action'
                    onClick={() => changeEditTask(!editTask)}
                />
                <FontAwesomeIcon 
                    icon={faTimes}
                    className='list-tasks__icon list-tasks__icon-action'
                    onClick={() => removeTask(task.id)}
                />
            </div>
        </li>
    )
}
