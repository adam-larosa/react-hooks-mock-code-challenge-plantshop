import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [searchValue, setSearchValue] = useState('')


  useEffect(() => {
    fetch('http://localhost:6001/plants')
      .then( r => r.json() )
      .then( setPlants )
  }, [])


  const addPlantToState = plant => setPlants( [plant, ...plants] )

  const changeSearchValue = e => setSearchValue(e.target.value )
  

  const searchedPlants = plants.filter(plantObj => {
    const lowerName = plantObj.name.toLowerCase()
    const lowerSearch = searchValue.toLowerCase()
    return lowerName.includes( lowerSearch )
  }) 
   

  return (
    <main>
      <NewPlantForm addPlantToState={addPlantToState} />
      <Search changeSearchValue={changeSearchValue} />
      
      <PlantList plants={searchedPlants} />
    </main>
  );
}

export default PlantPage;