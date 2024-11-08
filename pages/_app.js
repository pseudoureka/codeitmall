import { ThemeProvider } from '@/lib/ThemeContext';
import '@/styles/global.css';
import Head from 'next/head';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400'],
  subsets: [],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Codeitmall</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider>
        <div className={roboto.className}>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  );
}
