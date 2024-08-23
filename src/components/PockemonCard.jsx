import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PokemonContext } from "../context/PokemonContext";

const PockemonCard = ({ pokemon, isSelected }) => {
	const { img_url, korean_name, id } = pokemon;

	const navigate = useNavigate();

	const { selectedPokemons, setSelectedPokemons } =
		useContext(PokemonContext);

	const addPokemon = (newPokemon) => {
		const existedPokemon = (targetPokemon) => {
			return selectedPokemons.find(
				(pokemon) => pokemon.korean_name === targetPokemon.korean_name
			);
		};
		if (existedPokemon(newPokemon)) {
			alert("이미 존재하는 포켓몬입니다.");
			return;
		}
		if (selectedPokemons.length >= 6) {
			alert("포켓몬은 최대 여섯개까지만 선택 가능합니다.");
			return;
		}
		setSelectedPokemons(() => {
			return [...selectedPokemons, newPokemon];
		});
	};

	const removePokemon = (targetPokemon) => {
		const filteredPokemon = selectedPokemons.filter(
			(pokemon) => pokemon.korean_name !== targetPokemon.korean_name
		);
		setSelectedPokemons(filteredPokemon);
	};

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
