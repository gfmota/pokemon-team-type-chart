import React, { PropsWithChildren, useCallback, useContext, useState } from "react";
import { PokemonI } from "../types";

export const TeamContext = React.createContext<any>({});

const TeamContextProvider = (props: PropsWithChildren) => {
  const [team, setTeam] = useState<PokemonI[]>([]);

  const addPokemon = useCallback((pokemon: PokemonI) => setTeam((prevTeam) => [...prevTeam, pokemon]), [setTeam]);

  return (
    <TeamContext.Provider value={{team, addPokemon}}>
        {props.children}
    </TeamContext.Provider>
  )
}

export const useTeamContext = () => useContext(TeamContext);

export default TeamContextProvider;
