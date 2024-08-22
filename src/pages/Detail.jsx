import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import MOCK_DATA from "../mock";

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
		<div>
			<h1> {korean_name} 나와랏!</h1>
			<img src={img_url} />
			<p>{korean_name}</p>
			<p>타입: {types.join(", ")}</p>
			<p>{description}</p>

			<button
				onClick={() => {
					navigate("/dex");
				}}
			>
				뒤로 가기
			</button>
		</div>
	);
};

export default Detail;
