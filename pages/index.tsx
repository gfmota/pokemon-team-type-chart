import type { NextPage } from 'next'
import Head from 'next/head'
import Input from '../app/Components/Input'
import Pokemon from '../app/Components/Pokemon'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Pokemon Team Typechart</title>
        <meta name="description" content="Know your team weakness" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Input />

      <Pokemon />
    </div>
  )
}

export default Home
