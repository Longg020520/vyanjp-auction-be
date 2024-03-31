export const PATH_CONFIG = {
  // service-payment
  HEALTHCHECK: {
    path: '/healthcheck',
    description: 'check service is running',
  },
  // GET_ALL_BILL: {
  //   path: '/getAllBill',
  //   description: 'Lấy danh sách tất cả các hóa đơn',
  // },

  // service-gateway auth
  GET_ALL_ADMIN: {
    path: '/admin',
    description: 'Lấy danh sách tất cả các tài khoản admin',
  },

  GET_DETAIL_ADMIN: {
    path: '/auth/admin/detail',
    description: 'Lấy thông tin tài khoản admin',
  },

  CREATE_ADMIN: {
    path: '/auth/admin/create',
    description: 'Tạo tài khoản admin',
  },

  CHANGE_PASSWORD_ADMIN: {
    path: '/auth/admin/change-password',
    description: 'Đổi mật khẩu tài khoản admin',
  },

  UPDATE_ADMIN: {
    path: '/auth/admin/update',
    description: 'Chỉnh sửa tài khoản admin',
  },

  LOGIN_ADMIN: {
    path: '/auth/admin/login',
    description: 'Đăng nhập tài khoản admin',
  },

  GET_ALL_OSA: {
    path: '/admin/organization/:orgCode',
    description: 'Lấy danh sách tất cả các tài khoản tổ chức thuộc tổ chức',
  },
  ADMIN_GET_ALL_OSA: {
    path: '/admin/organization',
    description: 'Lấy danh sách tất cả các tài khoản tổ chức',
  },

  CREATE_OSA: {
    path: '/auth/organization/:orgCode/create',
    description: 'Tạo tài khoản tổ chức',
  },

  CHANGE_PASSWORD_OSA: {
    path: '/auth/organization/change-password',
    description: 'Đổi mật khẩu tài khoản tổ chức',
  },

  UPDATE_OSA: {
    path: '/auth/organization/:orgCode/:_id/update',
    description: 'Chỉnh sửa tài khoản tổ chức',
  },

  GET_DETAIL_OSA: {
    path: '/auth/organization/detail',
    description: 'Lấy thông tin tài khoản tổ chức',
  },

  LOGIN_OSA: {
    path: '/auth/organization/login',
    description: 'Đăng nhập tài khoản tổ chức',
  },

  GET_ALL_SSA: {
    path: '/admin/organization/:orgCode/school/:schoolCode',
    description:
      'Lấy danh sách tất cả các tài khoản cơ sở đào tạo thuộc cơ sở đào tạo',
  },

  ADMIN_GET_ALL_SSA: {
    path: '/admin/school',
    description: 'Lấy danh sách tất cả các tài khoản tổ chức cơ sở đào tạo',
  },

  CREATE_SSA: {
    path: '/auth/organization/:orgCode/school/:schoolCode/create',
    description: 'Tạo tài khoản cơ sở đào tạo',
  },

  CHANGE_PASSWORD_SSA: {
    path: '/auth/school/change-password',
    description: 'Đổi mật khẩu tài khoản cơ sở đào tạo',
  },

  GET_DETAIL_SSA: {
    path: '/auth/school/detail',
    description: 'Lấy thông tin tài khoản cơ sở đào tạo',
  },

  UPDATE_SSA: {
    path: '/auth/organization/:orgCode/school/:schoolCode/:_id/update',
    description: 'CHỉnh sửa tài khoản cơ sở đào tạo',
  },

  LOGIN_SSA: {
    path: '/auth/school/login',
    description: 'Đăng nhập tài khoản cơ sở đào tạo',
  },

  // service-organization

  // GET_ORGANIZATION_: {
  //   path: '/organization/:orgCode',
  //   description: 'Lấy danh sách tất cả tổ chức',
  // },
  GET_ALL_ORGANIZATION: {
    path: '/organization',
    description: 'Lấy danh sách tất cả tổ chức',
  },

  GET_DETAIL_ORGANIZATION: {
    path: '/organization/:orgCode/detail',
    description: 'Lấy thông tin chi tiết tổ chức',
  },

  CREATE_ORGANIZATION: {
    path: '/organization/create',
    description: 'Tạo mới tổ chức',
  },

  UPDATE_ORGANIZATION: {
    path: '/organization/:orgCode/update',
    description: 'Chỉnh sửa tổ chức',
  },

  DELETE_ORGANIZATION: {
    path: '/organization/delete/:orgCode',
    description: 'Xoá tổ chức',
  },

  /* service school */
  GET_LIST_CLIENT_CODE: {
    path: '/organization/:orgCode/school/:schoolCode/clientCode',
    description: 'Lấy danh sách client Code',
  },

  GET_LIST_SCHOOL: {
    path: '/school/all',
    description: 'Lấy danh sách tất cả cơ sở đào tạo',
  },

  GET_ALL_SCHOOL: {
    path: '/organization/:orgCode/school',
    description: 'Lấy danh sách tất cả cơ sở đào tạo',
  },
  ADMIN_GET_ALL_SCHOOL: {
    path: '/school',
    description: 'Lấy danh sách tất cả cơ sở đào tạo',
  },

  GET_DETAIL_SCHOOL: {
    path: '/organization/:orgCode/school/:schoolCode/detail',
    description: 'Lấy thông tin chi tiết cơ sở đào tạo',
  },

  WEB_GET_DETAIL_SCHOOL: {
    path: '/organization/:orgCode/school/:schoolCode/edubill/detail',
    description: 'Lấy thông tin chi tiết cơ sở đào tạo',
  },

  CREATE_SCHOOL: {
    path: '/organization/:orgCode/school/create',
    description: 'Tạo mới cơ sở đào tạo',
  },

  UPDATE_SCHOOL: {
    path: '/organization/:orgCode/school/:schoolCode/update',
    description: 'Chỉnh sửa cơ sở đào tạo',
  },

  DELETE_SCHOOL: {
    path: '/organization/:orgCode/school/delete/:schoolCode',
    description: 'Xoá cơ sở đào tạo',
  },
  /* service school */

  /* service school config SHB Bank */
  CREATE_PAYMENT_PARTNER_SHB: {
    path: '/organization/:orgCode/school/:schoolCode/paymentPartner/shb/create',
    description: 'Tạo mới đối tác thanh toán',
  },

  CREATE_SHB_CONFIG: {
    path: '/organization/:orgCode/school/:schoolCode/paymentPartner/shb/config/create',
    description: 'Cập nhật đối tác thanh toán',
  },

  UPDATE_SHB_CONFIG: {
    path: '/organization/:orgCode/school/:schoolCode/paymentPartner/shb/config/update',
    description: 'Cập nhật đối tác thanh toán',
  },

  DELETE_SHB_CONFIG: {
    path: '/organization/:orgCode/school/:schoolCode/paymentPartner/shb/config/delete',
    description: 'Cập nhật đối tác thanh toán',
  },
  /* service school config SHB Bank */

  /* service school config VNPAY */
  CREATE_PAYMENT_PARTNER_VNPAY: {
    path: '/organization/:orgCode/school/:schoolCode/paymentPartner/vnpay/create',
    description: 'Tạo mới đối tác thanh toán',
  },

  UPDATE_PAYMENT_PARTNER_VNPAY: {
    path: '/organization/:orgCode/school/:schoolCode/paymentPartner/vnpay/update',
    description: 'Tạo mới đối tác thanh toán',
  },

  CREATE_VNPAY_CONFIG: {
    path: '/organization/:orgCode/school/:schoolCode/paymentPartner/vnpay/config/create',
    description: 'Cập nhật đối tác thanh toán',
  },

  UPDATE_VNPAY_CONFIG: {
    path: '/organization/:orgCode/school/:schoolCode/paymentPartner/vnpay/config/update',
    description: 'Cập nhật đối tác thanh toán',
  },

  DELETE_VNPAY_CONFIG: {
    path: '/organization/:orgCode/school/:schoolCode/paymentPartner/vnpay/config/delete',
    description: 'Cập nhật đối tác thanh toán',
  },

  /* service school config VNPAY */

  UPDATE_PAYMENT_PARTNER: {
    path: '/organization/:orgCode/school/:schoolCode/paymentPartner/:paymentPartner/update',
    description: 'Cập nhật đối tác thanh toán',
  },

  UPDATE_TIDSTAR_PAYMENT_PARTNER: {
    path: '/organization/:orgCode/school/:schoolCode/paymentPartner/:paymentPartner/tidStar/update',
    description: 'Cập nhật TID',
  },

  GET_DETAIL_PAYMENT_PARTNER: {
    path: '/organization/:orgCode/school/:schoolCode/paymentPartner/:paymentPartner/detail',
    description: 'Lấy chi tiết đối tác thanh toán',
  },

  UPDATE_PAYMENT_METHOD: {
    path: '/organization/:orgCode/school/:schoolCode/paymentMethod/update',
    description: 'Cập nhật phương thức thanh toán',
  },

  GET_DETAIL_PAYMENT_METHOD: {
    path: '/organization/:orgCode/school/:schoolCode/paymentMethod/detail',
    description: 'Lấy chi tiết phương thức thanh toán',
  },

  EDUBILL_GET_DETAIL_PAYMENT_METHOD: {
    path: '/school/:schoolCode/paymentMethod/detail',
    description: 'Lấy chi tiết phương thức thanh toán',
  },

  DELETE_PAYMENT_PARTNER: {
    path: '/organization/:orgCode/school/payment/:schoolCode/:paymentPartner/delete',
    description: 'Xoá thanh toán',
  },
  CREATE_FEE: {
    path: '/organization/:orgCode/school/:schoolCode/fee/create',
    description: 'Tạo mới cấu hình phí',
  },

  GET_DETAIL_FEE_BY_ID: {
    path: '/organization/:orgCode/school/:schoolCode/fee/detail/:_id',
    description: 'Lấy chi tiết cấu hình phí',
  },

  GET_LIST_FEE: {
    path: '/organization/:orgCode/school/:schoolCode/fee/list',
    description: 'Lấy danh sách cấu hình phí',
  },

  UPDATE_FEE: {
    path: '/organization/:orgCode/school/:schoolCode/fee/update',
    description: 'Cập nhật cấu hình phí',
  },

  DELETE_FEE: {
    path: '/organization/:orgCode/school/payment/:schoolCode/fee/delete',
    description: 'Xoá thanh toán',
  },

  GET_DETAIL_GROUP_STUDENT: {
    path: '/organization/:orgCode/school/:schoolCode/groupSudent/detail',
    description: 'Lấy chi tiết nhóm sinh viên',
  },

  ADMIN_GET_LIST_GROUP_STUDENT: {
    path: '/groupSudent/list',
    description: 'ADMIN Lấy danh sách nhóm sinh viên',
  },

  GET_LIST_GROUP_STUDENT: {
    path: '/organization/:orgCode/school/:schoolCode/groupSudent/list',
    description: 'Trường Lấy danh sách nhóm sinh viên',
  },

  CREATE_GROUP_STUDENT: {
    path: '/organization/:orgCode/school/:schoolCode/groupSudent/create',
    description: 'Tạo mới nhóm sinh viên',
  },

  UPDATE_GROUP_STUDENT: {
    path: '/organization/:orgCode/school/:schoolCode/groupSudent/:_id/update',
    description: 'Cập nhật nhóm sinh viên',
  },

  DELETE_GROUP_STUDENT: {
    path: '/organization/:orgCode/school/:schoolCode/groupSudent/:_id/delete',
    description: 'Xoá nhóm sinh viên',
  },

  // bracnh
  GET_ALL_BRANCH: {
    path: '/organization/:orgCode/branch',
    description: 'Lấy danh sách tất cả chi nhánh',
  },

  GET_DETAIL_BRANCH: {
    path: '/organization/:orgCode/branch/:_id/detail',
    description: 'Lấy thông tin chi tiết tổ chức',
  },

  ADMIN_GET_ALL_BRANCH: {
    path: '/organization/branch',
    description: 'Lấy danh sách tất cả chi nhánh',
  },

  UPDATE_BRANCH: {
    path: '/organization/:orgCode/branch/:_id/update',
    description: 'Chỉnh sửa chi nhánh',
  },

  DELETE_BRANCH: {
    path: '/organization/:orgCode/branch/delete/:id',
    description: 'Xoá chi nhánh',
  },

  CREATE_BRANCH: {
    path: '/organization/:orgCode/branch/create',
    description: 'Tạo mới chi nhánh',
  },

  // configuration
  SET_BIDV_CONFIG: {
    path: '/organization/:orgCode/school/:schoolCode/config/bidv',
    description: 'Set config BIDV cho CSDT',
  },

  UPDATE_BIDV_CONFIG: {
    path: '/organization/:orgCode/school/:schoolCode/config/bidv/:configCode',
    description: 'Chỉnh sửa config BIDV cho CSDT',
  },

  SET_ONEPAY_CONFIG: {
    path: '/organization/:orgCode/school/:schoolCode/config/onepay',
    description: 'Set config BIDV cho CSDT',
  },

  UPDATE_ONEPAY_CONFIG: {
    path: '/organization/:orgCode/school/:schoolCode/config/onepay/:configCode',
    description: 'Chỉnh sửa config BIDV cho CSDT',
  },

  DELETE_PAYMENT_CONFIG: {
    path: '/organization/:orgCode/school/:schoolCode/config/payment/:configCode',
    description: 'Xóa setting thanh toán của CSDT',
  },

  GET_PAYMENT_CONFIG: {
    path: '/organization/:orgCode/school/:schoolCode/config/payment/:partner',
    description: 'Lấy danh sách payment setting theo partner',
  },

  GET_NAV_CONFIG: {
    path: '/organization/:orgCode/school/:schoolCode/config/payment/navigation/:partner',
    description: 'Lấy danh sách setting điều hướng giao dịch',
  },

  CREATE_NAV_CONFIG: {
    path: '/organization/:orgCode/school/:schoolCode/config/payment/navigation',
    description: 'Thêm setting điều hướng giao dịch',
  },

  UPDATE_NAV_CONFIG: {
    path: '/organization/:orgCode/school/:schoolCode/config/payment/navigation/:id',
    description: 'Sửa setting điều hướng giao dịch',
  },

  DEL_NAV_CONFIG: {
    path: '/organization/:orgCode/school/:schoolCode/config/payment/navigation/:id',
    description: 'Xóa setting điều hướng giao dịch',
  },

  // service-bill
  // payment
  GET_SECRET_CODE_BY_MA_SV: {
    path: '/organization/:orgCode/school/:schoolCode/secret/:ma_sv/:cccd',
    description: 'Lấy mã bí mật',
  },

  GET_BILL_BY_SECRET_CODE: {
    path: '/organization/:orgCode/school/:schoolCode/secretCode/:secretCode/bill',
    description: 'Lấy hóa đơn theo mã bí mật',
  },

  GET_INFOR_SV_BY_MA_SV: {
    path: '/organization/:orgCode/school/:schoolCode/student/:MaSV',
    description: 'Lấy thông tin sinh viên',
  },

  UPLOAD_BILL: {
    path: '/bill/upload',
    description: 'Tạo mới phiếu thu',
  },

  CREATE_BILL: {
    path: '/organization/:orgCode/school/:schoolCode/bill',
    description: 'Khởi tạo phiếu thu',
  },
  CREATE_BILL_REF: {
    path: '/organization/:orgCode/school/:schoolCode/bill/create',
    description: 'Khởi tạo phiếu thu',
  },
  UPDATE_BILL: {
    path: '/organization/:orgCode/school/:schoolCode/bill/update',
    description: 'Cập nhật phiếu thu',
  },
  DELETE_BILL: {
    path: '/organization/:orgCode/school/:schoolCode/bill/delete',
    description: 'Xóa phiếu thu',
  },

  GET_ALL_BILL_PAYED: {
    path: '/organization/:orgCode/school/:schoolCode/bill-paid',
    description: 'Lấy tất cả phiếu đã thu phiếu thu',
  },

  GET_ALL_BILL_LIST: {
    path: '/organization/:orgCode/school/:schoolCode/bill/list',
    description: 'Lấy tất cả phiếu thu',
  },

  ADMIN_GET_ALL_BILL: {
    path: '/bill',
    description: 'Lấy danh sách tất cả các phiếu thu',
  },
  GET_ALL_BILL: {
    path: '/organization/:orgCode/school/:schoolCode/bill',
    description: 'Trường lấy danh sách phiếu thu',
  },

  GET_ALL_BILL_LOTS: {
    path: '/organization/:orgCode/school/:schoolCode/billLot',
    description: 'Lấy danh sách tất cả các lô phiếu thu',
  },
  ADMIN_GET_ALL_BILL_LOTS: {
    path: '/billLot',
    description: 'Lấy danh sách tất cả các lô phiếu thu',
  },

  UPLOAD_BILL_EXCEL: {
    path: '/organization/:orgCode/school/:schoolCode/bill/upload/excel',
    description: 'Tải phiếu thu từ file excel',
  },

  DOWNLOAD_BILL_EXCEL: {
    path: '/organization/:orgCode/school/:schoolCode/billLot/:billLotCode/download/excel',
    description: 'Tải xuống phiếu thu',
  },

  // student

  GET_STUDENT: {
    path: '/organization/:orgCode/school/:schoolCode/student',
    description: 'Lấy sinh viên',
  },

  GET_ID_STUDENT: {
    path: '/organization/:orgCode/school/:schoolCode/IDSV',
    description: 'Lấy sinh viên',
  },

  GET_ALL_STUDENT_IN_SCHOOL: {
    path: '/organization/:orgCode/school/:schoolCode/students',
    description: 'Lấy danh sách sinh viên',
  },

  ADMIN_GET_ALL_STUDENT: {
    path: '/student/list',
    description: 'Lấy danh sách sinh viên',
  },

  UPLOAD_STUDENT_EXCEL: {
    path: '/organization/:orgCode/school/:schoolCode/student/upload/excel',
    description: 'Tải danh sách sinh viên từ file excel',
  },

  CREATE_STUDENT: {
    path: '/organization/:orgCode/school/:schoolCode/student',
    description: 'Khởi tạo sinh viên',
  },

  GET_TYPE_FEE: {
    path: '/organization/:orgCode/school/:schoolCode/typeFee',
    description: 'Lấy danh sach loại phí',
  },
  CREATE_TYPE_FEE: {
    path: '/organization/:orgCode/school/:schoolCode/typeFee',
    description: 'Khởi tạo loại phí',
  },

  GET_ALL_PARTNER: {
    path: '/organization/:orgCode/school/:schoolCode/partner',
    description: 'Lấy danh sách các kênh thanh toán',
  },

  GET_ALL_TRACKING: {
    path: '/tracking',
    description: 'Lấy danh sách lịch sử thao tác',
  },

  ORG_GET_ALL_TRACKING: {
    path: '/organization/:orgCode/tracking',
    description: 'Tổ chức lấy danh sách lịch sử thao tác',
  },

  SCHOOL_GET_ALL_TRACKING: {
    path: '/organization/:orgCode/school/:schoolCode/tracking',
    description: 'Lấy danh sách lịch sử thao tác',
  },

  // service-payment
  CREATE_REQUEST_PAYMENT_PARTNER: {
    path: '/organization/:orgCode/school/:schoolCode/payment/vnpay',
    description: 'Tạo mới thanh toán VNPAY',
  },

  // CREATE_REFUND_VNP_PAYMENT: {
  //   path: '/organization/:orgCode/school/:schoolCode/payment/refund',
  //   description: 'Tạo giao dịch hoàn tiền sang VNPAY',
  // },

  CREATE_QUERYDR_VNP_PAYMENT: {
    path: '/organization/:orgCode/school/:schoolCode/payment/querydr',
    description: 'Lấy kêt quả thanh toán',
  },

  RESULT_PAYMENT: {
    path: '/result/payment',
    description: 'Kết quả thanh toán',
  },

  VNPAY_IPN_PAYMENT: {
    path: '/vnpay_ipn',
    description: 'Kết quả thanh toán',
  },

  GET_ALL_PAYMENT_HISTORY: {
    path: '/organization/:orgCode/school/:schoolCode/payment-history',
    description: 'Lấy lịch sử thanh toán',
  },

  PAYMENT_WEB_GET_ALL_PAYMENT_HISTORY: {
    path: '/organization/:orgCode/school/:schoolCode/payment-history/:ma_sv',
    description: 'Lấy lịch sử thanh toán',
  },

  ADMIN_GET_ALL_PAYMENT_HISTORY: {
    path: '/payment-history',
    description: 'Lấy lịch sử thanh toán',
  },

  GET_ALL_DEPT_BRICK_HISTORY: {
    path: '/organization/:orgCode/school/:schoolCode/deptBrick-history',
    description: 'Trường lấy kết quả gạch nợ',
  },

  CREATE_REFUND_HISTORY: {
    path: '/organization/:orgCode/school/:schoolCode/refund-history',
    description: 'Tạo mới yêu cầu hoàn tiền',
  },

  GET_ALL_REFUND_HISTORY: {
    path: '/organization/:orgCode/school/:schoolCode/refund-history',
    description: 'Trường lấy danh sách yêu cầu hoàn tiền',
  },

  APPROVE_REFUND_HISTORY: {
    path: '/organization/:orgCode/school/:schoolCode/refund-history/approve',
    description: 'Phê duyệt yêu cầu hoàn tiền',
  },

  REJECT_REFUND_HISTORY: {
    path: '/organization/:orgCode/school/:schoolCode/refund-history/reject',
    description: 'Từ chối yêu cầu hoàn tiền',
  },

  ADMIN_GET_ALL_REFUND_HISTORY: {
    path: '/refund-history',
    description: 'Lấy danh sách yêu cầu hoàn tiền',
  },

  RETRY_DEPT_BRICK: {
    path: '/organization/:orgCode/school/:schoolCode/retry-deptBrick/:_id',
    description: 'Gọi lại gạch nợ',
  },

  ADMIN_GET_ALL_DEPT_BRICK_HISTORY: {
    path: '/deptBrick-history',
    description: 'Admin lấy kết quả gạch nợ',
  },

  // SHB

  CREATE_PAYMENT_SHB: {
    path: '/organization/:orgCode/school/:schoolCode/payment/shb',
    description: 'Tạo mới thanh toán với ngân hàng SHB',
  },
  TEST_SHB: {
    path: '/shb/test',
    description: 'Tạo mới thanh toán với ngân hàng SHB',
  },
  IPN_SHB_PAYMENT: {
    path: '/shb/ipn',
    description: 'Lấy kết quả thanh toan ngân hàng SHB',
  },

  // bidv
  CREATE_PAYMENT_WITH_BIDV: {
    path: '/organization/:orgCode/school/:schoolCode/studentCode/:studentCode/payment/bidv',
    description: 'Tạo thanh toán với BIDV',
  },

  PAYMENT_BIDV_GET_BILL: {
    path: ':context/getbill',
    description: 'Bidv lấy thông tin bill',
  },

  PAYMENT_BIDV_PAYBILL: {
    path: '/:context/paybill',
    description: 'BIDV thanh toán bill',
  },

  // onepay
  CREATE_PAYMENT_WITH_ONEPAY: {
    path: '/organization/:orgCode/school/:schoolCode/studentCode/:studentCode/payment/onepay',
    description: 'Tạo thanh toán với Onepay',
  },

  ACCEPT_ONEPAY_IPN: {
    path: 'onepay/ipn',
    description: 'Onepay trả kết quả giao dịch qua IPN',
  },

  // report

  REPORT_PAYMENT_HISTORY: {
    path: '/organization/:orgCode/school/:schoolCode/report/payment-history/download/excel',
    description: 'Tải xuống báo cáo lịch sử thanh toán',
  },

  // GET_ALL_PAYMENT_HISTORY: {
  //   path: '/result/payment',
  //   description: 'Kết quả thanh toán',
  // },

  // service reconcile
  UPLOAD_TRANSACTION_FILE: {
    path: '/organization/:orgCode/school/:schoolCode/reconcile/upload',
    description: 'Upload file giao dịch đối soát',
  },

  DOWNLOAD_RECONCILE_FILE: {
    path: '/organization/:orgCode/school/:schoolCode/reconcile/download/:id',
    description: 'Download file kết quả giao dịch',
  },

  COMPARE_TRANSACTION: {
    path: '/organization/:orgCode/school/:schoolCode/reconcile/compare',
    description: 'Đối soát giao dịch',
  },

  GET_RECONCILE_HISTORIES: {
    path: '/organization/:orgCode/school/:schoolCode/reconcile/history',
    description: 'Lấy danh sách lịch sử đối soát',
  },

  EXPORT_DAILY_REPORT: {
    path: '/organization/:orgCode/school/:schoolCode/reconcile/report/daily',
    description: 'Export báo cáo theo ngày',
  },

  EXPORT_SUMMARY_TRANS_REPORT: {
    path: '/organization/:orgCode/school/:schoolCode/reconcile/report/summary-trans',
    description: 'Export báo cáo tổng hợp giao dịch',
  },

  // download excel transaction

  DOWNLOAD_EXCEL_TRANSACTION: {
    path: '/organization/:orgCode/school/:schoolCode/transaction/excel',
    description: ' ',
  },
};
