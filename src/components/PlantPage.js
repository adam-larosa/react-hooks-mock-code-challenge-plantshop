import { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [ plants, setPlants ] = useState( [] )

  const addPlantToState = plantObj => {
    setPlants( [ ...plants, plantObj ] )
  }


  const [ searchTerm, setSearchTerm ] = useState( '' )

  const changeSearchTerm = newString => setSearchTerm( newString.toLowerCase() )

  const byName = plantObj => {
    if( plantObj.name.toLowerCase().includes( searchTerm ) ) {
      return true
    }
  }

  const searchedPlants = plants.filter( byName )


  useEffect( () => {
    fetch( 'http://localhost:6001/plants' )
      .then( r => r.json() )
      .then( setPlants )
  }, [] )

  
  return (
    <main>
      <NewPlantForm addPlantToState={ addPlantToState } />
      <Search changeSearchTerm={ changeSearchTerm } />
      <PlantList plants={ searchedPlants } />
    </main>
  );
}

export default PlantPage;
