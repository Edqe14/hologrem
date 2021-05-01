import { Request, Response } from 'express';
import { Index } from '../types';

export default function Characters(
  indexes: Record<string, Index>,
  files: string[]
): (req: Request, res: Response) => Response {
  return (req: Request, res: Response) => {
    const { file } = req.body;
    console.log(req.body);
    if (!files.includes(file))
      return res.status(404).json({ error: 'File not exists' });

    const entry = (indexes[file] = req.body);

    return res.json(entry);
  };
}
