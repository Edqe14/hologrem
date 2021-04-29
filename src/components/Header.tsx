import Style from '@styles/header.module.scss';
import Link from 'next/link';
import { ReactElement } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export default function Header(): ReactElement {
  return (
    <header className={Style.container}>
      <Link href='/'>
        <h1>HoloGrem</h1>
      </Link>

      <Link href='/about'>
        <FontAwesomeIcon icon={faInfoCircle} className={Style.infoButton} />
      </Link>
    </header>
  );
}
