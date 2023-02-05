import { Payment } from './payment.model'

export type CreatePaymentData = Omit<Payment, 'id'>

export interface PaymentRepository {
  create(data: CreatePaymentData): Promise<Payment>
  read(): Promise<Array<Payment>>
  readOne(criteria: {id: number}): Promise<Payment | null>
  delete(criteria: {id: number}): Promise<void>
}
