import React, { useContext, useMemo, useState } from 'react';
import { useQuery } from 'react-query';
import { useTeamContext } from '../../../Context/hook';
import { getPokemonTypesRelations } from '../../../Services';
import { PokemonI } from '../../../types';
import { TYPE_IMMUNITY_ABILITIES } from './constants';

const PokemonContext = React.createContext<any>({});

interface PokemonContextProviderProps extends React.PropsWithChildren {
  pokemon: PokemonI;
}

const PokemonContextProvider = ({
  children,
  pokemon: { id, types, abilities },
}: PokemonContextProviderProps) => {
  const { setTypeRelations } = useTeamContext();
  const [ability, setAbility] = useState<string>(abilities[0]);
  const immunityByAbility = useMemo(
    () => TYPE_IMMUNITY_ABILITIES[ability],
    [ability]
  );
  useQuery(
    [...types, immunityByAbility && `immunity to ${immunityByAbility.join()}`],
    () => getPokemonTypesRelations(types, { immunityByAbility }),
    {
      onSuccess: (data) => setTypeRelations(id, data),
    }
  );

  return (
    <PokemonContext.Provider value={{ ability, abilities, setAbility }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = () => useContext(PokemonContext);

export default PokemonContextProvider;
