import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";
import styled from "styled-components";

const Dex = () => {
	const [selectedPokemons, setSelectedPokemons] = useState([]);

	const addPokemon = (newPokemon) => {
		const existedPokemon = (targetPokemon) => {
			return selectedPokemons.find(
				(pokemon) => pokemon.korean_name === targetPokemon.korean_name
			);
		};
		if (existedPokemon(newPokemon)) {
			alert("이미 존재하는 포켓몬입니다.");
			return;
		}
		if (selectedPokemons.length >= 6) {
			alert("포켓몬은 최대 여섯개까지만 선택 가능합니다.");
			return;
		}
		setSelectedPokemons(() => {
			return [...selectedPokemons, newPokemon];
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
	margin: 40px 70px;
`;
