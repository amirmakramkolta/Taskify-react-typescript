import React,{FC , useRef} from 'react';
import './style.css';

interface Props{
    todo:string,
    setTodo: React.Dispatch<React.SetStateAction<string>>
    handleAdd: (event:React.FormEvent) => void
}

const InputField:FC<Props> = ({todo, setTodo, handleAdd}) => {
    const inputRefer = useRef<HTMLInputElement>(null)
    return (
        <form className='input' 
            onSubmit={(e)=>{
                    handleAdd(e);
                    inputRefer.current?.blur();
                }
            }
            >
            <input 
                type='input' 
                placeholder='Enter a task' 
                className='input-box' 
                value={todo} 
                onChange={e=>{setTodo(e.target.value)}}
                ref={inputRefer}
                />
            <button type='submit' className='input-submit'>Go</button>
        </form>
    )
}
export default InputField;
