import { HTTP_STATUS_METADATA } from "../constants"

export const DEFAULT_STATUS_CODE = 200

export function setStatusCode(status: number, descriptor: PropertyDescriptor){
  Reflect.defineMetadata(HTTP_STATUS_METADATA, status, descriptor.value)
}

export function Status(status: number) {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    setStatusCode(status, descriptor)
  }
}
