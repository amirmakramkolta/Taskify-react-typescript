import React from "react";
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
    function handlerDone(id:number) {
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
    return (
        <form className="todos-single">
            <span className="todos-single-text" style={todo.done?{textDecoration:"line-through"}:{textDecoration:"none"}}>{todo.todo}</span>
            <div>
                <span className="todos-single-icons"><AiFillEdit /></span>
                <span className="todos-single-icons"><AiFillDelete /></span>
                <span className="todos-single-icons" onClick={()=>{handlerDone(todo.id)}}><MdDone /></span>
            </div>
        </form>
    )
}

export default SingleToDo;

