import 'reflect-metadata'
import { NextFunction, Router } from "express"
import { HTTP_METHOD_METADATA, HTTP_URL_METADATA } from "../constants"

interface Route {
  method: string;
  url: string;
  controller: Object,
  methodName: string,
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
    if (method && url) {
      routes.push({
        method,
        url,
        controller: controller,
        methodName: propName,
      })
    }
  }
  return routes
}

function loadRoutes(routes: Array<Route>): Router {
  const r = Router()
  for (const route of routes) {
    (r as any)[route.method](route.url, (req: Request, res: Response, next: NextFunction) => {
      (route.controller as any)[route.methodName](req, res, next)
    })
  }
  return r
}

export type ControllerList = {
  [path: string]: Object
}
export function controlerLoader(controllers: ControllerList) {
  const router = Router()
  for (const path of Object.keys(controllers)) {
    const routes = getControllerRoutesMethods(controllers[path])
    router.use('/' + path, loadRoutes(routes))
  }
  return router
}
