import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../app/Components/Footer'
import Form from '../app/Components/Form'
import Pokemon from '../app/Components/Pokemon'
import TypeRelations from '../app/Components/TypeRelations'
import { useTeamContext } from '../app/Context/TeamContext'
import { MainStyled, TeamStyled } from '../app/style'

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
            {Object.values(team).map((pokemon: any) => <Pokemon pokemon={pokemon} key={pokemon.name}/>)}
          </TeamStyled>
          <TypeRelations />
        </MainStyled>
        <Footer />
      </div>
    </>
  );
}

export default Home
