import type { AppProps } from 'next/app';
import GlobalStyle from '@component/src/GlobalStyle';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { Nav } from '@component/components';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ryan Kim</title>
      </Head>
      <GlobalStyle />
      <Nav />
      <Component {...pageProps} />
    </Provider>
  );
}
