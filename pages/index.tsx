import type { NextPage } from 'next'
import Head from 'next/head'
import Form from '../app/Components/Form'
import Pokemon from '../app/Components/Pokemon'
import TypeRelations from '../app/Components/TypeRelations'
import { useTeamContext } from '../app/Context/TeamContext'
import { MainStyled, TeamStyled } from '../app/style'
import { PokemonI } from '../app/types'

const Home: NextPage = () => {
  const {team} = useTeamContext();

  return (
    <>
      <Head>
        <title>Pokemon Team Typechart</title>
        <meta name="description" content="Know your team weakness" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div >
        <Form />
        <MainStyled>
          <TeamStyled>
            {team.map((pokemon: PokemonI) => <Pokemon pokemon={pokemon} key={pokemon.name}/>)}
          </TeamStyled>
          <TypeRelations />
        </MainStyled>
      </div>
    </>
  );
}

export default Home
