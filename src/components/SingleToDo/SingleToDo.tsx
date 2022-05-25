import React, { useState } from "react";
import { Todo } from "../../models/model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md"
import "./style.css";

type Props = {
    todo:Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleToDo:React.FC<Props> = ({todo,todos,setTodos})=>{
    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo) 
    function handleDone(id:number) {
        setTodos(pre=>{
            return(pre.map(todo=>{
                if(todo.id===id){
                    return {...todo,done:!todo.done};
                }else{
                    return todo;
                }
            }))
        })
    }

    function handleDelete(id: number) {
        setTodos(pre=>pre.filter(todo=>todo.id!==id));
    }
    
    function handleEdit(e: React.FormEvent<HTMLFormElement>, id: number) {
        e.preventDefault()
        setTodos(pre=>{
            return pre.map(todo=>todo.id===id?{...todo, todo:editTodo}: todo)
        })
        setEdit(false);
    }

    return (
        <form className="todos-single" onSubmit={e=>{handleEdit(e, todo.id)}}>
            {
                edit?
                    <input type="text"
                    value={editTodo}
                    onChange={e=>{
                            setEditTodo(e.target.value)
                        }
                    }
                    />
                :
                    <span className="todos-single-text" style={todo.done?{textDecoration:"line-through"}:{textDecoration:"none"}}>{todo.todo}</span>

            }
            <div>
                <span className="todos-single-icons" onClick={()=>{
                    if(!todo.done&&!edit)
                        setEdit(true)
                }}><AiFillEdit /></span>
                <span className="todos-single-icons" onClick={()=>{handleDelete(todo.id)}}><AiFillDelete /></span>
                <span className="todos-single-icons" onClick={()=>{handleDone(todo.id)}}><MdDone /></span>
            </div>
        </form>
    )
}

export default SingleToDo;



