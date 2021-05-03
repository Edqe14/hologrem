import Head from '@components/Head';
import Header from '@components/Header';
import Main from '@components/Main';
import Options from '@components/Options';

import fs from 'fs';
import path from 'path';
import { useState } from 'react';

interface Index {
  file: string;
  character: number[];
  expression: number[];
}

interface Props {
  characters: string[];
  expressions: string[];
  categories: Record<string, string[]>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  files: Record<string, Index>;
}

export default function Home({
  characters,
  expressions,
  categories,
  files,
}: Props): unknown {
  // 0 name
  // 1 expression
  const [sortBy, setSortBy] = useState(0);
  // 1 gen0 ^
  // -1 genN v
  const [sortOrder, setSortOrder] = useState(1);

  const [characterFilter, setCharacterFilter] = useState([]);
  const [expressionFilter, setExpressionFilter] = useState([]);

  const filter = (i: Index) => {
    if (!characterFilter.length && !expressionFilter.length) return true;
    return (
      (!characterFilter.length ||
        i.character.some((c) => characterFilter.includes(c))) &&
      (!expressionFilter.length ||
        i.expression.some((e) => expressionFilter.includes(e)))
    );
  };

  const sort = (a: Index, b: Index) => {
    switch (sortBy) {
      case 0: {
        if (sortOrder === 1) return a.character[0] - b.character[0];
        return b.character[0] - a.character[0];
      }

      case 1: {
        if (sortOrder === 1) return a.expression[0] - b.expression[0];
        return b.expression[0] - a.expression[0];
      }

      default:
        return 1;
    }
  };

  return (
    <>
      <Head />

      <Header />

      <Options
        sort={[sortBy, setSortBy]}
        sortOrder={[sortOrder, setSortOrder]}
        charFilter={[characterFilter, setCharacterFilter]}
        expFilter={[expressionFilter, setExpressionFilter]}
        characters={characters}
        expressions={expressions}
        categories={categories}
      />

      <Main
        files={Object.values(files).filter(filter).sort(sort)}
        characters={characters}
        expressions={expressions}
      />
    </>
  );
}

export async function getStaticProps(): Promise<{
  props: Props;
}> {
  const [characters, categories, expressions, files] = await Promise.all([
    /* eslint-disable prettier/prettier */
    JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'public', 'characters.json'), 'utf-8')),
    JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'public', 'characters-category.json'), 'utf-8')),
    JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'public', 'expressions.json'), 'utf-8')),
    JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'public', 'index.json'), 'utf-8'))
    /* eslint-enable prettier/prettier */
  ]);

  return {
    props: {
      characters,
      categories,
      expressions,
      files,
    },
  };
}
