import { useEffect, useState } from 'react';
import { useTeamContext } from '../../Context/hook';
import { PokemonI, RelationKeys, TypeEnum } from '../../model';
import { TypeRelation } from './model';

export const useTypeRelations = () => {
  const { team, pokemonOnFocus } = useTeamContext();
  const [typeRelations, setTypeRelations] = useState<any>(null);

  useEffect(() => {
    if (team.length === 0) {
      setTypeRelations(null);
      return;
    }

    const relations: Record<RelationKeys, TypeRelation[]> = {
      [RelationKeys.X4]: [],
      [RelationKeys.X2]: [],
      [RelationKeys.X05]: [],
      [RelationKeys.X025]: [],
      [RelationKeys.X0]: [],
    };

    team.forEach((pokemon: PokemonI) =>
      (
        Object.entries(pokemon.typeRelations) as [RelationKeys, TypeEnum[]][]
      ).forEach(([key, value]) => {
        value.forEach((type: TypeEnum) => {
          const relation = relations[key].find(
            (relation: TypeRelation) => relation.type === type
          );
          if (relation) {
            if (relation.counter) relation.counter += 1;
            if (pokemon.id === pokemonOnFocus) relation.onFocus = true;
            return;
          }
          relations[key].push({
            type,
            counter: 1,
            onFocus: pokemon.id === pokemonOnFocus,
            grayscale: !(pokemon.id === pokemonOnFocus) && !!pokemonOnFocus,
          });
        });
      })
    );

    setTypeRelations(relations);
  }, [team, pokemonOnFocus]);

  return {
    typeRelations,
  };
};
