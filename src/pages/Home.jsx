import React from "react";
import Dashboard from "../components/Dashboard";
import PockemonCard from "../components/PockemonCard";
import PokemonList from "../components/PokemonList";

const Home = () => {
	return (
		<div>
			<Dashboard />
			<PokemonList />
			<PockemonCard />
		</div>
	);
};

export default Home;
