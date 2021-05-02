import {
  BaseSyntheticEvent,
  Dispatch,
  ReactElement,
  SetStateAction,
  useState,
} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faTimes } from '@fortawesome/free-solid-svg-icons';
import Select from '@components/Select';

import Style from '@styles/options.module.scss';

interface Props {
  sort: [number, Dispatch<SetStateAction<number>>];
  sortOrder: [number, Dispatch<SetStateAction<number>>];
  charFilter: [number[], Dispatch<SetStateAction<number[]>>];
  expFilter: [number[], Dispatch<SetStateAction<number[]>>];
  characters: string[];
  categories: Record<string, string[]>;
  expressions: string[];
}

export default function Options({
  sort: sortSrc,
  sortOrder: sOSrc,
  charFilter,
  expFilter,
  characters,
  categories,
  expressions,
}: Props): ReactElement {
  const [sortBy, setSortBy] = sortSrc;
  const [sortOrder, setSortOrder] = sOSrc;

  // eslint-disable-next-line prefer-const
  let [characterFilter, setCharacterFilter] = charFilter;
  // eslint-disable-next-line prefer-const
  let [expressionFilter, setExpressionFilter] = expFilter;

  const [open, setOpen] = useState(false);

  const updateValue = (
    src: number,
    val?: number[],
    ev?: BaseSyntheticEvent
  ) => {
    let value: number;
    if (ev.type === 'change') {
      const i = ev.target.selectedIndex;
      value = parseInt(ev.target[i].value);
      if (isNaN(value)) return;
    }

    if (src === 0) {
      if (val) characterFilter = val;
      else characterFilter = [...new Set([value, ...characterFilter])];

      setCharacterFilter(characterFilter);
    } else if (src === 1) {
      if (val) expressionFilter = val;
      else expressionFilter = [...new Set([value, ...expressionFilter])];

      setExpressionFilter(expressionFilter);
    }
  };

  return (
    <div className={Style.container}>
      <span className={Style.open} onClick={setOpen.bind(this, true)}>
        <FontAwesomeIcon icon={faCog} className={Style.icon} />
        Options
      </span>

      <div
        className={Style.options}
        style={{ display: open ? 'block' : 'none' }}
      >
        <div className={Style.content}>
          <FontAwesomeIcon
            icon={faTimes}
            className={Style.close}
            onClick={setOpen.bind(this, false)}
          />

          <div className={Style.properties}>
            <div className={Style.selection}>
              <label htmlFor='character' className={Style.label}>
                Character
              </label>

              <div className={Style.selected}>
                {characterFilter.map((cI) => (
                  <span className={Style.selection} key={cI}>
                    {characters[cI]}{' '}
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={Style.close}
                      onClick={updateValue.bind(
                        this,
                        0,
                        characterFilter.filter((c) => c !== cI)
                      )}
                    />
                  </span>
                ))}
              </div>

              <Select
                name='character'
                onChange={updateValue.bind(this, 0, null)}
                value={-1}
              >
                <option value={-1} disabled>
                  Select character
                </option>
                {Object.keys(categories).map((k) => (
                  <>
                    <option value={-5} disabled>
                      {k}
                    </option>

                    {categories[k].map((c) => {
                      const index = characters.indexOf(c);
                      if (index === -1) return;

                      return (
                        <option value={index} key={index}>
                          {c}
                        </option>
                      );
                    })}
                  </>
                ))}
              </Select>
            </div>

            <div className={Style.selection}>
              <label htmlFor='expression' className={Style.label}>
                Expression
              </label>

              <div className={Style.selected}>
                {expressionFilter.map((eI) => (
                  <span className={Style.selection} key={eI}>
                    {expressions[eI]}{' '}
                    <FontAwesomeIcon
                      icon={faTimes}
                      className={Style.close}
                      onClick={updateValue.bind(
                        this,
                        1,
                        expressionFilter.filter((c) => c !== eI)
                      )}
                    />
                  </span>
                ))}
              </div>

              <Select
                name='expression'
                onChange={updateValue.bind(this, 1, null)}
                value={-1}
              >
                <option value={-1} disabled>
                  Select expression
                </option>
                {expressions.map((k, i) => (
                  <option value={i} key={i}>
                    {k}
                  </option>
                ))}
              </Select>
            </div>

            <div className={Style.selection}>
              <label className={Style.label}>Sort</label>

              <div className={Style.sort}>
                <div>
                  <label htmlFor='sortBy' className={Style.sortSubtitle}>
                    Sort By
                  </label>

                  <Select
                    value={sortBy}
                    onChange={(ev: BaseSyntheticEvent) => {
                      const i = ev.target.selectedIndex;
                      const value = parseInt(ev.target[i].value);
                      if (isNaN(value)) return;
                      setSortBy(value);
                    }}
                  >
                    <option value='0'>Name</option>
                    <option value='1'>Expression</option>
                  </Select>
                </div>

                <div>
                  <label htmlFor='sortOrder' className={Style.sortSubtitle}>
                    Sort Order
                  </label>

                  <Select
                    value={sortOrder}
                    onChange={(ev: BaseSyntheticEvent) => {
                      const i = ev.target.selectedIndex;
                      const value = parseInt(ev.target[i].value);
                      if (isNaN(value)) return;
                      setSortOrder(value);
                    }}
                  >
                    <option value='1'>Generation 0 - UP</option>
                    <option value='-1'>UP - Generation 0</option>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
