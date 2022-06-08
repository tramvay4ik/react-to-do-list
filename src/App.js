import React, { useState } from 'react';
import data from "./data.json";
//components
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import ToDoForm from './components/ToDoForm';
 
import './App.css';
 
function App() {
    const [ toDoList, setToDoList ] = useState(data);

    const handleToggle = (id) => {
        let mapped = toDoList.map(task => {
            return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
        });
        setToDoList(mapped);
    }

    const handleFilter = () => {
        let filtered = toDoList.filter(task => {
            return !task.complete;
        });
        setToDoList(filtered);
    }

    const addTask = (userInput ) => {
        let copy = [...toDoList];
        copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
        setToDoList(copy);
      }

    return (
        <div className="App">
            <Header />
            <ToDoList toDoList={toDoList} handleFilter={handleFilter} handleToggle={handleToggle} />
            <ToDoForm addTask={addTask}/>
        </div>
    );
}
 
export default App;