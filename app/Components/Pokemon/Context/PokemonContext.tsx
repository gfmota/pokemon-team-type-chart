import React, { useReducer } from 'react';
import { PokemonI } from '../../../types';
import { Action, State } from './model';
import { reducer as PokemonReducer } from './reducer';

export const PokemonContext = React.createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: { ability: '', moves: ['', '', '', ''] },
  dispatch: () => null,
});

interface PokemonContextProviderProps extends React.PropsWithChildren {
  pokemon: PokemonI;
}

const PokemonContextProvider = ({
  children,
  pokemon,
}: PokemonContextProviderProps) => {
  const [state, dispatch] = useReducer(PokemonReducer, {
    ability: pokemon.abilities[0],
    moves: ['', '', '', ''],
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
