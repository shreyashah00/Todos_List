import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import React, { useState, useEffect } from 'react';
import { AddTodo } from './MyComponents/AddTodo';
import { About } from "./MyComponents/About";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  let initTodo;

  // Get todos from localStorage (corrected)
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }



  // Delete a todo
  const onDelete = (todo) => {
    console.log("Deleted item", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  // Add a new todo
  const addTodo = (title, desc) => {
    let sno = todos.length === 0 ? 0 : todos[todos.length - 1].sno + 1;
    const myTodo = {
      title: title,
      desc: desc,
      sno: sno,
    };
    console.log("I'm adding this todo", myTodo);
    setTodos([...todos, myTodo]);
  };
  // State for todos

  const [todos, setTodos] = useState(initTodo);

  // Save todos to localStorage whenever changed
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
    <Router>
  <Header title="My Todos list" searchBar={true} />
  
  <Routes>
    <Route
      path="/"
      element={
        <>
          <AddTodo addTodo={addTodo} />
          <Todos todos={todos} onDelete={onDelete} />
        </>
      }
    />
    <Route path="/about" element={<About/>} />
  </Routes>

  <Footer />
</Router>

    </>
  );
}

export default App;
