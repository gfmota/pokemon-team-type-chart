import { PokemonI } from "../types";
import { 
    ADD_POKEMON_ACTION, 
    REMOVE_POKEMON_ACTION, 
    SELECT_POKEMON_ACTION, 
    DISELECT_POKEMON_ACTION
} from "./constants";

export const addPokemon = (pokemon: PokemonI) => ({
    type: ADD_POKEMON_ACTION,
    data: { pokemonToAdd: pokemon },
});

export const removePokemon = (pokemonName: string) => ({
    type: REMOVE_POKEMON_ACTION,
    data: { pokemonToRemove: pokemonName },
});

export const selectPokemon = (pokemonName: string) => ({
    type: SELECT_POKEMON_ACTION,
    data: { pokemonToSelect: pokemonName },
});

export const diselectPokemon = () => ({
    type: DISELECT_POKEMON_ACTION,
});