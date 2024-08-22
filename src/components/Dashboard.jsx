import React from "react";
import PockemonCard from "./PockemonCard";
import styled from "styled-components";

const Dashboard = ({ selectedPokemons, removePokemon }) => {
	if (selectedPokemons.length > 6) {
		alert("포켓몬은 최대 여섯개까지만 선택 가능합니다.");
		return;
	}
	// const existedPokemon = (targetPokemon) => {
	// 	return selectedPokemons.find((pokemon) => {
	// 		pokemon.korean_name === targetPokemon.korean_name;
	// 	});
	// };

	// if (existedPokemon) {
	// 	alert("이미 존재하는 포켓몬입니다.");
	// 	return;
	// }

	if (selectedPokemons.length === 0) {
		return (
			<StDashboard>
				<StDashboardP>선택된 포켓몬이 없습니다!</StDashboardP>
			</StDashboard>
		);
	} else {
		return (
			<StDashboard>
				<StSelectedPokemonCards>
					{selectedPokemons.map((pokemon) => {
						return (
							<PockemonCard
								key={pokemon.id}
								pokemon={pokemon}
								removePokemon={removePokemon}
								isSelected={true}
							/>
						);
					})}
				</StSelectedPokemonCards>
			</StDashboard>
		);
	}
};

export default Dashboard;

const StDashboard = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 1200px;
	height: 200px;
	padding: 20px;
	margin-bottom: 50px;
	background-color: #f8f8f8;
	border-radius: 15px;
	box-sizing: border-box;
`;
const StDashboardP = styled.p`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const StSelectedPokemonCards = styled.div`
	position: absolute;
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	gap: 50px;
	justify-content: center;
	align-items: center;
	padding: 50px;
	box-sizing: border-box;
`;
