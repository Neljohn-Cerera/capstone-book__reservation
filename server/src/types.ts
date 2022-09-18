import { authorsLoader } from './dalataloader/authorsLoader';
import { categoriesLoader } from './dalataloader/categoriesLoader';
import { Request, Response } from 'express';
import { Redis } from 'ioredis';

export type MyContext = {
  req: Request | any;
  redis: Redis;
  res: Response;
  categoriesLoader: ReturnType<typeof categoriesLoader>;
  authorsLoader: ReturnType<typeof authorsLoader>;
};
