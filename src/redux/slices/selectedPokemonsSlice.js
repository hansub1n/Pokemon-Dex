import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const selectedPokemonsSlice = createSlice({
	name: "selectedPokemons",
	initialState,
	reducers: {
		addPokemon: (state, action) => {
			return [...state, action.payload];
		},
		removePokemon: (state, action) => {
			return state.filter((pokemon) => pokemon.id !== action.payload);
		},
	},
});

export const { addPokemon, removePokemon } = selectedPokemonsSlice.actions;
export default selectedPokemonsSlice.reducer;
