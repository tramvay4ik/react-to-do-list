import React, { useState } from 'react';
import data from "./data.json";
//components
import ToDoList from "./components/ToDoList";
import ToDoForm from './components/ToDoForm';
 
import './App.scss';
 
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
            <header>
                <h1>To Do List</h1>
            </header>
            <main>
                <ToDoList toDoList={toDoList} handleFilter={handleFilter} handleToggle={handleToggle} />
            </main>
            <footer>
                <ToDoForm addTask={addTask}/>
            </footer>
        </div>
    );
}
 
export default App;