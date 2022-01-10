import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; 

export const Header = ({showCompletedTasks, toggleCompleted}) => {

    const toggle = () => {
        toggleCompleted(!showCompletedTasks)
    }

    return (
        <div className='header'>
            <h1 className='header__title'>To-Do List</h1>
            {showCompletedTasks ? 
                <button 
                    type='button' 
                    className='header__btn'
                    onClick={( ) => toggle()}
                >
                    Hide completed tasks
                    <FontAwesomeIcon icon={faEye} className='header__icon-btn'/>
                </button>
            :
                <button 
                    type='button' 
                    className='header__btn'
                    onClick={( ) => toggle()}
                >
                    Show completed tasks
                    <FontAwesomeIcon icon={faEyeSlash} className='header__icon-btn'/>
                </button>
            }
        </div>
    )
}
