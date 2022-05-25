import React from 'react';
import { Todo } from '../../models/model';
import SingleToDo from '../SingleToDo/SingleToDo';
import './style.css';
interface Props{
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const ToDoList:React.FC<Props> = ({todos, setTodos})=>{
    const todosElements:React.ReactNode[] = todos.map(todo=>(
            <SingleToDo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
        )
    )
    return(
        <div className='todos'>
            {todosElements}
        </div>
    )
}

export default ToDoList;