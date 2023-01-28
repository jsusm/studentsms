import "reflect-metadata"
import { HTTP_METHOD_METADATA, HTTP_STATUS_METADATA, HTTP_URL_METADATA } from "../constants"
import { setStatusCode, DEFAULT_STATUS_CODE } from "./statusDecorator"

function MethodDecorator(method: string) {
  return function(url: string) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      Reflect.defineMetadata(HTTP_METHOD_METADATA, method, descriptor.value)
      Reflect.defineMetadata(HTTP_URL_METADATA, url, descriptor.value)
      if (!Reflect.hasMetadata(HTTP_STATUS_METADATA, descriptor.value)) {
        setStatusCode(DEFAULT_STATUS_CODE, descriptor)
      }
    }
  }
}

export const Get = MethodDecorator('get')
export const Post = MethodDecorator('post')
export const Put = MethodDecorator('put')
export const Patch = MethodDecorator('patch')
export const Delete = MethodDecorator('delete')
