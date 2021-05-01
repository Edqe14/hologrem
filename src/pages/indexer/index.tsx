import { ReactElement, useState } from 'react';
import Head from '@components/Head';
import Header from '@components/Header';
import IndexView from '@components/IndexView';
import IndexList from '@components/IndexList';

import Style from '@styles/indexer.module.scss';

const BACKEND_PORT = 3001;

interface Props {
  characters: string[];
  categories: Record<string, string[]>;
  list: Record<string, { file: string; indexed: boolean }>;
  expressions: string[];
}

export default function Indexer({
  characters,
  categories,
  list: oriList,
  expressions,
}: Props): ReactElement {
  const [list, setList] = useState(oriList);
  const [file, setFile] = useState(
    Object.keys(list).filter((f) => !list[f].indexed)[0]
  );

  const [character, setCharacter] = useState([]);
  const [expression, setExpression] = useState([]);

  return (
    <>
      <Head />

      <Header indexer={true} port={BACKEND_PORT} />

      <main className={Style.container}>
        <IndexView
          file={file}
          port={BACKEND_PORT}
          list={list}
          setList={setList}
          characters={characters}
          categories={categories}
          expressions={expressions}
          character={character}
          setCharacter={setCharacter}
          expression={expression}
          setExpression={setExpression}
        />
        <IndexList
          list={list}
          setFile={setFile}
          setCharacter={setCharacter}
          setExpression={setExpression}
          port={BACKEND_PORT}
        />
      </main>
    </>
  );
}

export const getServerSideProps = async (): Promise<unknown> => {
  const [characters, categories, list, expressions] = await Promise.all([
    fetch(`http://localhost:${BACKEND_PORT}/characters`).then((res) =>
      res.json()
    ),
    fetch(
      `http://localhost:${BACKEND_PORT}/characters?category=1`
    ).then((res) => res.json()),
    fetch(`http://localhost:${BACKEND_PORT}/all`).then((res) => res.json()),
    fetch(`http://localhost:${BACKEND_PORT}/expressions`).then((res) =>
      res.json()
    ),
  ]);

  return {
    props: {
      characters,
      categories,
      list,
      expressions,
    },
  };
};
