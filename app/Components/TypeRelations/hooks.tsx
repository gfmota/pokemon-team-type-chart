import { useEffect, useState } from "react";
import { useTeamContext } from "../../Context/TeamContext"
import { PokemonI } from "../../types";
import Type from "../Type";

export const useTypeRelations = () => {
  const { team } = useTeamContext();
  const [typeRelations, setTypeRelations] = useState<any>(null);

  useEffect(() => {
    if (team.length === 0) return;

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
          relations[key].find((relation: any) => relation.type === type).counter += 1;
          return;
        }
        relations[key].push({type, counter: 1});
      }))
    }));

    setTypeRelations(relations);
  }, [team]);

  const renderTypesList = (type: any[]) => type.map(
    ({type, counter}: any) => (
      <div key={type} style={{display:'flex', alignItems: 'flex-end'}}>
        <Type id={type} />
        <div style={{
          borderRadius: '100%',
          border: 'black 2px solid',
          padding: '0 5px',
          fontWeight: 'bold',
        }}>{counter}</div>
      </div>
    )
  );

  return {
    typeRelations,
    renderTypesList,
  }
}
