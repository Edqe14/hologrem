import '../styles/globals.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function MyApp({ Component, pageProps }: Record<string, any>): unknown {
  return <Component {...pageProps} />;
}

export default MyApp;
