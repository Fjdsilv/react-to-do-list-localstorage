import React, { useState, useEffect } from 'react';
import './App.css';
import { Header } from './components/Header';
import { FormTasks } from './components/FormTasks';
import { ListTasks } from './components/ListTasks';

function App() {

  // Get Tasks storage in localStorage
  const tasksStorage = 
  localStorage.getItem('tasks') ? 
  JSON.parse(localStorage.getItem('tasks')) : []

  // hold localStore tasks in state
  const [tasks, changeTasks] = useState(tasksStorage); 

  // Add tasks in localStora
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])

  let confshowCompletedTasks = '';
  if(localStorage.getItem('showCompletedTask') === null){
    confshowCompletedTasks = true;
  }else{
    confshowCompletedTasks = localStorage.getItem('showCompletedTask') === 'true';
  }

  const [showCompletedTasks, toggleCompleted] = useState(confshowCompletedTasks)

  useEffect(() => {
    localStorage.setItem('showCompletedTask', showCompletedTasks.toString())
  }, [showCompletedTasks])

  return (
    <div className="container">
    <Header
      showCompletedTasks={showCompletedTasks}
      toggleCompleted={toggleCompleted}
    />
    <FormTasks 
      tasks={tasks} 
      changeTasks={changeTasks}
    />
    <ListTasks 
      tasks={tasks} 
      changeTasks={changeTasks}
      showCompletedTasks={showCompletedTasks}
    /> 
    </div>
  );
}

export default App;
