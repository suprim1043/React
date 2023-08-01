import React from 'react'
import {useState} from "react"

import "./App.css";

export const Wrapper = () => {
    const [newItem, setItem] = useState("")
    const [data, setData] = useState([])

    function handleSubmit(e) {
        e.preventDefault()

        setData(current => {
            return [
                ...current, {id : crypto.randomUUID(), title : newItem, completed:false },
            ]
        })
            setItem("")
            
    }

    function Checked(id, completed){
        setData(current => {
            return current.map(todo => {
                    if(todo.id === id){
                    return { ...todo, completed}
                }
                
       return todo
        })
    })
}

    function deleteData(id){
        setData(current =>{
            return (current.filter(data => data.id !== id))
        })
    }

    return (
    <>
   <div class="container">
        <h1>Tasks</h1>
        <form id="todoForm" onSubmit = {handleSubmit}>
            <input type="text" id="taskInput" value = {newItem} onChange = {e => setItem(e.target.value)} placeholder="Enter your task..." autocomplete="off" />
            <button type="submit">Add</button>
        </form>
       <ul id="taskList">

        {data.length === 0
        && <div className='clean'> No tasks yet</div>
        }
            {data.map (data=>
            {
                return    <li key= {data.id}>
                <div class="checkbox-container">
                    <input type="checkbox" class="checkbox" checked={data.completed} 
                    onChange = {e => Checked(data.id, e.target.checked)}
                    />
                    <span class="task-text">{data.title}</span>
                </div>
                <button class="delete-btn" onClick={() => deleteData(data.id)}>Delete</button>
            </li>
            }
            )

            }</ul>
         
      
    </div>
    </>
  )
}

