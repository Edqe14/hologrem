import { Request, Response } from 'express';
import { Expression } from '../constants';

export default function Characters(): (
  req: Request,
  res: Response
) => Response {
  return (req: Request, res: Response) => res.json(Expression);
}
