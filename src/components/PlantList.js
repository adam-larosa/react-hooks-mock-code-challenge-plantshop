import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {


  const plantComponents = plants.map( plantObj => {

    return <PlantCard plant={ plantObj } key={ plantObj.id } />

  } )

  return (
    <ul className="cards">
      { plantComponents }
    </ul>
  );
}

export default PlantList;