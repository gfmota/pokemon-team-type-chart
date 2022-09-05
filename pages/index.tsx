import type { NextPage } from 'next'
import Head from 'next/head'
import Input from '../app/Components/Input'
import Pokemon from '../app/Components/Pokemon'
import TypeRelations from '../app/Components/TypeRelations'
import { useTeamContext } from '../app/Context/TeamContext'
import { PokemonI } from '../app/types'

const Home: NextPage = () => {
  const {team} = useTeamContext();

  return (
    <div>
      <Head>
        <title>Pokemon Team Typechart</title>
        <meta name="description" content="Know your team weakness" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Input />
      {team.map((pokemon: PokemonI) => <Pokemon pokemon={pokemon} key={pokemon.name}/>)}

      <TypeRelations />
    </div>
  )
}

export default Home
