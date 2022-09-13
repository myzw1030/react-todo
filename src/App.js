import React, { useState } from "react";
import "./styles.css";

export const App = () => {
    const [todoText, setTodoText] = useState('');
    const [incompleteTodos, setincompleteTodos] = useState([
        'ああああ', 'いいいい'
        ]);
    const [completeTodos, setcompleteTodos] = useState([
        'うううう'
    ]);
    
    const onChangeTodoText = (event) => setTodoText(event.target.value);
    
    const onClickAdd = () => {
        if (todoText === "") return;
        const newTodos = [...incompleteTodos, todoText];
        setincompleteTodos(newTodos);
        setTodoText("");
    };
    
  return (
    <>
        <div className="input-area">
            <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText}　/>
            <button onClick={onClickAdd}>追加</button>
        </div>
        <div className="imcomplete-area">
            <p className="title">未完了のTODO
            </p>
            <ul>
                {incompleteTodos.map((todo) => {
                    return (
                        <li key={todo} className="list-row">
                            <p className="text">{todo}</p>
                            <button>完了</button>
                            <button>削除</button>     
                        </li>
                    );
                })}
            </ul>

        </div>
        <div className="complete-area">
            <p className="title">完了のTODO
            </p>
            <ul>
                {completeTodos.map((todo) => {
                    return(
                        <li key={todo} className="list-row">
                            <p className="text">{todo}</p>
                            <button>戻す</button>  
                        </li> 
                    );
                })}
            </ul>
        </div>
    </>
  );
};
