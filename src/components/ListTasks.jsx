import { Task } from './Task';

export const ListTasks = ({tasks, changeTasks, showCompletedTasks}) => {
    
    const toggleCompleted = (id) => {
        
        changeTasks(tasks.map(task => {
            if(task.id === id){
                return {...task, completed: !task.completed}
            }
            return task;
        }))
    }

    const editTasks = (id, newTask) => {
        
        changeTasks(tasks.map(task => {
            if(task.id === id){
                return {...task, text: newTask}
            }
            return task;
        }))
    }

    const removeTask = (id) => {
        
        changeTasks(tasks.filter(task => {
            return task.id !== id
            // if(task.id !== id){
            //     return task;
            // }
            // return;
        }))
    }


    return (
        <ul className='list-tasks'>
            {
            tasks.length > 0 ? tasks.map(task => {
                if(showCompletedTasks){
                // component Task
                return <Task 
                            key={task.id} 
                            task={task}
                            toggleCompleted={toggleCompleted}
                            editTasks={editTasks}
                            removeTask={removeTask}
                        />
                }
                else if(!task.completed){
                return  <Task 
                            key={task.id} 
                            task={task}
                            toggleCompleted={toggleCompleted}
                            editTasks={editTasks}
                            removeTask={removeTask}
                         />
                }
                // return
            })
            : <div className='list-tasks__message'>~No Have Any Task in Your List!~</div>
            }
        </ul>
    )
}
