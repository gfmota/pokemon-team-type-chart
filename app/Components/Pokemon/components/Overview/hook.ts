import { useCallback } from 'react';
import { useTeamContext } from '../../../../Context/hook';
import { PokemonI, RelationKeys, TypeEnum } from '../../../../model';
import { TypeRelation } from '../../../TypeRelations/model';
import { usePokemonContext } from '../../Context/hook';

export const useOverview = ({ typeRelations }: PokemonI) => {
  const { closeOverview } = useTeamContext();
  const { moves } = usePokemonContext();

  const pokemonTypeRelations = {
    [RelationKeys.X4]: typeRelations[RelationKeys.X4].map((type) => ({ type })),
    [RelationKeys.X2]: typeRelations[RelationKeys.X2].map((type) => ({ type })),
    [RelationKeys.X0]: typeRelations[RelationKeys.X0].map((type) => ({ type })),
    [RelationKeys.X05]: typeRelations[RelationKeys.X05].map((type) => ({
      type,
    })),
    [RelationKeys.X025]: typeRelations[RelationKeys.X025].map((type) => ({
      type,
    })),
  };

  const movesTypeRelations: Record<RelationKeys, TypeRelation[]> = {
    [RelationKeys.X4]: [],
    [RelationKeys.X2]: [],
    [RelationKeys.X05]: [],
    [RelationKeys.X025]: [],
    [RelationKeys.X0]: [],
  };

  moves.forEach(
    (move) =>
      move &&
      move.damageClass !== 'status' &&
      (
        Object.entries(move.typeRelation) as [RelationKeys, TypeEnum[]][]
      ).forEach(([key, value]) => {
        value.forEach((type: TypeEnum) => {
          const relation = movesTypeRelations[key].find(
            (relation: TypeRelation) => relation.type === type
          );
          if (relation && relation.counter) {
            relation.counter += 1;
            return;
          }
          movesTypeRelations[key].push({
            type,
            counter: 1,
          });
        });
      })
  );

  return { onClose: closeOverview, pokemonTypeRelations, movesTypeRelations };
};
