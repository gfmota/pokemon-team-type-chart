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
export interface PokemonI {
  name: string,
  types: TypeEnum[],
  sprite: string,
  selected: boolean,
  typeRelations: {
    x4: TypeEnum[],
    x2: TypeEnum[],
    x05: TypeEnum[],
    x025: TypeEnum[]
  },
};
