import { Request, Response } from 'express';

export const loginController = async (req: Request, res: Response) => {
  return res.json({ hehe: 'aha' });
};
