import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const Home = () => {
	const navigate = useNavigate();
	return (
		<StHome>
			<StHomeImg src="https://react-6-pokemon.vercel.app/assets/pokemon-logo-RN0wntMB.png" />
			<StHomeBtn
				onClick={() => {
					navigate("/dex");
				}}
			>
				{" "}
				포켓몬 도감 시작하기
			</StHomeBtn>
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
const StHomeImg = styled.img`
	width: 600px;
	height: 220px;
	margin-bottom: 20px;
`;
const StHomeBtn = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 15px;
	width: 200px;
	height: 40px;
	padding: 10px 20px;
	box-sizing: border-box;
`;
