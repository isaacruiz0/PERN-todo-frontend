import React, {Fragment, useState} from "react";

function InputTodos() {
const [description, setDescription] = useState("");

  return (
    <div>
        <h1 className="text-center my-5">Input Todo</h1>
        <form className="d-flex">
            <input type="text" placeholder='Add Todo' className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
            <button className="btn btn-success">
               Add
           </button>             
        </form>

    </div>


  )
}

export default InputTodos