import './global.css'
import type { AppProps } from 'next/app'
import TeamContextProvider from '../app/Context/TeamContext'
import FormContextProvider from '../app/Components/Form/Context/FormContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TeamContextProvider>
      <FormContextProvider>
        <Component {...pageProps} />
      </FormContextProvider>
    </TeamContextProvider>
  )
}

export default MyApp
