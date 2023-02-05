import { PaymentRepository } from "./payment.repository";

export class PaymentController {
  constructor(private repository: PaymentRepository){}
}
