import React, {Fragment, useState} from "react";

function InputTodos() {
    const [description, setDescription] = useState("");

    const onSubmitForm = async (e) =>{
        e.preventDefault();

        try {
            const body = {description}
            const response = await fetch("http://localhost:5000/todos", 
            {method: "POST",
             headers: { "Content-Type": "application/json"},
             body: JSON.stringify(body)
            })
            setDescription("")

            console.log(response)
        }catch(err){
            console.log(err)
        }

    }


    return (
    <div>
        <h1 className="text-center my-5">Input Todo</h1>
        <form className="d-flex" onSubmit={onSubmitForm}>
            <input type="text" placeholder='Add Todo' className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
            <button className="btn btn-success">
                Add
            </button>             
        </form>

    </div>


    )
}

export default InputTodos