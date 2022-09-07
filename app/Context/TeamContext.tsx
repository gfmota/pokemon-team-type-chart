import React, { PropsWithChildren, useCallback, useContext, useState } from "react";
import { PokemonI } from "../types";

export const TeamContext = React.createContext<any>({});

const TeamContextProvider = (props: PropsWithChildren) => {
  const [team, setTeam] = useState<PokemonI[]>([]);

  const addPokemon = useCallback(
    (pokemon: PokemonI) => setTeam((prevTeam) => [...prevTeam, {...pokemon, id: prevTeam.length}]),
  [setTeam]);
  const removePokemon = useCallback(
    (name: string) => setTeam((prevTeam) => prevTeam.filter(pkmn => pkmn.name !== name)),
  [setTeam])

  return (
    <TeamContext.Provider value={{team, addPokemon, removePokemon}}>
        {props.children}
    </TeamContext.Provider>
  )
}

export const useTeamContext = () => useContext(TeamContext);

export default TeamContextProvider;
