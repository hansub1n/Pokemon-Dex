import React, { useContext } from "react";
import PockemonCard from "./PockemonCard";
import styled from "styled-components";

const Dashboard = ({ selectedPokemons }) => {
	if (selectedPokemons.length === 0) {
		return (
			<StDashboard>
				<div>
					<StDashboardtitle>포켓몬 선택</StDashboardtitle>
					<p>선택된 포켓몬이 없습니다!</p>
				</div>
			</StDashboard>
		);
	} else {
		return (
			<StDashboard>
				<div>
					<StDashboardtitle>포켓몬 선택</StDashboardtitle>
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
const StDashboardtitle = styled.h1`
	margin: 10px 0;
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
