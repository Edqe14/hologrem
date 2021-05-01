import { Request, Response } from 'express';
import { Config, Index } from '../types';

export default function Characters(
  indexes: Record<string, Index>,
  files: string[],
  config: Config
): (req: Request, res: Response) => Response {
  return (req: Request, res: Response) => {
    const indexed = Object.keys(indexes);
    const filtered = files.filter(
      (f) => config.sendIndexedEntry || !indexed.includes(f)
    );

    return res.json({
      file: filtered[0],
      index: indexes[filtered[0]],
    });
  };
}
