import {Fragment, useState} from 'react'

function EditTodos({todo}) {

  const editText = async (id) =>{
    try{
      const body = {description}
      const response = await fetch(`http://localhost:5000/todos/${id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
      })
      setDescription(description)
      window.location = '/';
    }catch(err){
      console.log(err)
    }
  }

  const [description, setDescription] = useState(todo.description)
  return (
    <Fragment>
<button 
  type="button" 
  className="btn btn-warning" 
  data-toggle="modal" 
  data-target={`#id${todo.todo_id}`}
  >
  Edit
</button>

<div className="modal" id={`id${todo.todo_id}`} onClick={()=>setDescription(todo.description)}>
  <div className="modal-dialog">
    <div className="modal-content">

      <div className="modal-header">
        <h4 className="modal-title">Edit Todo</h4>
        <button type="button" className="close" data-dismiss="modal" onClick={()=>setDescription(todo.description)}>&times;</button>
      </div>

    <div className="modal-body">
      <input 
        type="text"
        value={description}
        className='form-control'
        onChange={e => setDescription(e.target.value)}
        />
        
    </div>

      <div className="modal-footer">
      <button type="button" className="btn btn-warning" data-toggle="modal" data-target="#myModal"   onClick={()=>editText(todo.todo_id)}>
        Edit
      </button>
        <button type="button" className="btn btn-danger" data-dismiss="modal" onClick={()=>setDescription(todo.description)}>Close</button>
      </div>

    </div>
  </div>
</div>
    </Fragment>
  )
}

export default EditTodos