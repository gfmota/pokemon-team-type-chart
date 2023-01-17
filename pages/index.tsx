import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../app/Components/Footer';
import Form from '../app/Components/Form';
import Pokemon from '../app/Components/Pokemon';
import TypeRelations from '../app/Components/TypeRelations';
import { useTeamContext } from '../app/Context/hook';
import { getPokemonList } from '../app/Services';
import { MainStyled, TeamStyled } from '../app/style';
import { PokemonI } from '../app/model';

interface HomeProps {
  pokemonList: { name: string; id: number }[];
}

const Home: NextPage<HomeProps> = ({ pokemonList }) => {
  const { team } = useTeamContext();

  return (
    <>
      <Head>
        <title>Pokemon Team Typechart</title>
        <meta name="description" content="Know your team weakness" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Form pokemonList={pokemonList} />
        <MainStyled>
          <TeamStyled>
            {team.map((pokemon: PokemonI) => (
              <Pokemon pokemon={pokemon} key={pokemon.name} />
            ))}
          </TeamStyled>
          <TypeRelations />
        </MainStyled>
        <Footer />
      </>
    </>
  );
};

export const getStaticProps = async () => {
  const pokemonList = await getPokemonList();
  return { props: { pokemonList } };
};

export default Home;
