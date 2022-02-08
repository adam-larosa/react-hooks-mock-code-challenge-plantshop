import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

	const [plants, setPlants] = useState([])

	const [search, setSearch] = useState('')

	useEffect(() => {
		fetch('http://localhost:6001/plants').then(r => r.json())
			.then( setPlants )
	}, [])

	const addNewPlantToState = inboundPlant => {
		const newPlants = [inboundPlant, ...plants]
		setPlants(newPlants)
	}

	//BONUS FUNCTION
	const killPlant = id => {
		//remove from state
		const newPlants = [...plants]
		const index = newPlants.findIndex(plant => plant.id === id)
		newPlants.splice(index, 1)
		setPlants(newPlants)

		//delete from back end
		fetch(`http://localhost:6001/plants/${id}`, {
			method: 'DELETE'
		})

	}




	//BONUS FUNCTION!
	const changePrice = (newPrice, plantId) => {
		//change in state here

		const newPlants = [...plants]
		const index = newPlants.findIndex(plant => plant.id === plantId)
		newPlants[index].price = newPrice
		setPlants(newPlants)

		// setPlants(prevPlants => {
		// 	const newPlants = [...prevPlants]
		// 	const index = newPlants.findIndex(plant => plant.id === plantId)
		// 	newPlants[index].price = newPrice
		// 	return newPlants
		// })

		//send PATCH request to change on back end

		fetch(`http://localhost:6001/plants/${plantId}`, {
			method: 'PATCH',
			headers: {
				"Content-Type": 'application/json'
			},
			body: JSON.stringify({
				price: newPrice
			})
		})
			
	}


	// one function to change state
	const changeSearchStringInState = searchString => {
		setSearch(searchString)
	}

	// another to look at that change and do different stuff
	const filteredPlants = () => {
		if (search.length > 0) { // did someone type in the search field or not
			
			const caseSearch = search.toLowerCase()
			
			return plants.filter(plant => {
				const caseName = plant.name.toLowerCase()
				return caseName.includes(caseSearch)
			})
		} else {
			return plants
		}
	}

	return (
		<main>
			<NewPlantForm addNewPlantToState={addNewPlantToState} />
			<Search changeSearchStringInState={changeSearchStringInState} />
			<PlantList killPlant={killPlant} changePrice={changePrice} plants={ filteredPlants() } />
		</main>
	);
}

export default PlantPage;