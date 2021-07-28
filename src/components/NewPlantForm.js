import React, { useState } from "react";

function NewPlantForm({ setPlants }) {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState(0.01)

  const createNewPlant = e => {
    e.preventDefault()
    const newPlant = { name, image, price }
    fetch('http://localhost:3000/plants', {
      method: 'POST', headers: {
        'Content-Type': 'application/json'
      }, body: JSON.stringify(newPlant)
    }).then(r => r.json()).then(newPlantResponse => {
      setPlants(prevPlants => [newPlantResponse, ...prevPlants])
    })
    e.target.reset()
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={createNewPlant} >
        <input onChange={e => setName(e.target.value)} type="text" name="name" placeholder="Plant name" />
        <input onChange={e => setImage(e.target.value)} type="text" name="image" placeholder="Image URL" />
        <input onChange={e => setPrice(e.target.value)} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
