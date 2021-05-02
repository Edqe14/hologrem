import { ReactElement, useState, useEffect } from 'react';
import Head from '@components/Head';
import Header from '@components/Header';
import IndexView from '@components/IndexView';
import IndexList from '@components/IndexList';

import Style from '@styles/indexer.module.scss';

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

  // 0 idle
  // 1 error
  // 2 success
  // 3 not saved
  // eslint-disable-next-line prefer-const
  const [saveState, setSaveState] = useState(0);

  useEffect(() => {
    window.addEventListener('beforeunload', (ev: BeforeUnloadEvent) => {
      if (saveState === 3) {
        ev.preventDefault();
        ev.returnValue = '';
        return ev.returnValue;
      }
    });
  }, [saveState]);

  return (
    <>
      <Head />

      <Header
        indexer={true}
        // @ts-expect-error Webpack
        // eslint-disable-next-line no-undef
        port={BACKEND_PORT}
        list={list}
        saveState={saveState}
        setSaveState={setSaveState}
      />

      <main className={Style.container}>
        <IndexView
          file={file}
          // @ts-expect-error Webpack
          // eslint-disable-next-line no-undef
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
          saveState={saveState}
          setSaveState={setSaveState}
        />
        <IndexList
          list={list}
          setFile={setFile}
          setCharacter={setCharacter}
          setExpression={setExpression}
          // @ts-expect-error Webpack
          // eslint-disable-next-line no-undef
          port={BACKEND_PORT}
        />
      </main>
    </>
  );
}

export const getServerSideProps = async (): Promise<unknown> => {
  const [characters, categories, list, expressions] = await Promise.all([
    // @ts-expect-error Webpack
    // eslint-disable-next-line no-undef
    fetch(`http://localhost:${BACKEND_PORT}/characters`).then((res) =>
      res.json()
    ),
    fetch(
      // @ts-expect-error Webpack
      // eslint-disable-next-line no-undef
      `http://localhost:${BACKEND_PORT}/characters?category=1`
    ).then((res) => res.json()),
    // @ts-expect-error Webpack
    // eslint-disable-next-line no-undef
    fetch(`http://localhost:${BACKEND_PORT}/all`).then((res) => res.json()),
    // @ts-expect-error Webpack
    // eslint-disable-next-line no-undef
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
