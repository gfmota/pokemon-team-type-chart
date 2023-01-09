import { PokemonI, RelationKeys, TypeEnum, TypeRelationsI } from "../types";

const POKEAPI_ROUTE = 'https://pokeapi.co/api/v2/';

const createPokemonFromJSON = async (json: any): Promise<PokemonI> => {
  const types = json.types.map((typeObj: any) => typeObj.type.name);
  const sprite = json.sprites.front_default;
  const abilities = json.abilities.map((ability: any) => ability.ability.name);
  const typeRelations = {
    x0: [],
    x2: [],
    x4: [],
    x05: [],
    x025: []
  } as TypeRelationsI;

  return {
    name: json.name,
    id: json.id,
    types,
    sprite,
    typeRelations,
    abilities
  };
};

export const getPokemon = async (input: string) => {
  const treatedInput = input.toLowerCase().replace(' ', '-');
  const response = await fetch(`${POKEAPI_ROUTE}pokemon/${treatedInput}`);
  const json = await response.json();
  const pokemon = await createPokemonFromJSON(json);
  return pokemon;
};

export const getPokemonList = async (): Promise<{ name: string, id: number }[]> => {
  const response = await fetch(`${POKEAPI_ROUTE}pokemon?limit=1154`);
  const json = await response.json();
  return json.results.map(({ name, url }: {name: string, url: string}) => ({name, id: url.substring(34, url.length - 1)}));
};

export const getPokemonTypesRelations = async (types: TypeEnum[], options?: { immunityByAbility?: TypeEnum[] }) => {
  const typeRelations: TypeRelationsI = {
    x4: [],
    x025: [],
    ...(await getTypeRelations(types[0]))
  };

  if (types[1]) {
    const secondTypeRelations = await getTypeRelations(types[1]);
    secondTypeRelations.x2.forEach((type) => {
      if (typeRelations.x0.includes(type)) return;
      if (typeRelations.x2.includes(type)) {
        typeRelations.x2 = typeRelations.x2.filter((t) => t !== type);
        typeRelations.x4.push(type);
        return;
      }
      if (typeRelations.x05.includes(type)) {
        typeRelations.x05 = typeRelations.x05.filter((t) => t !== type);
        return;
      }
      typeRelations.x2.push(type);
    });
    secondTypeRelations.x05.forEach((type) => {
      if (typeRelations.x0.includes(type)) return;
      if (typeRelations.x05.includes(type)) {
        typeRelations.x05 = typeRelations.x05.filter((t) => t !== type);
        typeRelations.x025.push(type);
        return;
      }
      if (typeRelations.x2.includes(type)) {
        typeRelations.x2 = typeRelations.x2.filter((t) => t !== type);
        return;
      }
      typeRelations.x05.push(type);
    });
    secondTypeRelations.x0.forEach((type) => {
      if (typeRelations.x0.includes(type)) return;
      if (typeRelations.x05.includes(type))
        typeRelations.x05 = typeRelations.x05.filter((t) => t !== type);
      if (typeRelations.x2.includes(type))
        typeRelations.x2 = typeRelations.x2.filter((t) => t !== type);
      typeRelations.x0.push(type);
    });
  }

  if (options?.immunityByAbility) {
    options.immunityByAbility.forEach(type => {
      if (typeRelations.x0.includes(type)) return;

      (Object.keys(typeRelations) as RelationKeys[]).forEach(relation => {
        if (relation === RelationKeys.X0) return;
        if (typeRelations[relation].includes(type))
          typeRelations[relation] = typeRelations[relation].filter((t) => t !== type);
      })
      typeRelations.x0.push(type);
    })
  }

  return typeRelations;
};

export const getTypeRelations = async (type: TypeEnum) => {
  const response = await fetch(`${POKEAPI_ROUTE}type/${type}`);
  const {
    damage_relations: {
      double_damage_from: doubleDamageFrom,
      half_damage_from: halfDamageFrom,
      no_damage_from: noDamageFrom,
    },
  } = await response.json();
  const typesNameMap = (types: { name: TypeEnum }[]) => types.map(({ name }) => name);

  return {
    x2: typesNameMap(doubleDamageFrom),
    x05: typesNameMap(halfDamageFrom),
    x0: typesNameMap(noDamageFrom),
  };
};
