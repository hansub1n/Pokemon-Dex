import React, { useContext } from "react";
import PockemonCard from "./PockemonCard";
import styled from "styled-components";
import { PokemonContext } from "../context/PokemonContext";

const Dashboard = () => {
	const { selectedPokemons } = useContext(PokemonContext);

	if (selectedPokemons.length === 0) {
		return (
			<StDashboard>
				<div>
					<StDashboardImg src="https://react-6-pokemon.vercel.app/assets/pokemon-logo-RN0wntMB.png" />
					<p>선택된 포켓몬이 없습니다!</p>
				</div>
			</StDashboard>
		);
	} else {
		return (
			<StDashboard>
				<div>
					<StDashboardImg src="https://react-6-pokemon.vercel.app/assets/pokemon-logo-RN0wntMB.png" />
					<StSelectedPokemonCards>
						{selectedPokemons.map((pokemon) => {
							return (
								<PockemonCard
									key={pokemon.id}
									pokemon={pokemon}
									isSelected={true}
								/>
							);
						})}
					</StSelectedPokemonCards>
				</div>
			</StDashboard>
		);
	}
};

export default Dashboard;

const StDashboard = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	height: 350px;
	padding: 20px;
	margin-bottom: 20px;
	background-color: #f8f8f8;
	border-radius: 15px;
	box-sizing: border-box;
`;
const StDashboardImg = styled.img`
	width: 150px;
	height: 55x;
	margin-bottom: 10px;
`;

const StSelectedPokemonCards = styled.div`
	display: flex;
	flex-direction: row;
	gap: 30px;
	justify-content: center;
	align-items: center;
	padding: 10px;
	box-sizing: border-box;
`;
