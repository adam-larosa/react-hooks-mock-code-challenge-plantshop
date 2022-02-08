import React, { useState } from "react";

function PlantCard({ plant }) {

  const [inStock, setIsInStock] = useState(true)


  const changeAvailability = () => {

    setIsInStock( !inStock )

  }

  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      {`Price: ${plant.price}` }
      

      {inStock ? (
        <button onClick={changeAvailability} className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    

    </li>
  );
}

export default PlantCard;