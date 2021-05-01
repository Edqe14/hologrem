import { Request, Response } from 'express';
import { Character } from '../constants';

export default function Characters(): (
  req: Request,
  res: Response
) => Response {
  return (req: Request, res: Response) => {
    if (req.query.category) {
      return res.json({
        'Gen 0': Character.slice(0, 5),
        'Gen 1': Character.slice(5, 10),
        'Gen 2': Character.slice(10, 15),
        GAMERS: Character.slice(15, 18),
        'Gen 3': Character.slice(18, 23),
        'Gen 4': Character.slice(23, 28),
        'Gen 5': Character.slice(28, 32),
        Holostars: Character.slice(32, 41),
        'ID Gen 1': Character.slice(41, 44),
        'ID Gen 2': Character.slice(44, 47),
        'EN Gen 1': Character.slice(47, 52),
      });
    }

    res.json(Character);
  };
}
