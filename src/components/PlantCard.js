import React, { useState } from "react";

function PlantCard({ plant, changePriceOfPlant, killPlant }) {

  const [inStock, setIsInStock] = useState(true)
  const [showChange, setShowChange] = useState(false)
  
  const changeAvailability = () => setIsInStock( !inStock )


  const [newPrice, setNewPrice] = useState(plant.price)



  const changePriceInState = () => {
    
    changePriceOfPlant(plant, newPrice)
  
  }

  const destroyPlant = () => {
    killPlant(plant)
  }
  

  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <div>
        {showChange ?  
          
          <p>
            <input onChange={e => setNewPrice(e.target.value)} 
              value={newPrice} placeholder={plant.price} type="number" />
            
            <button onClick={changePriceInState}>CHANGE IT!</button>
          </p>
           : 
          `Price: ${plant.price}` 
          
        }
        <button onClick={() => setShowChange(!showChange)}>
          {showChange ? "go back": "change price" }
        </button>
      </div>


      {inStock ? (
        <button onClick={changeAvailability} className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}


        <button onClick={destroyPlant}>kill plant</button>
    </li>
  );
}

export default PlantCard;