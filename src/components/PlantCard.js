import React, { useState } from "react";

function PlantCard({ killPlant, plant, changePrice }) {

  const [isNotSoldOut, setIsNotSoldOut] = useState(true)
  const [editPrice, setEditPrice] = useState(false)

  const [newPrice, setNewPrice] = useState('')


  const toggleOut = () => {
    setIsNotSoldOut(!isNotSoldOut)
  }

  const commitToPriceChange = () => {
    setEditPrice(false)
    changePrice(newPrice, plant.id)
  }
  
  const deletePlant = () => {
    killPlant(plant.id)
  }

  return (
    <li className="card">
      <button onClick={deletePlant}>KILL PLANT</button>
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      { editPrice ? 
        <p>
          <input onChange={e => setNewPrice(e.target.value)} type="number" 
            name="price" step="0.01" placeholder="Price" />

          <button onClick={() => setEditPrice(!editPrice)}>
            go back!
          </button>

          <button onClick={commitToPriceChange}>
            GO FOR IT!
          </button>
        </p> : 
        <p>
          Price: {plant.price} 
          <button onClick={() => setEditPrice(!editPrice)}>
            change price?
          </button>
        </p> }

      {isNotSoldOut ? (
        <button onClick={toggleOut} className="primary">In Stock</button>
      ) : (
        <button onClick={toggleOut} >Out of Stock</button>
      )}

    </li>
  );
}

export default PlantCard;