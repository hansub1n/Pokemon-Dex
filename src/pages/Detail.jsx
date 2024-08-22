import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import MOCK_DATA from "../mock";
import styled from "styled-components";

const Detail = () => {
	const navigate = useNavigate();

	const [searchParams, setSearchParams] = useSearchParams();
	const pokemonId = searchParams.get("id");

	const pokemonData = MOCK_DATA;
	const pokemonDetail = (id) => {
		return pokemonData.find((pokemon) => pokemon.id === Number(id));
	};

	const { img_url, korean_name, types, description } =
		pokemonDetail(pokemonId);
	return (
		<StDetail>
			<StDetailtitle>가랏! {korean_name}!</StDetailtitle>
			<StDetailImg src={img_url} />
			<StDetailName>{korean_name}</StDetailName>
			<StDetailP>타입: {types.join(", ")}</StDetailP>
			<StDetailP>{description}</StDetailP>

			<button
				onClick={() => {
					navigate("/dex");
				}}
			>
				뒤로 가기
			</button>
		</StDetail>
	);
};

export default Detail;

const StDetail = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 90vh;
`;
const StDetailtitle = styled.h1`
	font-size: 50px;
	margin-bottom: 70px;
`;

const StDetailImg = styled.img`
	width: 300px;
	height: 300px;
`;

const StDetailName = styled.p`
	font-size: 25px;
	font-weight: 600;
	margin: 10px 0;
`;

const StDetailP = styled.p`
	margin-bottom: 30px;
`;
