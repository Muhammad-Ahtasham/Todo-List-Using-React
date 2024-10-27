import './App.css';
import Header from './MyComponents/Header';
import {Footer} from './MyComponents/Footer';
import {Todos} from './MyComponents/Todos';
import { AddTodo } from './MyComponents/AddTodo';
import React, { useState } from "react";


function App() {
  const onDelete = (todo) => {
    console.log('i am delete of todo ', todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  const [todos, setTodos] = useState([
    {
      sno:1, 
      title: "Go to Market 1", 
      desc: "Need to go to market to buy vegetables1"
    }, 
    {
      sno:2, 
      title: "Go to Market 2", 
      desc: "Need to go to market to buy vegetables2"
    }, 
    {
      sno:3, 
      title: "Go to Market 3", 
      desc: "Need to go to market to buy vegetables3"
    }
  ]);

  return (
    <>
      <Header title = "MyToDoList" searchBar={false}/>
      <AddTodo/>
      <Todos todos = {todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
