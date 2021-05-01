import { Request, Response } from 'express';
import { Index } from '../types';

export default function Characters(
  indexes: Record<string, Index>,
  files: string[]
): (req: Request, res: Response) => Response {
  return (req: Request, res: Response) => {
    const list: Record<string, unknown> = {};
    files.forEach((f) => {
      list[f] = {
        file: f,
        indexed: f in indexes,
      };
    });

    return res.json(list);
  };
}
