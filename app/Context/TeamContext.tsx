import React, {
  useReducer,
} from 'react';
import { Action, State } from './model';
import { reducer as TeamContextReducer } from './reducer';

const initialState = {
  team: [],
};

export const TeamContext = React.createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialState,
  dispatch: () => null,
});

const TeamContextProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(TeamContextReducer, initialState);

  return (
    <TeamContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </TeamContext.Provider>
  );
};

export default TeamContextProvider;
