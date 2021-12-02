import "./ToDo.scss"

const ToDo = ({ todo, eliminarTodo, editarTodo }) => {
   const { id, nombre, descripcion, estado, prioridad } = todo;

   return (
      <li className="container-li">
         <div className="taskname-box">
            <h2>{nombre}</h2>
            <p>{estado ? 'Finalizado' : 'Pendiente'}</p>
         </div>
         <div className="taskdesc-box">
            <p>{descripcion}</p>
            <p className="prio">{prioridad && 'Prioritario'}</p>
         </div>
         <div className="buttons">
            <button onClick={() => { eliminarTodo(id) }}>Eliminar</button>
            <button onClick={() => { editarTodo(id) }}>Finalizar</button>
         </div>
      </li>
   )
}

export default ToDo
