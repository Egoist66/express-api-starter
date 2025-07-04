import { NextFunction, Request, Response } from 'express';



export function redirectToV1(req: Request, res: Response, next: NextFunction) {
  if (req.path === '/') {
    return res.redirect(301,'/api/v1/modules');
  }
  next();
}

