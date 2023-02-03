import type { Request, Response, NextFunction } from 'express'
import { ZodError } from 'zod'
import { fromZodError } from 'zod-validation-error'
import * as config from './config'

export function requestZodErrorHander(error: Error, req: Request, res: Response, next: NextFunction){
  if(error instanceof ZodError) {
    res.status(400).json(fromZodError(error).message)
    return
  }
  next(error)
}

export function requestErrorHandler(error: Error, req: Request, res: Response, next: NextFunction) {
  console.error(error)
  if(config.env === 'development') {
    res.status(500).json({
      message: error.message ,
      stack: error.stack,
    })
  }else {
    res.status(500).json({
      message: "Ups, something went wrong in our side. :(",
    })
  }
}
