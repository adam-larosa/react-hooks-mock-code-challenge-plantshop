import React, { useState } from "react";

//const jsonify = response => response.json()
//const whereToGo = 'http://localhost:3000/plants'

function NewPlantForm({ addPlantToState }) {

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [price, setPrice] = useState(0.01)

  const makeNewPlant = e => {
    e.preventDefault()
    
    const newPlant = { name, image, price }

   


    // const method = "POST"
    // const headers = { 'Content-Type': 'application/json' }
    // const body = JSON.stringify( newPlant )
    // const whatToSend = { method, headers, body }
    // fetch(whereToGo, whatToSend)
    
    (() => {
      console.log('staring to fetch!')
      fetch('http://localhost:3000/plants', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json' 
        }, body: JSON.stringify({
          name,
          image,
          price
        })
      }).then(r => r.json()).then(() => {
        console.log('fetch complete!!!')
      })
    })()
    
    addPlantToState( newPlant )    

  }
 
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={makeNewPlant}>
        <input onChange={e => setName(e.target.value)} type="text" name="name" placeholder="Plant name" />
        <input onChange={e => setImage(e.target.value)} type="text" name="image" placeholder="Image URL" />
        <input onChange={e => setPrice(e.target.value)} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
