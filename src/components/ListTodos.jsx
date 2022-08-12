import React, {Fragment, useState, useEffect} from 'react'
import EditTodos from './EditTodos'

function ListTodos() {
  const [todos, setTodos] = useState([])

  // Delete todo function
  const deleteTodo = async (id) =>{
    try{
      const response = await fetch(`http://localhost:5000/todos/${id}`,{
        method: "DELETE"
      })
      console.log(response)

      setTodos(todos.filter(todo => todo.todo_id !== id))
    }catch(err){
      console.log(err)
    }
  }

  // Get all todos
  const getTodos = async () =>{
    const response = await fetch("http://localhost:5000/todos")
    
    const todoArray = await response.json()

    setTodos(todoArray)

  }


  useEffect(()=>{
    getTodos()
  },[])
  
  return (
    <div>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">Description</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {
      todos.map(item => {
        return(
          <tr key = {item.todo_id}>
            <td>{item.description}</td>
            <td><EditTodos todo = {item}/></td>
            <td><button className='btn btn-danger' onClick={()=>deleteTodo(item.todo_id)}>Delete</button></td>
          </tr>
        )
      })
    }

  </tbody>
</table>
    </div>
  )
}

export default ListTodos