import Style from '@styles/main.module.scss';
import Image from './Image';
import { ReactElement } from 'react';

interface Index {
  file: string;
  character: number[];
  expression: number[];
}

interface Props {
  files: Index[];
  characters: string[];
  expressions: string[];
}

export default function Main({
  files,
  characters,
  expressions,
}: Props): ReactElement {
  return (
    <main className={Style.container}>
      {files?.map((entry, i) => (
        <Image
          src={`/grems/${entry.file}`}
          key={i}
          character={entry.character.map((i) => characters[i])}
          expression={entry.expression.map((i) => expressions[i])}
        />
      ))}
    </main>
  );
}
