import { Klass } from './klass.model'

export interface KlassRepository {
  create(data: {title: string, pph: number}): Promise<Klass>
  update(data: {title?: string, pph?: number}): Promise<Klass>
  delete(data: {id: number}): Promise<Klass>
  readOne(data: {id: number}): Promise<Klass>
  read(): Promise<Array<Klass>>
}
