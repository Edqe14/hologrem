import { DetailedHTMLProps, ReactElement, SelectHTMLAttributes } from 'react';

import Style from '@styles/select.module.scss';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Select(
  props: DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  >
): ReactElement {
  return (
    <select
      {...props}
      className={`${props?.className ?? ''} ${Style.select}`}
    ></select>
  );
}
