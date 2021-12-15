import { Request, Response } from 'express';
import { Characters } from '../constants';

export default function Character(): (req: Request, res: Response) => Response {
  return (req: Request, res: Response) => {
    if (req.query.category) {
      return res.json(Characters);
    }

    res.json(Object.values(Characters).flat());
  };
}
