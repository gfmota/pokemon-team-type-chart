import React, { PropsWithChildren, useContext, useReducer } from "react";
import reducer, { TeamState } from "./reducer";

const TeamContext = React.createContext<any>({});

const initialState: TeamState = {};

const TeamContextProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TeamContext.Provider value={{team: state, dispatch}}>
      {children}
    </TeamContext.Provider>
  )
}

export const useTeamContext = () => useContext(TeamContext);

export default TeamContextProvider;
