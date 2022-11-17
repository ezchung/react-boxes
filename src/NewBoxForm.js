import React, { useState } from "react";
import './NewBoxForm.css';


function NewBoxForm({ addBox }) {
    const initialFormInput = {
        backgroundColor : "",
        height: "",
        width: "",
    };

    const [formData, setFormData] = useState(initialFormInput);
    console.log(formData, "<<<<<<<<<formData");

    function handleChange(evt){
        const {name, value} = evt.target;
        setFormData(fData => ({
            ...fData,
            [name] : value
        }));
    }

    // function handleDelete(evt){
    //     //Remove from box list
    //     //
    // }

    function handleSubmit(evt){
        evt.preventDefault();
        addBox(formData);
        setFormData(initialFormInput);
    }

  return (
    <div className="NewBoxForm">
        <form className="NewBoxForm-form" onSubmit={handleSubmit} >
            <label htmlFor="backgroundColor-input">Background Color: </label>
            <input 
                id="backgroundColor-input" 
                name="backgroundColor" 
                value={formData.value}
                onChange={handleChange}
            />
            <label htmlFor="height-input">Height: </label>
            <input 
                id="height-input" 
                name="height" 
                value={formData.value}
                onChange={handleChange}
            />
            <label htmlFor="width-input">Width: </label>
            <input 
                id="width-input" 
                name="width" 
                value={formData.value}
                onChange={handleChange}
            />

            <button>Add New Box!!!</button>
        </form>
    </div>
  );
}

export default NewBoxForm;

/**
 * Delete function on BoxList
 * create an object with that box removed
 * call useState state function and pass in the new object with existing boxes
 */