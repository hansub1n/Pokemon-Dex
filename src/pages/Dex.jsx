import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../mock";
import styled from "styled-components";

const Dex = () => {
	return (
		<StDex>
			<Dashboard />
			<PokemonList pokemonData={MOCK_DATA} />
		</StDex>
	);
};

export default Dex;

const StDex = styled.div`
	margin: 40px 70px;
`;
