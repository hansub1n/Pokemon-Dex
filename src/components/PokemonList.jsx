import React from "react";
import PockemonCard from "./PockemonCard";
import styled from "styled-components";

const PokemonList = ({ pokemonData, addPokemon }) => {
	return (
		<StCardContainer>
			{pokemonData.map((pokemon) => {
				return (
					<PockemonCard
						key={pokemon.id}
						pokemon={pokemon}
						addPokemon={addPokemon}
						isSelected={false}
					/>
				);
			})}
		</StCardContainer>
	);
};

export default PokemonList;

const StCardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 30px;
`;
