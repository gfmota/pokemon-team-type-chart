import type { NextPage } from 'next';
import Head from 'next/head';
import { lazy, Suspense } from 'react';
import Footer from '../app/Components/Footer';
import Form from '../app/Components/Form';
import { useTeamContext } from '../app/Context/TeamContext';
import { MainStyled, TeamStyled } from '../app/style';
import { PokemonI } from '../app/types';

const TypeRelations = lazy(() => import('../app/Components/TypeRelations'))
const Pokemon = lazy(() => import('../app/Components/Pokemon'))

const Home: NextPage = () => {
  const { team } = useTeamContext();

  return (
    <>
      <Head>
        <title>Pokemon Team Typechart</title>
        <meta name="description" content="Know your team weakness" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Form />
        <MainStyled>
          <TeamStyled>
            <Suspense fallback={<div>Loading...</div>}>
              {team.map((pokemon: PokemonI) => <Pokemon pokemon={pokemon} key={pokemon.name}/>)}
            </Suspense>
          </TeamStyled>
          <Suspense fallback={<div>Loading...</div>}>
            <TypeRelations />
          </Suspense>
        </MainStyled>
        <Footer />
      </div>
    </>
  );
};

export default Home;
