export enum TypeEnum {
  normal = 'normal',
  fire = 'fire',
  water = 'water',
  electric = 'electric',
  grass = 'grass',
  ice = 'ice',
  fighting = 'fighting',
  poison = 'poison',
  ground = 'ground',
  flying = 'flying',
  psychic = 'psychic',
  bug = 'bug',
  rock = 'rock',
  ghost = 'ghost',
  dragon = 'dragon',
  dark = 'dark',
  steel = 'steel',
  fairy = 'fairy',
}

export enum RelationKeys {
  X4 = 'x4',
  X2 = 'x2',
  X0 = 'x0',
  X05 = 'x05',
  X025 = 'x025',
}
export interface PokemonI {
  name: string;
  id: number;
  types: TypeEnum[];
  sprite: string;
  typeRelations: { [key in RelationKeys]: TypeEnum[] };
}
