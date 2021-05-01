import { Dispatch, ReactElement, SetStateAction } from 'react';
import Image from 'next/image';

import Style from '@styles/indexList.module.scss';

interface Props {
  list: Record<string, { file: string; indexed: boolean }>;
  setFile: Dispatch<SetStateAction<string>>;
  setCharacter: Dispatch<SetStateAction<number[]>>;
  setExpression: Dispatch<SetStateAction<number[]>>;
  port: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fetchInfo = async (file: string, port = 3001): Promise<any> => {
  const res = await fetch(`http://localhost:${port}/info?file=${file}`);
  return await res.json();
};

export default function IndexList({
  list,
  setFile,
  setCharacter,
  setExpression,
  port,
}: Props): ReactElement {
  const update = async (file: string) => {
    const info = await fetchInfo(file, port);
    setFile(file);
    setCharacter(info?.entry?.character ?? []);
    setExpression(info?.entry?.expression ?? []);
  };

  return (
    <ul className={Style.container}>
      {Object.values(list).map(({ file, indexed }, i) => (
        <li
          className={Style.listEntry}
          key={i}
          onClick={update.bind(this, file)}
        >
          <div>
            <Image src={`/grems/${file}`} width={32} height={32} />
          </div>
          <p>{file}</p>

          {indexed ? <span className={Style.indexed}>Indexed</span> : null}
        </li>
      ))}
    </ul>
  );
}
