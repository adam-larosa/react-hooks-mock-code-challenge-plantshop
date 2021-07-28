import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
//const jsonify = response => response.json()
const url = 'http://localhost:3000/plants'



function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {

    fetch(url).then(response => response.json() ).then(plantsData => {
      setPlants(plantsData) //changes state
    })

  }, [])

  const addPlantToState = newPlant => { // passed down the beanstalk
    console.log('adding plant to state!')
    setPlants( plants => [newPlant, ...plants] ) // changing state
  }


  const filterFunction = () => {
    if (search.length > 0) {
      const filteredResult = plants.filter(plant => 
        plant.name.toLowerCase().includes(search.toLowerCase()))
      return filteredResult
    } else {
      return plants
    }
  }
  
  return (
    <main>
      <NewPlantForm addPlantToState={addPlantToState} />
      <Search setSearch={setSearch} />
      <PlantList plants={filterFunction()} />
    </main>
  );
}

export default PlantPage;
