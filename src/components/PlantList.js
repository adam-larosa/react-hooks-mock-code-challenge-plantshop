import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  /*
      [ {}, {}, {}, {} ]

      [ <PlantCard />, <PlantCard />, <PlantCard />, <PlantCard /> ]
  

       {
        "id": 1,
        "name": "Aloe",
        "image": "./images/aloe.jpg",
        "price": 15.99
      }
  */

  const plantCardsArray = plants.map( plantObj => {
    return <PlantCard key={ plantObj.id } plant={ plantObj } />  
  } )

  return (
    <ul className="cards">
      { plantCardsArray }
    </ul>
  );
}

export default PlantList;
