export const EVENT_CONFIG = {
  RESET_BILL: 'RESET_BILL',
  DELETE_PAYMENT: 'DELETE_PAYMENT',
  DELETE_DEPBRICT: 'DELETE_DEPBRICT',

  GET_SECRET_CODE_BY_MA_SV: 'GET_SECRET_CODE_BY_MA_SV',
  GET_SECRET_CODE: 'GET_SECRET_CODE',
  GET_BILL_BY_SECRET_CODE: 'GET_BILL_BY_SECRET_CODE',
  PAYMENT_GET_BILL_BY_MA_SV: 'PAYMENT_GET_BILL_BY_MA_SV',
  GET_INFOR_SV_BY_MA_SV: 'GET_INFOR_SV_BY_MA_SV',
  /**
   * @description: Service Admin
   */
  // auth
  FIND_ADMIN: 'FIND_ADMIN',
  CREATE_ADMIN: 'CREATE_ADMIN',
  UPDATE_ADMIN: 'UPDATE_ADMIN',
  GET_ALL_ADMIN: 'GET_ALL_ADMIN',
  LOGIN_ADMIN: 'LOGIN_ADMIN',
  CHANGE_PASSWORD_ADMIN: 'CHANGE_PASSWORD_ADMIN',

  CREATE_OSA: 'CREATE_OSA',
  UPDATE_OSA: 'UPDATE_OSA',
  GET_ALL_OSA: 'GET_ALL_OSA',
  ADMIN_GET_ALL_OSA: 'ADMIN_GET_ALL_OSA',
  LOGIN_OSA: 'LOGIN_OSA',
  CHANGE_PASSWORD_OSA: 'CHANGE_PASSWORD_OSA',

  CREATE_SSA: 'CREATE_SSA',
  UPDATE_SSA: 'UPDATE_SSA',
  GET_ALL_SSA: 'GET_ALL_SSA',
  ADMIN_GET_ALL_SSA: 'ADMIN_GET_ALL_SSA',
  LOGIN_SSA: 'LOGIN_SSA',
  CHANGE_PASSWORD_SSA: 'CHANGE_PASSWORD_SSA',
  FIND_SCHOOL_IS_EXISTS: 'FIND_SCHOOL_IS_EXISTS',
  FIND_SCHOOL_BY_SCHOOLCODE: 'FIND_SCHOOL_BY_SCHOOLCODE',
  FIND_SCHOOL_BY_IDSCHOOL: 'FIND_SCHOOL_BY_IDSCHOOL',

  // organization
  /**
   * @description: Tổ chức
   */
  CREATE_ORGANIZATION: 'CREATE_ORGANIZATION',
  UPDATE_ORGANIZATION: 'UPDATE_ORGANIZATION',
  DELETE_ORGANIZATION: 'DELETE_ORGANIZATION',
  GET_ALL_ORGANIZATION: 'GET_ALL_ORGANIZATION',
  GET_DETAIL_ORGANIZATION: 'GET_DETAIL_ORGANIZATION',
  FIND_ORGANIZATION_IS_EXISTS: 'FIND_ORGANIZATION_IS_EXISTS',
  FIND_ORG_BY_ORGCODE: 'FIND_ORG_BY_ORGCODE',

  /**
   * @description: Cơ sở đào tạo
   */
  // school
  CREATE_SCHOOL: 'CREATE_SCHOOL',
  UPDATE_SCHOOL: 'UPDATE_SCHOOL',
  DELETE_SCHOOL: 'DELETE_SCHOOL',
  GET_LIST_CLIENT_CODE: 'GET_LIST_CLIENT_CODE',
  GET_LIST_SCHOOL: 'GET_LIST_SCHOOL',
  GET_ALL_SCHOOL: 'GET_ALL_SCHOOL',
  ADMIN_GET_ALL_SCHOOL: 'ADMIN_GET_ALL_SCHOOL',
  UPDATE_STATUS_SCHOOL: 'UPDATE_STATUS_SCHOOL',
  GET_ALL_SCHOOL_IN_ORG: 'GET_ALL_SCHOOL_IN_ORG',
  GET_DETAIL_SCHOOL: 'GET_DETAIL_SCHOOL',

  CREATE_PAYMENT_METHOD: 'CREATE_PAYMENT_METHOD',
  UPDATE_PAYMENT_METHOD: 'UPDATE_PAYMENT_METHOD',
  GET_DETAIL_PAYMENT_METHOD: 'GET_DETAIL_PAYMENT_METHOD',

  CREATE_PAYMENT_PARTNER_SHB: 'CREATE_PAYMENT_PARTNER_SHB',
  CREATE_SHB_CONFIG: 'CREATE_SHB_CONFIG',
  UPDATE_SHB_CONFIG: 'UPDATE_SHB_CONFIG',
  DELETE_SHB_CONFIG: 'DELETE_SHB_CONFIG',

  CREATE_PAYMENT_PARTNER_VNPAY: 'CREATE_PAYMENT_PARTNER_VNPAY',
  UPDATE_PAYMENT_PARTNER_VNPAY: 'UPDATE_PAYMENT_PARTNER_VNPAY',
  CREATE_VNPAY_CONFIG: 'CREATE_VNPAY_CONFIG',
  UPDATE_VNPAY_CONFIG: 'UPDATE_VNPAY_CONFIG',
  DELETE_VNPAY_CONFIG: 'DELETE_VNPAY_CONFIG',

  CREATE_PAYMENT_PARTNER: 'CREATE_PAYMENT_PARTNER',
  // GET_PAYMENT_PARTNER_BY_SCHOOL_CODE: 'GET_PAYMENT_PARTNER_BY_SCHOOL_CODE',
  UPDATE_PAYMENT_PARTNER: 'UPDATE_PAYMENT_PARTNER',
  UPDATE_TIDSTAR_PAYMENT_PARTNER: 'UPDATE_TIDSTAR_PAYMENT_PARTNER',
  DELETE_PAYMENT_PARTNER: 'DELETE_PAYMENT_PARTNER',
  GET_DETAIL_PAYMENT_PARTNER: 'GET_DETAIL_PAYMENT_PARTNER',
  CREATE_FEE: 'CREATE_FEE',
  GET_LIST_FEE: 'GET_LIST_FEE',
  GET_DETAIL_FEE_BY_ID: 'GET_DETAIL_FEE_BY_ID',
  GET_DETAIL_FEE_BY_SCHOOL_CODE: 'GET_DETAIL_FEE_BY_SCHOOL_CODE',
  UPDATE_FEE: 'UPDATE_FEE',
  DELETE_FEE: 'DELETE_FEE',
  GET_TYPE_FEE: 'GET_TYPE_FEE',
  CREATE_DEFAULT_TYPE_FEE: 'CREATE_DEFAULT_TYPE_FEE',
  GET_DETAIL_GROUP_STUDENT: 'GET_DETAIL_GROUP_STUDENT',
  ADMIN_GET_LIST_GROUP_STUDENT: 'ADMIN_GET_LIST_GROUP_STUDENT',
  GET_LIST_GROUP_STUDENT: 'GET_LIST_GROUP_STUDENT',
  CREATE_GROUP_STUDENT: 'CREATE_GROUP_STUDENT',
  UPDATE_GROUP_STUDENT: 'UPDATE_GROUP_STUDENT',
  DELETE_GROUP_STUDENT: 'DELETE_GROUP_STUDENT',
  CREATE_PARTNER: 'CREATE_PARTNER',
  GET_ALL_PARTNER: 'GET_ALL_PARTNER',
  UPDATE_PARTNER: 'UPDATE_PARTNER',

  CREATE_BRANCH: 'CREATE_BRANCH',
  UPDATE_BRANCH: 'UPDATE_BRANCH',
  DELETE_BRANCH: 'DELETE_BRANCH',
  GET_ALL_BRANCH: 'GET_ALL_BRANCH',
  GET_DETAIL_BRANCH: 'GET_DETAIL_BRANCH',
  ADMIN_GET_ALL_BRANCH: 'ADMIN_GET_ALL_BRANCH',

  // configuration
  SET_BIDV_PAYMENT_CONFIG: 'SET_BIDV_PAYMENT_CONFIG',
  UPDATE_BIDV_PAYMENT_CONFIG: 'UPDATE_BIDV_PAYMENT_CONFIG',
  SET_ONEPAY_PAYMENT_CONFIG: 'SET_ONEPAY_PAYMENT_CONFIG',
  UPDATE_ONEPAY_PAYMENT_CONFIG: 'UPDATE_ONEPAY_PAYMENT_CONFIG',
  GET_PAYMENT_CONFIG: 'GET_BIDV_PAYMENT_CONFIG',
  GET_PAYMENT_CONFIG_BY_CODE: 'GET_PAYMENT_CONFIG_BY_CODE',
  REMOVE_PAYMENT_CONFIG: 'REMOVE_PAYMENT_CONFIG',
  NAVIGATE_PAYMENT_CONFIG: 'NAVIGATE_PAYMENT_CONFIG',
  CREATE_NAV_CONFIG: 'CREATE_NAV_CONFIG',
  UPDATE_NAV_CONFIG: 'UPDATE_NAV_CONFIG',
  DELETE_NAV_CONFIG: 'DELETE_NAV_CONFIG',
  GET_NAV_CONFIG: 'GET_NAV_CONFIG',

  /**
   * @description: Hoá đơn
   */
  // service-bill
  CREATE_BILL: 'CREATE_BILL',
  UPLOAD_BILL: 'UPLOAD_BILL',
  GET_ALL_BILL_PAYED: 'GET_ALL_BILL_PAYED',
  UPLOAD_BILL_EXCEL: 'UPLOAD_BILL_EXCEL',
  GET_ALL_BILL: 'GET_ALL_BILL',
  ADMIN_GET_ALL_BILL: 'ADMIN_GET_ALL_BILL',
  GET_ALL_BILL_LOTS: 'GET_ALL_BILL_LOTS',
  ADMIN_GET_ALL_BILL_LOTS: 'ADMIN_GET_ALL_BILL_LOTS',
  GET_BILL_LOTS_IN_BILLLOT_CODE: 'GET_BILL_LOTS_IN_BILLLOT_CODE',
  GET_ALL_STUDENT_IN_SCHOOL: 'GET_ALL_STUDENT_IN_SCHOOL',
  ADMIN_GET_ALL_STUDENT: 'ADMIN_GET_ALL_STUDENT',
  UPLOAD_STUDENT_EXCEL: 'UPLOAD_STUDENT_EXCEL',
  DOWNLOAD_BILL_EXCEL: 'DOWNLOAD_BILL_EXCEL',
  DOWNLOAD_STUDENT_EXCEL: 'DOWNLOAD_STUDENT_EXCEL',
  GET_ALL_BILL_BY_SCHOOL_CODE: 'GET_ALL_BILL_BY_SCHOOL_CODE',
  DEBT_BRICK_BILL_INVOICE_BY_MA_SV: 'DEBT_BRICK_BILL_INVOICE_BY_MA_SV',
  SET_PENDING_BILL_BY_MA_SV: 'SET_PENDING_BILL_BY_MA_SV',
  SET_DEFAULT_STATUS_BILL: 'SET_DEFAULT_STATUS_BILL',
  GET_CLIENT_CODE: 'GET_CLIENT_CODE',
  GET_BILL_BY_IDS: 'GET_BILL_BY_IDS',
  UPDATE_BILLS_STATUS_BY_IDS: 'UPDATE_BILLS_STATUS_BY_IDS',

  // TRACKING
  INIT_TRACKING: 'INIT_TRACKING',
  SOCKET_NOTIFY_TRANS_STATUS: 'SOCKET_NOTIFY_TRANS_STATUS',

  // PAYMENT
  FIND_ONE_PAYMENT_HISTORY_BY_ORDERID: 'FIND_ONE_PAYMENT_HISTORY_BY_ORDERID',
  GET_ALL_PAYMENT_HISTORY: 'GET_ALL_PAYMENT_HISTORY',
  PAYMENT_WEB_GET_ALL_PAYMENT_HISTORY: 'PAYMENT_WEB_GET_ALL_PAYMENT_HISTORY',
  CREATE_PAYMENT_HISTORY: 'CREATE_PAYMENT_HISTORY',
  GET_PAYMENT_HISTORY_BY_MA_SV: 'GET_PAYMENT_HISTORY_BY_MA_SV',
  FIND_PAYMENT_HISTORY_BY_MA_SV: 'FIND_PAYMENT_HISTORY_BY_MA_SV',
  UPDATE_PAYMENT_HISTORY: 'UPDATE_PAYMENT_HISTORY',
  ADMIN_GET_ALL_PAYMENT_HISTORY: 'ADMIN_GET_ALL_PAYMENT_HISTORY',
  GET_ALL_DEPT_BRICK_HISTORY: 'GET_ALL_DEPT_BRICK_HISTORY',
  GET_DEPT_BRICK_HISTORY_BY_ID: 'GET_DEPT_BRICK_HISTORY_BY_ID',
  FIND_DEPT_BRICK_HISTORY_BY_MA_SV: 'FIND_DEPT_BRICK_HISTORY_BY_MA_SV',
  RETRY_DEPT_BRICK: 'RETRY_DEPT_BRICK',
  ADMIN_GET_ALL_DEPT_BRICK_HISTORY: 'ADMIN_GET_ALL_DEPT_BRICK_HISTORY',
  CREATE_DEPT_BRICK_HISTORY: 'CREATE_DEPT_BRICK_HISTORY',
  UPDATE_DEPT_BRICK_HISTORY: 'UPDATE_DEPT_BRICK_HISTORY',
  CREATE_REFUND_HISTORY: 'CREATE_REFUND_HISTORY',
  GET_ALL_REFUND_HISTORY: 'GET_ALL_REFUND_HISTORY',
  ADMIN_GET_ALL_REFUND_HISTORY: 'ADMIN_GET_ALL_REFUND_HISTORY',
  APPROVE_REFUND_HISTORY: 'APPROVE_REFUND_HISTORY',
  REJECT_REFUND_HISTORY: 'REJECT_REFUND_HISTORY',
  CREATE_VNPAY_LOG: 'CREATE_VNPAY_LOG',

  // bidv
  CREATE_PAYMENT_WITH_BIDV: 'CREATE_PAYMENT_WITH_BIDV',
  // onepay
  CREATE_PAYMENT_WITH_ONEPAY: 'CREATE_PAYMENT_WITH_ONEPAY',
  ACCEPT_ONEPAY_IPN: 'ACCEPT_ONEPAY_IPN',
  TRACKING_SUMMARY_DAILY_TRANS: 'TRACKING_SUMMARY_DAILY_TRANS',
  GET_TRANSACTION_FOR_REPORT: 'GET_TRANSACTION_FOR_REPORT',

  // SVC RECONCILE
  SVC_RECONCILE: {
    COMPARE_TRANSACTION_FILE: 'svc.reconcile.compare.file',
    COMPARE_TRANSACTION_HISTORY_GET: 'svc.reconcile.compare.history.get',
    EXPORT_DAILY_REPORT: 'svc.reconcile.export.daily.report',
    EXPORT_SUMMARY_TRANS_REPORT: 'svc.reconcile.export.summary.trans.report',
  },

  // SVC GATEWAY
  SVC_GATEWAY: {
    SEND_SLACK_NOTIFY: 'svc.gateway.send.slack.notify',
  },

  // download excel
  DOWNLOAD_EXCEL_TOTAL_TRANSACTION: 'DOWNLOAD_EXCEL_TOTAL_TRANSACTION',
};
