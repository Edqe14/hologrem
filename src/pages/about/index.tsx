import Head from '@components/Head';
import Header from '@components/Header';
import Image from 'next/image';

import Style from '@styles/about.module.scss';

export default function About(): unknown {
  return (
    <>
      <Head />

      <Header />

      <main className={Style.container}>
        <section className={Style.prodAbout}>
          <Image src='/images/logo.png' width={200} height={200} />

          <div className={Style.info}>
            <div className={Style.prodName}>
              <h1>HoloGrem</h1>
              <p>A Collection of Hololive Gremlins</p>
            </div>

            <div className={Style.disclaimer}>
              <p>
                This website is only for <b>fun</b>. Any characters used in this
                website is legally owned by{' '}
                <a href='https://cover-corp.com/' referrerPolicy='no-referrer'>
                  Cover Corp
                </a>
                .
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
