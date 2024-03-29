import {
  MoveData,
  PokemonI,
  RelationKeys,
  TypeEnum,
  TypeRelationsI,
} from '../model';

const POKEAPI_ROUTE = 'https://pokeapi.co/api/v2/';

const createPokemonFromJSON = async (json: any): Promise<PokemonI> => {
  const types = json.types.map((typeObj: any) => typeObj.type.name);
  const abilities = json.abilities.map((ability: any) => ability.ability.name);
  const moves = json.moves.map(({ move }: any) => move);
  const typeRelations = {
    x0: [],
    x2: [],
    x4: [],
    x05: [],
    x025: [],
  } as TypeRelationsI;

  return {
    name: json.name,
    id: json.id,
    types,
    typeRelations,
    abilities,
    moves,
  };
};

export const getPokemon = async (input: string) => {
  const treatedInput = input.toLowerCase().replace(' ', '-');
  const response = await fetch(`${POKEAPI_ROUTE}pokemon/${treatedInput}`);
  const json = await response.json();
  const pokemon = await createPokemonFromJSON(json);
  return pokemon;
};

export const getPokemonList = async (): Promise<
  { name: string; id: number }[]
> => {
  const response = await fetch(`${POKEAPI_ROUTE}pokemon?limit=1154`);
  const json = await response.json();
  return json.results.map(({ name, url }: { name: string; url: string }) => ({
    name,
    id: url.substring(34, url.length - 1),
  }));
};

enum RelationType {
  FROM,
  TO,
}

export const getPokemonTypesRelations = async (
  types: TypeEnum[],
  options?: { immunityByAbility?: TypeEnum[] }
) => {
  const typeRelations: TypeRelationsI = {
    x4: [],
    x025: [],
    ...(await getTypeRelations(types[0]))[RelationType.FROM],
  };

  if (types[1]) {
    const secondTypeRelations = (await getTypeRelations(types[1]))[
      RelationType.FROM
    ];
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
    options.immunityByAbility.forEach((type) => {
      if (typeRelations.x0.includes(type)) return;

      (Object.keys(typeRelations) as RelationKeys[]).forEach((relation) => {
        if (relation === RelationKeys.X0) return;
        if (typeRelations[relation].includes(type))
          typeRelations[relation] = typeRelations[relation].filter(
            (t) => t !== type
          );
      });
      typeRelations.x0.push(type);
    });
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
      double_damage_to: doubleDamageTo,
      half_damage_to: halfDamageTo,
      no_damage_to: noDamageTo,
    },
  } = await response.json();
  const typesNameMap = (types: { name: TypeEnum }[]) =>
    types.map(({ name }) => name);

  return {
    [RelationType.FROM]: {
      x2: typesNameMap(doubleDamageFrom),
      x05: typesNameMap(halfDamageFrom),
      x0: typesNameMap(noDamageFrom),
    },
    [RelationType.TO]: {
      x2: typesNameMap(doubleDamageTo),
      x05: typesNameMap(halfDamageTo),
      x0: typesNameMap(noDamageTo),
    },
  };
};

export const getMoveData = async (moveUrl?: string) => {
  if (!moveUrl) return null;
  const response = await fetch(moveUrl);
  const json = await response.json();
  const type = json.type.name;
  return {
    name: json.name,
    damageClass: json.damage_class.name,
    type,
    typeRelation: (await getTypeRelations(type))[RelationType.TO],
  } as MoveData;
};
