import { ThemeProvider } from '@/lib/ThemeContext';
import '@/styles/global.css';
import Head from 'next/head';
import { Noto_Sans_KR } from 'next/font/google';

const notoSansKR = Noto_Sans_KR({
  weight: ['400', '700'],
  subsets: [],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Codeitmall</title>
        <link rel="icon" href="/favicon.ico" />
        <style>{`
    html {
      font-family: ${notoSansKR.style.fontFamily}, sans-serif;
    }
  `}</style>
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
