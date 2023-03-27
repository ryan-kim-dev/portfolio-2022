import type { AppProps } from 'next/app';
import GlobalStyle from '@component/src/GlobalStyle';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
}
