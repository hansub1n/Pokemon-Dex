import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PokemonContext } from "../context/PokemonContext";

const PockemonCard = ({ pokemon, isSelected }) => {
	const { removePokemon, addPokemon } = useContext(PokemonContext);
	const { img_url, korean_name, id } = pokemon;
	const navigate = useNavigate();
	return (
		<StCard>
			<div
				onClick={() => {
					navigate(`/pokemon-detail?id=${pokemon.id}`);
				}}
			>
				<StCardImg src={img_url} />
				<p>{korean_name}</p>
				<p>No.{id}</p>
			</div>
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
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 160px;
	padding: 10px;
	box-sizing: border-box;
	background-color: #ffffff;
	border-radius: 10px;
	box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 8px;
	cursor: pointer;
`;

const StCardImg = styled.img`
	width: 100px;
	height: 100px;
`;
