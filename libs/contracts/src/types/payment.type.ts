export enum PaymentMethodEnum {
  QR = 'QR',
  ATM = 'ATM',
  VISA = 'VISA',
  WALLET = 'WALLET',
}

export type PaymentHistoryType = {
  so_phieu_bao?: string;
  ma_sv?: string;
  studentName?: string;
  tmnCode?: string;
  tmnHashSecret?: string;
  orderId?: any;
  redirect_success?: string;
  noi_dung?: string;
  amount?: number;
  createDate?: number;
  bankCode?: string;
  schoolCode?: string;
  schoolUrl?: string;
  orgCode?: string;
  orgName?: string;
  schoolName?: string;
  totalAmount?: number;
  TIDStar?: number;
  fee?: number;
  paymentMethod?: string;
  secretCode?: string;
  paymentChannel?: string;
  isTest?: boolean;
  is_nhap_tien?: boolean;
  bills: any;
  _id?: any;
  status?: number;
};

export interface AccountIndentificationSHBType {
  ma_sv?: string;
  schoolCode?: string;
  orgCode?: string;
  clientId?: string;
  clientSecret?: string;
  taxNo?: string;
  aliasAccountNo?: string;
  aliasAccountName?: string;
  provinceCd?: string;
  saleTypeCd?: string;
  accountNo?: string;
  debtAmount?: any;
  billCode?: any;
  debtDescription?: any;
  isValidateAmount?: any;
  msgId?: any;
}
