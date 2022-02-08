import React from "react";
import PlantCard from "./PlantCard";


function PlantList({ plants, changePriceOfPlant, killPlant }) {



  return (
    <ul className="cards">

      {plants.map( plantObj => 
        <PlantCard killPlant={killPlant} changePriceOfPlant={changePriceOfPlant} key={plantObj.id} plant={plantObj} /> )}

    </ul>
  );
}

export default PlantList;