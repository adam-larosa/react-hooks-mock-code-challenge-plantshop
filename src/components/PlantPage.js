import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const url = 'http://localhost:3000/plants'
    fetch(url).then(r => r.json()).then(plantsData => {
      setPlants(plantsData)
    })
  }, [])

  
  const searchedPlants = () => {
    if (search.length > 0) {
      return plants.filter(plant => 
        plant.name.toLowerCase().includes(search.toLowerCase()))
    }
    return plants
  }

  return (
    <main>
      <NewPlantForm setPlants={setPlants} />
      <Search setSearch={setSearch} />
      <PlantList plants={searchedPlants()} />
    </main>
  );
}

export default PlantPage;
