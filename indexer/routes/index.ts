import { Router } from 'express';
import { Config, Index } from '../types';

import Characters from './characters';
import Expressions from './expressions';
import NotIndexed from './notIndexed';
import All from './all';
import Info from './info';
import Update from './update';

export default function Routes(
  indexes: Record<string, Index>,
  files: string[],
  config: Config
): Router {
  const router = Router();

  router.get('/characters', Characters());
  router.get('/expressions', Expressions());

  router.get('/all', All(indexes, files));
  router.get('/notIndexed', NotIndexed(indexes, files, config));
  router.get('/info', Info(indexes));

  router.post('/update', Update(indexes, files));

  return router;
}
