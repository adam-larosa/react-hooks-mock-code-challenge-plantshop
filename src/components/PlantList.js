import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ killPlant, plants, changePrice }) {
	
	return (
		<ul className="cards">
			{ plants.map(plant => 
				<PlantCard killPlant={killPlant} changePrice={changePrice} key={plant.id} plant={plant} />) }
		</ul>
	);
}

export default PlantList;