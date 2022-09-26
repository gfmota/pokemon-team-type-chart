import { PokemonI } from "../types";
import { 
    ADD_POKEMON_ACTION, 
    REMOVE_POKEMON_ACTION, 
    SELECT_POKEMON_ACTION, 
    DISELECT_POKEMON_ACTION
} from "./constants";
import { sendError } from "../utils";

export interface TeamState {
    [key: string]: PokemonI,
}

interface Action {
    type: string,
    data: any,
}

const handleAddPokemon = (state: TeamState, pokemon: PokemonI) => {
    if (Object.keys(state).length >= 6) {
        sendError('Your team is already full');
        return state;
    }
    if (state[pokemon.name]) {
        sendError(`${pokemon.name} is already in your team`);
        return state;
    }
    return {...state, [pokemon.name]: pokemon};
};

const handleRemovePokemon = (state: TeamState, pokemonName: string) => {
    delete state[pokemonName];
    return state;
};

const handleSelect = (state: TeamState, pokemonName: string) => {
    if (state[pokemonName]) {
        state[pokemonName].selected = true;
    }
    return state;
};

const handleDiselect = (state: TeamState) => {
    Object.values(state).forEach(pkmn => pkmn.selected = false);
    return state;
};

const reducer = (state: TeamState, { type, data }: Action) => {
    switch (type) {
        case ADD_POKEMON_ACTION:
            return handleAddPokemon(state, data.pokemonToAdd);
        case REMOVE_POKEMON_ACTION:
            return handleRemovePokemon(state, data.pokemonToRemove);
        case SELECT_POKEMON_ACTION:
            const nextState = handleSelect(state, data.pokemonToSelect);
            console.log(nextState)
            return nextState;
        case DISELECT_POKEMON_ACTION:
            console.log('diselect')
            return handleDiselect(state);
        default:
            return state;
    }
};

export default reducer;