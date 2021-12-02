import "./Form.scss"
import Swal from 'sweetalert2'
import { v4 as uuidv4 } from 'uuid'
import { useForm } from "../../hooks/useForm";

export default function Form({ agregarTodo }) {

   const initialState = {
      nombre: '',
      descripcion: '',
      estado: 'pendiente',
      prioridad: false,
   };

   const [inputs, handleChange, reset] = useForm(initialState);

   const { nombre, descripcion, estado, prioridad } = inputs;

   const handleSubmit = e => {
      e.preventDefault();

      // Validation

      if (!nombre.trim()) {
         e.target[0].focus();
         Swal.fire({
            title: 'Error!',
            text: 'Ingrese un nombre de tarea',
            icon: 'error',
            confirmButtonText: 'Aceptar'
         })
         return;
      }
      if (!descripcion.trim()) {
         e.target[1].focus();
         Swal.fire({
            title: 'Error!',
            text: 'Ingrese una descripcion',
            icon: 'error',
            confirmButtonText: 'Aceptar'
         })
         return;
      }
      Swal.fire({
         title: 'Perfecto!',
         text: 'La tarea fue agregada con exito',
         icon: 'success',
         confirmButtonText: 'Aceptar'
      })

      agregarTodo({
         nombre,
         descripcion,
         estado: estado === 'pendiente' ? false : true,
         prioridad,
         id: uuidv4()
      })

      reset();
   }

   return (
      <div className="container-form">

         <form onSubmit={handleSubmit} className="form">
            <h2>Nueva Tarea</h2>
            <hr />
            {/* input text */}
            <input 
               type="text" 
               placeholder="Ingrese una tarea"
               name="nombre"
               onChange={handleChange}
               value={nombre} // Cuando uso onChange necesito value
               />
            {/* input textarea */}
            <textarea 
               name="descripcion" 
               placeholder="Ingrese una descripcion"
               onChange={handleChange}
               value={descripcion}
            />
            {/* input select */}
            <div className="container-items">
               <select 
                  name="estado"
                  onChange={handleChange}
                  value={estado}
               >
                  <option value="pendiente">Pendiente</option>
                  <option value="completada">Completada</option>
               </select>
               {/* input checkbox */}
               <div className="input-checkbox">
                  <input
                     id="checkPrio"
                     type="checkbox" 
                     name="prioridad"
                     onChange={handleChange}
                     checked={prioridad}
                  />
                  <label htmlFor="checkPrio">Dar prioridad</label>
               </div>
            </div>
            {/* input submit */}
            <button type="submit" className="submit">Agregar Tarea</button>
         </form>
      </div>
   )
}