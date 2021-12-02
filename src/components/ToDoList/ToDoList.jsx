import "./ToDoList.scss"
import { useEffect, useState } from "react";
import Form from "../Form/Form";
import ToDo from "../ToDo/ToDo";

export default function ToDoList() {
   const [todos, setTodos] = useState([]);

   useEffect(() => {
      if(localStorage.getItem('todos')) {
         setTodos(JSON.parse(localStorage.getItem('todos')));
      }
   }, []);

   useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
   }, [todos]);

   const agregarTodo = todo => {
      setTodos((old) => [...old, todo])
   }

   const eliminarTodo = id => {
      setTodos((old) => old.filter(item => item.id !== id))
   }

   const editarTodo = id => {

      const editarTodos = todos.map(item => (
         item.id === id ? {...item, estado: !item.estado} : item
      ))

      setTodos(editarTodos);
   }

   return (
      <div className="ui">
         <Form agregarTodo={ agregarTodo } />
         <ul className="container-list">
            {
               todos.map(item => (
                  <ToDo 
                     key={item.id} 
                     todo={item} 
                     eliminarTodo={eliminarTodo}
                     editarTodo={editarTodo} 
                  />
               ))
            }
         </ul>
      </div>
   )
}