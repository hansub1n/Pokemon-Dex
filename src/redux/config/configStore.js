import { configureStore } from "@reduxjs/toolkit";
import selectedPokemonsSlice from "../slices/selectedPokemonsSlice";

const store = configureStore({
	reducer: {
		selectedPokemons: selectedPokemonsSlice,
	},
});

export default store;
