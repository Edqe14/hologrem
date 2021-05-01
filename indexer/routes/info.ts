import { Request, Response } from 'express';
import { Index } from '../types';

export default function Characters(
  indexes: Record<string, Index>
): (req: Request, res: Response) => Response {
  return (req: Request, res: Response) => {
    const file = req.query.file as string;
    if (!file) res.status(400).json({ error: 'Invalid file' });

    const entry = indexes[file];

    return res.json({
      file,
      entry,
    });
  };
}
