import React from "react";
import PlantCard from "./PlantCard";


function PlantList({ plants }) {



  return (
    <ul className="cards">

      {plants.map( plantObj => 
        <PlantCard key={plantObj.id} plant={plantObj} /> )}

    </ul>
  );
}

export default PlantList;