import { Payment } from "@prisma/client";
import { PaymentRepository } from "./payment.repository";

const paymentMockData: Payment[] = [
  {
    id: 1,
    at: new Date(),
    sessionId: 1,
  },
  {
    id: 2,
    at: new Date(2023, 4, 23),
    sessionId: 1,
  }
]

export class PaymentMockRepository implements PaymentRepository {
  data = [...paymentMockData]
  async create(data: { at: Date; sessionId: number; }): Promise<Payment> {
    return {...data, id: 0}
  }
  async readOne(criteria: { id: number; }): Promise<Payment | null> {
    return this.data.find(p => p.id === criteria.id) || null
  }
  async read(): Promise<Payment[]> {
    return this.data
  }
  async delete(criteria: { id: number; }): Promise<void> {
    if(!await this.readOne(criteria)){
      throw new Error(`Payment with id:${criteria.id} does not exist`)
    }
  }
}
