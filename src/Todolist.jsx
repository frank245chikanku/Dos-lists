
import React, { useState } from 'react'

function Todolist () {
    const [tasks, setTasks ] = useState(["Eat the food", "Walk the dog", "Take a shower", "Read a book"]);
    const [newTask, setNewTask ] = useState(""); 

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){

        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        const updateTasks = tasks.filter((_, i) => i !== index);
        setTasks(updateTasks);
    }

function moveTaskUp(index){
    if(index > 0){
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
        setTasks(updatedTasks);
    }
}
function moveTaskDown(index){
    if(index < tasks.length -1){
        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
        setTasks(updatedTasks);
    }
}

  return (
    <div className='to-do-list'>
        <h1>To-Do-List (Reactjs)</h1>
        <div className='input-add'>
            <input type="text" placeholder='Enter a task...' value={newTask} onChange={ handleInputChange} />
        <button className='add-button' onClick={addTask}>Add</button>
        </div>
        <div>
            {tasks.map((task, index) => 
            <li key={index}>
                <span className='text'>{task}</span>
                <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
                <button className='move-button' onClick={() => moveTaskUp(index)}>UP</button>
                <button className='move-button' onClick={() => moveTaskDown(index)}>Down</button>
            </li>
            )}
        </div> 
    </div>
  )
}

export default Todolist;