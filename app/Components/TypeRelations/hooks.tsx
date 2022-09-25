import { useEffect, useState } from "react";
import { useTeamContext } from "../../Context/TeamContext"
import { PokemonI } from "../../types";
import Type from "../Type";

export const useTypeRelations = () => {
  const { team, selected } = useTeamContext();
  const [typeRelations, setTypeRelations] = useState<any>(null);

  useEffect(() => {
    if (team.length === 0) {
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

    team.forEach((pokemon: PokemonI) => Object.entries(pokemon.typeRelations).forEach(([key, value]: any) => {
      value.forEach(((type: string) => {
        if (relations[key].find((relation: any) => relation.type === type)) {
          const relation = relations[key].find((relation: any) => relation.type === type)
          relation.counter += 1;
          if (pokemon.name === selected) relation.isSelected = true;
          return;
        }
        relations[key].push({type, counter: 1, isSelected: pokemon.name === selected});
      }))
    }));

    setTypeRelations(relations);
  }, [team, selected]);

  const renderTypesList = (type: any[]) => type.map(
    ({type, counter, isSelected}: any) => (
      <div key={type} style={{display:'flex', alignItems: 'flex-end'}}>
        <Type id={type} selected={isSelected} grayscale={!isSelected && selected!==null} />
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
