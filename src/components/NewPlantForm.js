import React, { useState } from "react";

function NewPlantForm({ addPlantToState }) {

  // why do three states & three setters when we could only do one?
  // const [ name, setName ] = useState( '' )  
  // const [ image, setImage ] = useState( '' )  
  // const [ price, setPrice ] = useState( '' )
  
  // const handleName = e => setName( e.target.value )
  // const handleImage = e => setImage( e.target.value )
  // const handlePrice = e => setPrice( e.target.value )

  const [ form, setForm ] = useState( {} )

  const handleForm = e => {
    setForm( form => {

      return { ...form, [e.target.name]: e.target.value }

    } )
  }

  


  const handleSubmit = e => {
    e.preventDefault()
    
    // OLD VERSION WHEN EACH INPUT HAD ITS OWN LISTENER
    //
    // const newPlant = {
    //   id: Math.floor( Math.random() * 8768976987 ), // random id to avoid 
    //   name: name,                                   // "no key" error in 
    //   image: image,                                 // console
    //   price: price
    // }
    /* newPlant could of been written as:
          const newPlant = { name, image, price } 
       because the keys in the object point to variables of the same name
    */

    addPlantToState( form )
    
    e.target.reset()
  
  } // end of handleSubmit


  // handleForm replaced the three input listeners
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={ handleSubmit } >
        <input onChange={ handleForm } type="text" name="name" placeholder="Plant name" />
        <input onChange={ handleForm }type="text" name="image" placeholder="Image URL" />
        <input onChange={ handleForm }type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;