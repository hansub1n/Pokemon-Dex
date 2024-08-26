import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";
import styled from "styled-components";
import { PokemonContext } from "../context/PokemonContext";

const Dex = () => {
	const [selectedPokemons, setSelectedPokemons] = useState([]);

	return (
		<StDex>
			<PokemonContext.Provider
				value={{
					selectedPokemons,
					setSelectedPokemons,
				}}
			>
				<Dashboard />
				<PokemonList pokemonData={MOCK_DATA} />
			</PokemonContext.Provider>
		</StDex>
	);
};

export default Dex;

const StDex = styled.div`
	margin: 40px 70px;
`;
