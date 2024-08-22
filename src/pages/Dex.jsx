import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";
import styled from "styled-components";

const Dex = () => {
	const [selectedPokemons, setSelectedPokemons] = useState([]);

	const addPokemon = (pokemon) => {
		setSelectedPokemons(() => {
			return [...selectedPokemons, pokemon];
		});
	};
	const removePokemon = (targetPokemon) => {
		const filteredPokemon = selectedPokemons.filter(
			(pokemon) => pokemon.korean_name !== targetPokemon.korean_name
		);
		setSelectedPokemons(filteredPokemon);
	};

	return (
		<StDex>
			<Dashboard
				selectedPokemons={selectedPokemons}
				removePokemon={removePokemon}
			/>
			<PokemonList pokemonData={MOCK_DATA} addPokemon={addPokemon} />
		</StDex>
	);
};

export default Dex;

const StDex = styled.div`
	margin: 30px;
`;
