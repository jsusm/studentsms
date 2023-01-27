import "reflect-metadata"
import { HTTP_METHOD_METADATA, HTTP_URL_METADATA } from "../constants"

function MethodDecorator(method: string) {
  return function(url: string) {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      Reflect.defineMetadata(HTTP_METHOD_METADATA, method, descriptor.value)
      Reflect.defineMetadata(HTTP_URL_METADATA, url, descriptor.value)
    }
  }
}

export const Get = MethodDecorator('get')
export const Post = MethodDecorator('post')
export const Put = MethodDecorator('put')
export const Patch = MethodDecorator('patch')
export const Delete = MethodDecorator('delete')
