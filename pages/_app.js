import { ThemeProvider } from '@/lib/ThemeContext';
import '@/styles/global.css';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
