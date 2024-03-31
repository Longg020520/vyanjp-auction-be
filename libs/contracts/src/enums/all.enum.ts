export enum TrackingClassifys {
  MINUTES = 'MINUTES',
  HOUR = 'HOUR',
  DAY = 'DAY',
  WEEK = 'WEEK',
  MONTH = 'MONTH',
  YEAR = 'YEAR',
}

export enum TrackingTypes {
  TRACK = 'TRACK',
}

export enum PAYMENTMETHOD_ENUM {
  ONLYONE = 'ONLYONE',
  ACTIVESTANDBY = 'ACTIVESTANDBY',
  COACTIVE = 'COACTIVE',
  TIMEBASED = 'TIMEBASED',
  '' = '',
}

export enum PARTNER_ENUM {
  VNPAY = 'VNPAY',
  BIDV = 'BIDV',
  ONEPAY = 'ONEPAY',
  SHB = 'SHB',
  VIETTELPAY = 'VIETTELPAY',
  VIETCOMBANK = 'VIETCOMBANK',
}

export enum CLIENT_CODE_ENUM {
  'EDUSOFT' = 'cx615qhsFTL',
  'EDUBILL' = 's5wXjKJzrZ0',
  'all' = 'all',
}

// approve
export enum APPROVE_STATUS {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
}

// permision

export enum PERMISTIONS {
  //-----------APPROVE---------------------//
  APPROVE_VIEW = 'APPROVE_VIEW',
  APPROVE_UPDATE_REFUND_VNP = 'APPROVE_UPDATE_REFUND_VNP',
}
