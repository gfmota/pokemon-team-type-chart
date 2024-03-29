import React, { useReducer } from 'react';
import { PokemonI } from '../../../model';
import { Action, State } from './model';
import { reducer as PokemonReducer } from './reducer';

export const PokemonContext = React.createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: { ability: '', moves: [null, null, null, null] },
  dispatch: () => null,
});

interface PokemonContextProviderProps extends React.PropsWithChildren {
  pokemon: PokemonI;
}

const PokemonContextProvider: React.FC<PokemonContextProviderProps> = ({
  children,
  pokemon,
}) => {
  const [state, dispatch] = useReducer(PokemonReducer, {
    ability: pokemon.abilities[0],
    moves: [null, null, null, null],
    pokemon,
  });

  return (
    <PokemonContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;
