import {
  BaseSyntheticEvent,
  Dispatch,
  ReactElement,
  SetStateAction,
} from 'react';
import Image from '@components/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import Style from '@styles/indexView.module.scss';

interface Props {
  file: string;
  port: number;
  list: Record<string, { file: string; indexed: boolean }>;
  setList: Dispatch<
    SetStateAction<Record<string, { file: string; indexed: boolean }>>
  >;
  characters: string[];
  categories: Record<string, string[]>;
  expressions: string[];
  character: number[];
  setCharacter: Dispatch<SetStateAction<number[]>>;
  expression: number[];
  setExpression: Dispatch<SetStateAction<number[]>>;
  saveState: number;
  setSaveState: Dispatch<SetStateAction<number>>;
}

const updateInfo = async (
  file: string,
  character: number[],
  expression: number[],
  port = 3001
) => {
  const res = await fetch(`http://localhost:${port}/update`, {
    method: 'POST',
    body: JSON.stringify({
      file,
      character,
      expression,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return res;
};

export default function IndexView({
  file,
  port,
  characters,
  categories,
  expressions,
  list,
  setList,
  character,
  setCharacter,
  expression,
  setExpression,
  saveState,
  setSaveState,
}: Props): ReactElement {
  const updateEntry = async () => {
    if (!character.length || !expression.length)
      return console.log('Invalid character');

    const res = await updateInfo(file, character, expression, port);
    if (res.status === 200) {
      console.log(`Updated ${file}`);
      setList({
        ...list,
        [file]: {
          file,
          indexed: true,
        },
      });
    }
  };

  const updateValue = (
    src: number,
    val?: number[],
    ev?: BaseSyntheticEvent
  ) => {
    if (saveState !== 3) {
      saveState = 3;
      setSaveState(3);
    }

    let value: number;
    if (ev.type === 'change') {
      const i = ev.target.selectedIndex;
      value = parseInt(ev.target[i].value);
      if (isNaN(value)) return;
    }

    if (src === 0) {
      if (val) character = val;
      else character = [...new Set([value, ...character])];

      setCharacter(character);
    } else if (src === 1) {
      if (val) expression = val;
      else expression = [...new Set([value, ...expression])];

      setExpression(expression);
    }

    updateEntry();
  };

  return (
    <section className={Style.container}>
      <div>
        <Image
          src={`/grems/${file}`}
          width={300}
          height={200}
          className={Style.image}
        />
      </div>

      <div className={Style.properties}>
        <div className={Style.selection}>
          <label htmlFor='character' className={Style.label}>
            Character
          </label>

          <div className={Style.selected}>
            {character.map((cI) => (
              <span className={Style.selection} key={cI}>
                {characters[cI]}{' '}
                <FontAwesomeIcon
                  icon={faTimes}
                  className={Style.close}
                  onClick={updateValue.bind(
                    this,
                    0,
                    character.filter((c) => c !== cI)
                  )}
                />
              </span>
            ))}
          </div>

          <select
            name='character'
            className={Style.select}
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
          </select>
        </div>

        <div className={Style.selection}>
          <label htmlFor='expression' className={Style.label}>
            Expression
          </label>

          <div className={Style.selected}>
            {expression.map((eI) => (
              <span className={Style.selection} key={eI}>
                {expressions[eI]}{' '}
                <FontAwesomeIcon
                  icon={faTimes}
                  className={Style.close}
                  onClick={updateValue.bind(
                    this,
                    1,
                    expression.filter((c) => c !== eI)
                  )}
                />
              </span>
            ))}
          </div>

          <select
            name='expression'
            className={Style.select}
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
          </select>
        </div>

        {/* <button className={Style.update} onClick={updateEntry}>
          Update
        </button> */}
      </div>
    </section>
  );
}
