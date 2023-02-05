import 'reflect-metadata'
import { NextFunction, Router, Request, Response } from "express"
import { HTTP_METHOD_METADATA, HTTP_STATUS_METADATA, HTTP_URL_METADATA } from "../constants"

interface Route {
  method: string;
  url: string;
  controller: Object,
  methodName: string,
  expectedStatus: number,
}

function getControllerRoutesMethods(controller: Object): Array<Route> {
  const controllerProto = Object.getPrototypeOf(controller)
  const controllerProtoProps = Object.getOwnPropertyNames(controllerProto)
  const routes: Array<Route> = []
  for (const propName of controllerProtoProps) {
    const property = controllerProto[propName]
    if (typeof property !== 'function') {
      continue
    }
    const method = Reflect.getMetadata(HTTP_METHOD_METADATA, property)
    const url = Reflect.getMetadata(HTTP_URL_METADATA, property)
    const httpStatus = Reflect.getMetadata(HTTP_STATUS_METADATA, property)
    if (method && url && httpStatus) {
      routes.push({
        method,
        url,
        controller: controller,
        methodName: propName,
        expectedStatus: httpStatus,
      })
    }
  }
  return routes
}

function loadRoutes(routes: Array<Route>): Router {
  const r = Router()
  for (const route of routes) {
    (r as any)[route.method](route.url, (req: Request, res: Response, next: NextFunction) => {
      try {
        const result = (route.controller as any)[route.methodName](req, res, next)
        if (!(result instanceof Promise)) {
          if (res.headersSent) {
            return
          }
          res.status(route.expectedStatus)
          res.json(result)
          return
        }
        result
          .then(r => {
            if (res.headersSent) {
              // The response was send
              return
            }
            if (r !== undefined || r !== null) {
              res.status(route.expectedStatus)
              res.json(r)
              return
            }
            res.sendStatus(route.expectedStatus)
          })
          .catch(error => next(error))
      } catch (error) {
        next(error)
      }
    })
  }
  return r
}

export type ControllerList = {
  [path: string]: Object
}
export function controllerLoader(controllers: ControllerList) {
  const router = Router()
  for (const path of Object.keys(controllers)) {
    const routes = getControllerRoutesMethods(controllers[path])
    router.use('/' + path, loadRoutes(routes))
  }
  return router
}
