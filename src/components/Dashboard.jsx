import React from "react";
import PockemonCard from "./PockemonCard";
import styled from "styled-components";

const Dashboard = ({ selectedPokemons, removePokemon }) => {
	if (selectedPokemons.length > 6) {
		alert("포켓몬은 최대 여섯개까지만 선택 가능합니다.");
		return;
	}
	// if (selectedPokemons.)
	if (selectedPokemons.length === 0) {
		return <p>선택된 포켓몬이 없습니다!</p>;
	} else {
		return (
			<StDashboard>
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
			</StDashboard>
		);
	}
};

export default Dashboard;

const StDashboard = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 30px;
`;
