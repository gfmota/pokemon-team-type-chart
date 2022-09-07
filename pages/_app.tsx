import './global.css'
import type { AppProps } from 'next/app'
import TeamContextProvider from '../app/Context/TeamContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TeamContextProvider>
      <Component {...pageProps} />
    </TeamContextProvider>
  )
}

export default MyApp
