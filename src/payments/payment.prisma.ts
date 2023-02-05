import { Payment, PrismaClient } from '@prisma/client'
import { CreatePaymentData, PaymentRepository } from './payment.repository';

export class PaymentPrismaRepository implements PaymentRepository {
  prisma: PrismaClient
  constructor() {
    this.prisma = new PrismaClient()
  }
  read(): Promise<Payment[]> {
    return this.prisma.payment.findMany()
  }
  readOne(criteria: { id: number; }): Promise<Payment | null> {
    return this.prisma.payment.findUnique({ where: criteria })
  }
  create(data: CreatePaymentData): Promise<Payment> {
    return this.prisma.payment.create({ data })
  }
  async delete(criteria: { id: number; }): Promise<void> {
    await this.prisma.payment.delete({where: { id: criteria.id }}) 
  }
}
