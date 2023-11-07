import { useState } from "react";

const tasks  = [
    {id:1, text:"Zadanie 1", completed: false},
    {id:2, text:"Zadanie 2", completed: true},
    {id:3, text:"Zadanie 3", completed: false},
]


const ToDo = () =>{
    const [todos, setToDos] = useState(tasks) ;

    const removeTasksHandler = (taskId)=>{
        setToDos(
            todos.filter( task => {
                return task.id !== taskId;
            })
        )
    }

    const addNewTaskHandler = () => {
        const newTask = {
            id: Math.random().toString(36).substring(7),
            text: "zupełnie nowe zadanie",
            completed: false,
        }
    
        setToDos([...todos, newTask ])
    
    }

    return(
        <div>
            <h1> Jestem ToDo </h1>
            <ul>
                {
                    todos.map( task => (
                        <li style={{color:"#023047", fontSize:"19px", marginBottom:"10px"}} key={task.id}>
                            {task.text}
                            <button style={ {marginRight:"10px", backgroundColor:"03045e"} }     onClick={()=> removeTasksHandler(task.id)}>usuń zadanie {task.id}</button>
                        </li>
                    ))
                }
            </ul>

            <button onClick={addNewTaskHandler}>Dodaj nowe zadanie </button>

        </div>
        
    );
}

export default ToDo;