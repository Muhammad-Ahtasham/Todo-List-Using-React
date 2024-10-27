import './App.css';
import Header from './MyComponents/Header';
import {Footer} from './MyComponents/Footer';
import {Todos} from './MyComponents/Todos';
import { AddTodo } from './MyComponents/AddTodo';
import React, { useState } from "react";


function App() {

  const addTodo = (title, desc)=>{
   
    console.log("added the todo of title ", title, " desc of ", desc);
    let sno;
    if(todos.length == 0){
      sno = 0;
    }
    else{
      sno = todos[todos.length-1].sno + 1;
    }
    const myTodo = {
      sno: sno, 
      title: title, 
      desc: desc
    }
    setTodos([...todos, myTodo])
    console.log(myTodo)
  }
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
      <AddTodo addTodo = {addTodo}/>
      <Todos todos = {todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
