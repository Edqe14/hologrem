import Style from '@styles/header.module.scss';
import Link from 'next/link';
import { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

interface Props {
  indexer?: boolean;
  port?: number;
}

export default function Header({ indexer, port }: Props): ReactElement {
  const dump = async () => {
    const res = await fetch(`http://localhost:${port}/dump`, {
      method: 'PUT',
    });

    if (res.status !== 200) {
      const json = await res.json();
      console.error('Failed while dumping', json);
    } else {
      console.log('Dump successful');
    }
  };

  return (
    <header className={Style.container}>
      <Link href='/'>
        <h1>HoloGrem</h1>
      </Link>

      {!indexer ? (
        <Link href='/about'>
          <FontAwesomeIcon icon={faInfoCircle} className={Style.infoButton} />
        </Link>
      ) : (
        <button className={Style.dumpButton} onClick={dump}>
          Dump
        </button>
      )}
    </header>
  );
}
