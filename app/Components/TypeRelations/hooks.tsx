import { useEffect, useState } from 'react';
import { useTeamContext } from '../../Context/hook';
import { FlexBox } from '../../style';
import { PokemonI, RelationKeys, TypeEnum } from '../../model';
import Type from '../Type';
import { TypeRelation } from './model';

export const useTypeRelations = () => {
  const { team, pokemonOnFocus } = useTeamContext();
  const [typeRelations, setTypeRelations] = useState<any>(null);

  useEffect(() => {
    if (team.length === 0) {
      setTypeRelations(null);
      return;
    }

    const relations = {
      x4: [] as TypeRelation[],
      x2: [] as TypeRelation[],
      x05: [] as TypeRelation[],
      x025: [] as TypeRelation[],
      x0: [] as TypeRelation[],
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
            relation.counter += 1;
            if (pokemon.id === pokemonOnFocus) relation.onFocus = true;
            return;
          }
          relations[key].push({
            type,
            counter: 1,
            onFocus: pokemon.id === pokemonOnFocus,
          });
        });
      })
    );

    setTypeRelations(relations);
  }, [team, pokemonOnFocus]);

  const renderTypesList = (types: any[]) =>
    types.map(({ type, counter, onFocus }: TypeRelation) => (
      <FlexBox key={type} alignItems="flex-end">
        <Type
          id={type}
          selected={onFocus}
          grayscale={!onFocus && !!pokemonOnFocus}
        />
        <div
          style={{
            borderRadius: '100%',
            border: 'black 2px solid',
            padding: '0 5px',
            fontWeight: 'bold',
            backgroundColor: 'white',
            color: 'black',
          }}
        >
          {counter}
        </div>
      </FlexBox>
    ));

  return {
    typeRelations,
    renderTypesList,
  };
};
