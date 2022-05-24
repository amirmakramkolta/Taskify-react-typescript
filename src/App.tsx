import InputField from './components/Input/InputField';
import './App.css';
import React, { useState } from 'react';
import { Todo } from './models/model';

function App() {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd: (e:React.FormEvent) => void = (e)=>{
    e.preventDefault();
    if(todo){
      setTodos((prevState:Todo[])=>{
        return (
          [
            ...prevState,
            {
              id:Date.now(),
              todo,
              done:false
            }
          ]
        )
      })
      setTodo("");
    }
  }
  return (
    <div className="App">
      <h1 className='heading'>taskify</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    </div>
  );
}

export default App;
