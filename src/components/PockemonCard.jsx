import React from "react";
import styled from "styled-components";

const PockemonCard = ({ pokemon, addPokemon, removePokemon, isSelected }) => {
	const { img_url, korean_name, id } = pokemon;
	return (
		<StCard>
			<img src={img_url} />
			<p>{korean_name}</p>
			<p>No.{id}</p>
			{isSelected ? (
				<button
					onClick={() => {
						removePokemon(pokemon);
					}}
				>
					삭제
				</button>
			) : (
				<button
					onClick={() => {
						addPokemon(pokemon);
					}}
				>
					추가
				</button>
			)}
		</StCard>
	);
};

export default PockemonCard;

const StCard = styled.div`
	display: flex;
	flex-direction: column;
`;
