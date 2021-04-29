import NextHead from 'next/head';

export default function Head() {
  return (
    <NextHead>
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
      <link rel='apple-touch-icon' href='/icons/apple-icon-180.png' />

      <meta charSet='UTF-8' />
      <meta http-equiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='theme-color' content='#2196f3' />
      <meta name='og:title' content='HoloGrem' />
      <meta name='og:type' content='website' />
      <meta name='og:image' content='/images/logo.png' />
      <meta property='og:locale' content='en_US' />
      <meta name='og:description' content='A Collection of Hololive Gremlins' />

      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap'
        rel='stylesheet'
      />
    </NextHead>
  );
}
