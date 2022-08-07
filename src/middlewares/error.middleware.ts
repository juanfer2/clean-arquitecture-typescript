import express, { Request, Response } from "express";

export const logErrors = (err: any, req: Request, res: Response, next: Function) => {
  console.error(err.stack);
  next(err);
}

export const clientErrorHandler = (err: any, req: Request, res: Response, next: Function) => {
  if (req.xhr) {
    res.status(500).send({ error: 'Something failed!' });
  } else {
    next(err);
  }
}

export const errorHandler = (err: any, req: Request, res: Response, next: Function) => {
  if (res.headersSent) return next(err);

  res.status(500);
  res.render('error', { error: err });
}
