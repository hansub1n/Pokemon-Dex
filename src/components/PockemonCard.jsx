import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PokemonContext } from "../context/PokemonContext";

const PockemonCard = ({ pokemon, isSelected }) => {
	const navigate = useNavigate();

	const { selectedPokemons, setSelectedPokemons } =
		useContext(PokemonContext);

	const { img_url, korean_name, id } = pokemon;

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
				<StCardName>{korean_name}</StCardName>
				<StCardId>No.{String(id).padStart(3, "0")}</StCardId>
			</div>
			{isSelected ? (
				<StCardBtn
					onClick={() => {
						removePokemon(pokemon);
					}}
				>
					삭제
				</StCardBtn>
			) : (
				<StCardBtn
					onClick={() => {
						addPokemon(pokemon);
					}}
				>
					추가
				</StCardBtn>
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
	transition: transform 0.3s ease, box-shadow 0.3s ease;

	&:hover {
		transform: scale(1.02);
		box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 12px;
	}
`;

const StCardImg = styled.img`
	width: 100px;
	height: 100px;
`;

const StCardName = styled.p`
	font-size: 16px;
	font-weight: 700;
	margin: 5px 0;
`;
const StCardId = styled.p`
	font-size: 12px;
	color: #666666;
	margin: 10px 0;
`;
const StCardBtn = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 12px;
	width: 50px;
	height: 27px;
	margin: 10px 0 0;
	padding: 5px 9px;
	box-sizing: border-box;
	cursor: pointer;
`;
