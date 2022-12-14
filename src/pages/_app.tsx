import type { AppProps } from 'next/app';
import App from 'next/app';

import GlobalStyle from '../assets/styles/global';

import { ThemeContextProvider } from '../context/themeContext';

function MyApp({ Component, pageProps }: AppProps) {
  // const teste = 'vitor';

  // const props = { teste, pageProps };

  return (
    <ThemeContextProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeContextProvider>
  );
}

export default MyApp;
