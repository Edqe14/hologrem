import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

export default function Home(): unknown {
  return (
    <>
      <Head>
        <title>HoloGrem</title>

        <link
          rel='shortcut icon'
          href='favicon-32x32.png'
          type='image/png'
          sizes='32x32'
        />
        <link
          rel='shortcut icon'
          href='favicon-16x16.png'
          type='image/png'
          sizes='16x16'
        />

        <link rel='manifest' href='manifest.json' />
        <meta charSet='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='apple-touch-icon' content='/icons/apple-icon-180.png' />
      </Head>
    </>
  );
}
