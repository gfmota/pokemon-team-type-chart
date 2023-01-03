import './global.css';
import type { AppProps } from 'next/app';
import TeamContextProvider from '../app/Context/TeamContext';
import FormContextProvider from '../app/Components/Form/Context/FormContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TeamContextProvider>
      <FormContextProvider>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </FormContextProvider>
    </TeamContextProvider>
  );
}

export default MyApp;
