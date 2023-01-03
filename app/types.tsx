export enum TypeEnum {
  normal,
  fire,
  water,
  electric,
  grass,
  ice,
  fighting,
  poison,
  ground,
  flying,
  psychic,
  bug,
  rock,
  ghost,
  dragon,
  dark,
  steel,
  fairy,
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
