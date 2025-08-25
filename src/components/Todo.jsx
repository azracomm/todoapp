import React, { useState } from 'react'
import { IoMdRemoveCircle } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import '../css/todo.css'
import { FaCheck } from "react-icons/fa";

function Todo({ todo, onremoveTodo, onUpdateTodo }) {
    const { id, content } = todo;
    const [editable, setEditable] = useState(false);
    const [newTodo, setNewTodo] = useState(content);

    const removeTodo = () => {
        onremoveTodo(id);
    }
    const updateTodo = () => {
        const request = {
            id: id,
            content: newTodo
        }
        onUpdateTodo(request);
        setEditable(false);

    }

    return (
        <div className='todolist' style={{ flexDirection: "row", display: "flex", justifyContent: "space-between", border: "1px solid grey", backgroundColor: "white", padding: "10px", marginTop: "10px" }}>
            <div>
                {
                    editable ? <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)}
                        className='todo-input' type='text' style={{ width: "400px" }} /> : content
                }
            </div>
            <div className='todo-icons'>
                <IoMdRemoveCircle onClick={removeTodo} />
                {
                    editable ? <FaCheck className='todo-icons'
                        onClick={updateTodo} /> : <MdEdit className='todo-icons' onClick={() => setEditable(true)} />
                }
            </div>

        </div>
    )
}

export default Todo
