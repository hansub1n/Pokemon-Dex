import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const Home = () => {
	const navigate = useNavigate();
	return (
		<StHome>
			<h1>포켓몬 도감</h1>
			<button
				onClick={() => {
					navigate("/dex");
				}}
			>
				포켓몬 도감 시작하기
			</button>
		</StHome>
	);
};

export default Home;

const StHome = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 90vh;
`;
