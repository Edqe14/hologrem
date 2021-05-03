import {
  BaseSyntheticEvent,
  DetailedHTMLProps,
  ImgHTMLAttributes,
  ReactElement,
  useState,
} from 'react';
import NextImage from 'next/image';

import Style from '@styles/image.module.scss';

interface Props
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  character?: string[];
  expression?: string[];
}

export default function ReactImage(props: Props): ReactElement {
  const { src, width = 750, height = 420, character, expression } = props;

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
        {character ? (
          <div className={Style.character}>
            {character.map((c, i) => (
              <span key={i}>{c}</span>
            ))}
          </div>
        ) : null}
        <span className={Style.copy}>{copyState}</span>
        {expression ? (
          <div className={Style.expression}>
            {expression.map((c, i) => (
              <span key={i}>{c}</span>
            ))}
          </div>
        ) : null}
      </div>

      <NextImage
        src={src}
        width={dimension[0]}
        height={dimension[1]}
        className={props.className}
        draggable={false}
      />
    </div>
  );
}
