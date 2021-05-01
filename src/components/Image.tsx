import { ReactElement, useState } from 'react';
import NextImage from 'next/image';

import Style from '@styles/image.module.scss';

interface Props {
  src: string;
  width?: number;
  height?: number;
  className?: unknown;
}

export default function ReactImage({
  src,
  width = 750,
  height = 420,
  className,
}: Props): ReactElement {
  const [dimension] = useState([width, height]);

  const [copyState, setCopyState] = useState('Click to copy');
  const copyToClipboard = async () => {
    // @ts-expect-error Missing
    if (!!navigator.clipboard && !!window.ClipboardItem) {
      const blob = await fetch(src).then((res) => res.blob());
      // @ts-expect-error Missing
      await navigator.clipboard.write([
        /* eslint-disable no-undef */
        // @ts-expect-error Missing
        new ClipboardItem({ [blob.type]: blob }),
        /* eslint-enable no-undef */
      ]);

      setCopyState('Copied to clipboard!');
    } else setCopyState('Clipboard is not supported!');
  };

  return (
    <div
      className={Style.imageContainer}
      onMouseLeave={() => setCopyState('Click to copy')}
      onClick={copyToClipboard}
    >
      <div className={Style.copyWrapper}>
        <span className={Style.copy}>{copyState}</span>
      </div>

      <NextImage
        src={src}
        width={dimension[0]}
        height={dimension[1]}
        className={`${Style.image} ${className}`}
        draggable={false}
      />
    </div>
  );
}
