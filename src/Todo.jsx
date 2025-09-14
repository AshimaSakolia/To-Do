import React,{useState} from 'react';


function Todolist(){
const[tasks,setTasks]=useState(["Eat a breakfast","Exercise"]);
const[newTask,setNewTask]=useState("");
function handleNewTask(event){
setNewTask(event.target.value)
}
function addTask(){
if(newTask.trim()!==""){
    setTasks(t=>[...t,newTask]);
    setNewTask("");
}
}
function deleteTask(index){
const updatedTasks=tasks.filter((_,i)=>i!==index);
setTasks(updatedTasks);
}
function moveTaskUp(index){
if(index>0){
    const updatedTasks=[...tasks];
    [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
    setTasks(updatedTasks);
}
}
function moveTaskDown(index){
if(index < tasks.length-1){
    const updatedTasks=[...tasks];
    [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
    setTasks(updatedTasks);
}}
return( 
    <div className="to-do-list">
        <h1>TO-DO-LIST!</h1>
        <br/><h6>You can do it!</h6>
<div className='internal'>
    <input type="text" className="newtask" placeholder="Enter a task" value={newTask} onChange={handleNewTask}/>
    <button className="add-button" onClick={addTask}>Add</button>
</div>
<ol>
    {tasks.map((task,index)=>
  <li key={index}>
    <span className='text'>{task}</span> 
    <div class="buttons">
    <button className="delete-btn" onClick={()=>deleteTask(index)}>Delete</button>
    <button className="move-btn" onClick={()=>moveTaskUp(index)}>Up</button>
    <button className="move-btn" onClick={()=>moveTaskDown(index)}>Down</button></div>
  </li>  
    )}
</ol>
    </div>

 
)
}
export default Todolist;