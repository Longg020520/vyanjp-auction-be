import { PARTNER_ENUM } from '@app/contracts';

export enum BillStatusEnum {
  NOT_PAID = 0,
  PAID = 1,
  PENDING = 2,
  PARTIAL = 3,
}

export interface UpdateBillsStatusContext {
  billIds: string[];
  studentCode: string;
  status: BillStatusEnum;
}

export interface NavigatePaymentConfigContext {
  orgCode: string;
  schoolCode: string;
  paymentPartner: PARTNER_ENUM;
  clientCode: string;
  groupStudent: string | number;
  paymentMethod: string;
  typeFee: string;
  transAmount: number;
  timestamp: number;
}

export interface GetPaymentConfigContext {
  paymentPartner: PARTNER_ENUM;
  configCode: string;
}

export interface EmitTrasnSocketNotify {
  orgCode: string;
  schoolCode: string;
  trasactionId: string;
  success: boolean;
}
