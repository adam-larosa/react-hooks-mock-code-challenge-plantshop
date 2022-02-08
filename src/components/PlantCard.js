import React, { useState } from "react";

function PlantCard({ plant }) {

  const [inStock, setIsInStock] = useState(true)
  const [showChange, setShowChange] = useState(false)

  const [newPrice, setNewPrice] = useState()

  const changeAvailability = () => {

    setIsInStock( !inStock )

  }

  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>
        {showChange ?  
          <div>
            <input placeholder={plant.price} type="number" />
            <button>CHANGE IT!</button>
          </div> : 
          `Price: ${plant.price}` 
        }
        <button onClick={() => setShowChange(!showChange)}>
          {showChange ? "go back": "change price" }
        </button>
      </p>


      {inStock ? (
        <button onClick={changeAvailability} className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}



    </li>
  );
}

export default PlantCard;