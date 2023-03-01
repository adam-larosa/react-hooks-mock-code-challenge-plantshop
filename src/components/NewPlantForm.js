import { useState } from "react";

function NewPlantForm({ addPlantToState }) {
  // change the dom, and change the backend
  // first things first, let's use the form to make a new plant object!

  // the shorthand for a form!  :)
  // const [ form, setForm ] = useState( {} )
  // const handleInput = e => {
  //   setForm( f => {
  //     return { ...f, [e.target.name]: e.target.value }
  //   })
  // }

  const [ newName, setName ] = useState( '' )
  const [ newImage, setImage ] = useState( '' )
  const [ newPrice, setPrice ] = useState( 0 )

  const handleName = e => setName( e.target.value )
  const handleImage = e => setImage( e.target.value )
  const handlePrice = e => setPrice( e.target.value )
  
  const handleSubmit = e => {
    e.preventDefault()

    const newPlant = {
      name: newName,
      image: newImage,
      price: newPrice
    }

    fetch( 'http://localhost:6001/plants', {
      method: 'POST', 
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( newPlant )
    } )
      .then( r => r.json() )
      .then( addPlantToState )
    e.target.reset()
  }





  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={ handleSubmit } >
        <input onChange={ handleName } type="text" name="name" 
          placeholder="Plant name" />
        <input onChange={ handleImage } type="text" name="image" 
          placeholder="Image URL" />
        <input onChange={ handlePrice } type="number" name="price" step="0.01" 
          placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
