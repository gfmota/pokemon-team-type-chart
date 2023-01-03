import React, {
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from 'react';
import { PokemonI } from '../types';

const TeamContext = React.createContext<any>({});

const TeamContextProvider = ({ children }: PropsWithChildren) => {
  const [team, setTeam] = useState<PokemonI[]>([]);
  const [selected, setSelected] = useState<string | null>(null);

  const addPokemon = useCallback(
    (pokemon: PokemonI) => {
      if (team.length >= 6) {
        throw new Error('Your team is already full');
      }
      if (team.find((pkmn) => pkmn.name === pokemon.name)) {
        throw new Error(`${pokemon.name} is already in your team`);
      }

      setTeam((prevTeam) => [...prevTeam, { ...pokemon, id: prevTeam.length }]);
    },
    [team, setTeam]
  );

  const select = useCallback(
    (name: string) => setSelected(name),
    [setSelected]
  );
  const diselect = useCallback(() => setSelected(null), [setSelected]);

  const removePokemon = useCallback(
    (name: string) => {
      diselect();
      setTeam((prevTeam) => prevTeam.filter((pkmn) => pkmn.name !== name));
    },
    [setTeam, diselect]
  );

  return (
    <TeamContext.Provider
      value={{
        team,
        addPokemon,
        removePokemon,
        select,
        diselect,
        selected,
      }}
    >
      {children}
    </TeamContext.Provider>
  );
};

export const useTeamContext = () => useContext(TeamContext);

export default TeamContextProvider;
