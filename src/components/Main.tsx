import Style from '@styles/main.module.scss';
import Image from './Image';
import { ReactElement } from 'react';

export default function Main({ files }: { files: string[] }): ReactElement {
  return (
    <main className={Style.container}>
      {files?.map((file, i) => (
        <Image src={`/grems/${file}`} key={i} />
      ))}
    </main>
  );
}
