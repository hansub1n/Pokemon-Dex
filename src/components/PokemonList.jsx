import React, { useContext } from "react";
import PockemonCard from "./PockemonCard";
import styled from "styled-components";
import { PokemonContext } from "../context/PokemonContext";

const PokemonList = () => {
	const { pokemonData } = useContext(PokemonContext);
	return (
		<StCardContainer>
			{pokemonData.map((pokemon) => {
				return (
					<PockemonCard
						key={pokemon.id}
						pokemon={pokemon}
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
	flex-direction: row;
	gap: 30px;
	justify-content: center;
	align-items: center;
	padding: 30px;
	box-sizing: border-box;
	background-color: #f0f0f0;
	border-radius: 15px;
`;
