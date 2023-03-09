import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../app/Components/Footer';
import Form from '../app/Components/Form';
import TypeRelations from '../app/Components/TypeRelations';
import { getPokemonList } from '../app/Services';
import { MainStyled } from '../app/style';
import Team from '../app/Components/Team';

interface HomeProps {
  pokemonList: { name: string; id: number }[];
}

const Home: NextPage<HomeProps> = ({ pokemonList }) => (
  <>
    <Head>
      <title>Pokemon Team Typechart</title>
      <meta name="description" content="Know your team weakness" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <>
      <Form pokemonList={pokemonList} />
      <MainStyled>
        <Team />
        <TypeRelations />
      </MainStyled>
      <Footer />
    </>
  </>
);

export const getStaticProps = async () => {
  const pokemonList = await getPokemonList();
  return { props: { pokemonList } };
};

export default Home;
