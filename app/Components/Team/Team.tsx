import { useTeamContext } from '../../Context/hook';
import { PokemonI } from '../../model';
import Pokemon from '../Pokemon';
import { TeamStyled } from './style';

export const Team = () => {
  const { team } = useTeamContext();
  return (
    <TeamStyled>
      {team.map((pokemon: PokemonI) => (
        <Pokemon pokemon={pokemon} key={pokemon.name} />
      ))}
    </TeamStyled>
  );
};
