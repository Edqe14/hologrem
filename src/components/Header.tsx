import Style from '@styles/header.module.scss';
import Link from 'next/link';
import { Dispatch, ReactElement, SetStateAction } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

interface Props {
  indexer?: boolean;
  port?: number;
  list?: Record<
    string,
    {
      file: string;
      indexed: boolean;
    }
  >;
  saveState?: number;
  setSaveState?: Dispatch<SetStateAction<number>>;
}

export default function Header({
  indexer,
  port,
  list,
  saveState,
  setSaveState,
}: Props): ReactElement {
  const dump = async () => {
    const res = await fetch(`http://localhost:${port}/dump`, {
      method: 'PUT',
    });

    if (res.status !== 200) {
      const json = await res.json();
      console.error('Failed while dumping', json);

      setSaveState(1);
      setTimeout(() => setSaveState(0), 3000);
    } else {
      console.log('Dump successful');

      setSaveState(2);
      setTimeout(() => setSaveState(0), 3000);
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
        <>
          <p className={Style.indexCount}>
            {Object.values(list).filter((f) => f.indexed).length} /{' '}
            {Object.keys(list).length}
          </p>
          <button
            className={Style.dumpButton}
            onClick={dump}
            style={{
              background:
                saveState === 0
                  ? '#106de8'
                  : saveState === 1
                  ? '#e51919'
                  : saveState === 2
                  ? '#1cdd23'
                  : '#efc921',
            }}
          >
            Dump
          </button>
        </>
      )}
    </header>
  );
}
