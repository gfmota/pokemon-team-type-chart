const POKEAPI_ROUTE = 'https://pokeapi.co/api/v2';

export const getPokemonList = async () => {
  const response = await fetch(`${POKEAPI_ROUTE}/pokemon?limit=1154`);
  const json = await response.json();
  return json.results.map((pokemon: any) => pokemon.name) as string[];
};

export const getTypeRelations = async (type: string) => {
  const response = await fetch(`${POKEAPI_ROUTE}/type/${type}`);
  const {
    damage_relations: {
      double_damage_from: doubleDamageFrom,
      half_damage_from: halfDamageFrom,
      no_damage_from: noDamageFrom,
    },
  } = await response.json();
  const typesNameMap = (types: any[]) => types.map(({ name }) => name);

  return {
    x2: typesNameMap(doubleDamageFrom),
    x05: typesNameMap(halfDamageFrom),
    x0: typesNameMap(noDamageFrom),
  };
};
