import React, { PropsWithChildren, useContext, useState } from "react";
import { PokemonI } from "../types";

export const TeamContext = React.createContext<any>({});

const TeamContextProvider = (props: PropsWithChildren) => {
  const [pokemon, setPokemon] = useState<PokemonI|null>(null);

  return (
    <TeamContext.Provider value={{pokemon, setPokemon}}>
        {props.children}
    </TeamContext.Provider>
  )
}

export const useTeamContext = () => useContext(TeamContext);

export default TeamContextProvider;
