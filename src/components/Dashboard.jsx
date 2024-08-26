import React, { useContext } from "react";
import PockemonCard from "./PockemonCard";
import styled from "styled-components";
import { PokemonContext } from "../context/PokemonContext";
import logo from "../assets/pokemon-logo-RN0wntMB.png";
import pokeball from "../assets/pokeball-13iwdk7Y.png";

const Dashboard = () => {
	const { selectedPokemons } = useContext(PokemonContext);

	const maxPokeball = 6;

	const displayPokeball =
		selectedPokemons.length === 0
			? maxPokeball
			: maxPokeball - selectedPokemons.length;

	const pokeballs = [];

	for (let i = 0; i < displayPokeball; i++) {
		pokeballs.push(
			<div>
				<StDashboardPokeballImg
					src={pokeball}
					alt="Pokeball Icon"
					key={i}
				/>
			</div>
		);
	}

	if (selectedPokemons.length === 0) {
		return (
			<StDashboard>
				<div>
					<StDashboardLogoImg src={logo} />
					<StDashboardPokeballs>{pokeballs}</StDashboardPokeballs>
				</div>
			</StDashboard>
		);
	} else {
		return (
			<StDashboard>
				<div>
					<StDashboardLogoImg src={logo} />
					<StSelectedDashboard>
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
						<StDashboardPokeballs>{pokeballs}</StDashboardPokeballs>
					</StSelectedDashboard>
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
const StSelectedDashboard = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	gap: 30px;
`;
const StDashboardLogoImg = styled.img`
	width: 150px;
	height: 55px;
	margin-bottom: 10px;
`;
const StDashboardPokeballs = styled.div`
	display: flex;
	gap: 80px;
	justify-content: center;
`;
const StDashboardPokeballImg = styled.img`
	margin-top: 20px;
	width: 100px;
	height: 100px;
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
