import { useEffect, useMemo, useState } from "react";
import { useTeamContext } from "../../Context/TeamContext"
import Type from "../Type";

export const useTypeRelations = () => {
  const { team } = useTeamContext();
  const [typeRelations, setTypeRelations] = useState<any>(null);
  const hasSelected = useMemo(() => !!Object.values(team).find((pkmn: any) => pkmn.selected), [team]);

  useEffect(() => {
    if (Object.keys(team).length === 0) {
      setTypeRelations(null);
      return;
    }

    const relations: any = {
      x4: [],
      x2: [],
      x05: [],
      x025: [],
      x0: [],
    };

    Object.values(team).forEach((pokemon: any) => Object.entries(pokemon.typeRelations).forEach(([key, value]: any) => {
      value.forEach(((type: string) => {
        if (relations[key].find((relation: any) => relation.type === type)) {
          const relation = relations[key].find((relation: any) => relation.type === type)
          relation.counter += 1;
          if (pokemon.selected) relation.isSelected = true;
          return;
        }
        relations[key].push({type, counter: 1, isSelected: pokemon.selected});
      }))
    }));

    setTypeRelations(relations);
  }, [team]);

  const renderTypesList = (type: any[]) => type.map(
    ({type, counter, isSelected}: any) => (
      <div key={type} style={{display:'flex', alignItems: 'flex-end'}}>
        <Type id={type} selected={isSelected} grayscale={!isSelected && hasSelected} />
        <div style={{
          borderRadius: '100%',
          border: 'black 2px solid',
          padding: '0 5px',
          fontWeight: 'bold',
          backgroundColor: 'white',
          color: 'black',
        }}>{counter}</div>
      </div>
    )
  );

  return {
    typeRelations,
    renderTypesList,
  }
}
