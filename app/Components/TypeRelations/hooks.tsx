import { useTeamContext } from "../../Context/TeamContext"
import { PokemonI } from "../../types";
import Type from "../Type";

export const useTypeRelations = () => {
  const { team } = useTeamContext();
  const typeRelations: any = {
    x4: [],
    x2: [],
    x05: [],
    x025: [],
    x0: [],
  };
  team.forEach((pokemon: PokemonI) => Object.entries(pokemon.typeRelations).forEach(([key, value]: any) => {
    value.forEach(((type: string) => {
      if (typeRelations[key].find((relation: any) => relation.type === type)) {
        typeRelations[key].find((relation: any) => relation.type === type).counter += 1;
        return;
      }
      typeRelations[key].push({type, counter: 1});
    }))
  }));

  const renderTypesList = (type: any[]) => type.map(
    ({type, counter}: any) => <div key={type} style={{display:'flex'}}><Type id={type} /> {counter}</div>
  );

  return {
    typeRelations,
    renderTypesList,
  }
}
