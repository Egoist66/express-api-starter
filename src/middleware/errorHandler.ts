import { NextFunction, Request, Response } from 'express';
import ErrorResponse from '../types/ErrorResponse';



/**
 * Handles errors by sending a JSON response with the error message and stack trace
 * 
 * @param err - The error object
 * @param req - The request object
 * @param res - The response object
 * @param next - The next function in the middleware chain
 */

export function errorHandler(err: Error, req: Request, res: Response<ErrorResponse>, next: NextFunction) {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
  });
}
