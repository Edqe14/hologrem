import Head from '@components/Head';
import Header from '@components/Header';
import Main from '@components/Main';

import fs from 'fs/promises';
import path from 'path';

export default function Home({ files }: { files: string[] }): unknown {
  return (
    <>
      <Head />

      <Header />

      <Main files={files} />
    </>
  );
}

export async function getStaticProps(): Promise<{
  props: { files: string[] };
}> {
  const files = await fs.readdir(path.join(__dirname, '..', 'public', 'grems'));

  return {
    props: {
      files,
    },
  };
}
