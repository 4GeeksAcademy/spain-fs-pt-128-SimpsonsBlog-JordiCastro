import { useEffect, useState } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getCharacters, getLocations } from "../services/APIServices.js";
import { CharacterCard } from "../components/CharacterCard.jsx";
import { LocationCard } from "../components/LocationCard.jsx";

export const Home = () => {


	const { store, dispatch } = useGlobalReducer()
	useEffect(() => {
		getCharacters(dispatch)
		getLocations(dispatch)
	}, [])

	return (
		<div className="container">
			<img className="mt-4 mb-2" src="https://fontmeme.com/permalink/260112/b12742d4.png" alt="fuente-de-los-simpson" border="0" />
			<div className="characters overflow-x-scroll d-flex flex-nowrap">
				{
					store.characters.map(character => {
						return (
							<CharacterCard character={character} key={character.id} />
						)
					})
				}
			</div>

			<img className="mt-4 mb-2" src="https://fontmeme.com/permalink/260112/5ea0afd6.png" alt="fuente-de-los-simpson" border="0" />
			<div className="locations overflow-x-scroll d-flex flex-nowrap">
				{
					store.locations.map(location => {
						return (
							<LocationCard location={location} key={location.id} />
						)
					})
				}
			</div>
		</div>
	);
}; 