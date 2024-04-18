import { PaymentService } from './payment.service';
import { MakePaymentDto } from './dto/make-payment.dto';
export declare class PaymentController {
    private paymentService;
    constructor(paymentService: PaymentService);
    makePayment(makePaymentDto: MakePaymentDto): Promise<any>;
}
