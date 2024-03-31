import { HttpStatus } from '@nestjs/common';

export enum ERROR_CODE {
  HTTP_SUCCESS = 0,
}

export const ERROR_CONFIG = {
  ADMIN_NOT_FOUND: {
    success: false,
    statusCode: HttpStatus.BAD_REQUEST,
    error: 'Bad Request',
    message: 'Không tìm thấy người dùng',
  },
  ADMIN_WRONG_INFORMATION: {
    statusCode: HttpStatus.BAD_REQUEST,
    success: false,
    error: 'Bad Request',
    message: 'Thông tin đăng nhập không chính xác',
  },
  ADMIN_ALREADY_USE: {
    statusCode: HttpStatus.BAD_REQUEST,
    success: false,
    error: 'Bad Request',
    message: 'Tên tài khoản hoặc email đã được sử dụng',
  },
  ORG_CODE_ALREADY_USE: {
    success: false,
    error: 'Bad Request',
    statusCode: HttpStatus.BAD_REQUEST,
    message: 'Mã tổ chức đã được sử dụng',
  },

  SCHOOL_CODE_ALREADY_USE: {
    success: false,
    error: 'Bad Request',
    statusCode: HttpStatus.BAD_REQUEST,
    message: 'Mã cơ sở đào tạo đã được sử dụng',
  },

  ORG_CODE_NOT_FOUND: {
    success: false,
    error: 'Bad Request',
    statusCode: HttpStatus.BAD_REQUEST,
    message: 'Mã tổ chức không tồn tại',
  },

  SCHOOL_CODE_NOT_FOUND: {
    success: false,
    error: 'Bad Request',
    statusCode: HttpStatus.BAD_REQUEST,
    message: 'mã cơ sở đào tạo không tồn tại',
  },

  BRANCH_CODE_ALREADY_USE: {
    success: false,
    error: 'Bad Request',
    statusCode: HttpStatus.BAD_REQUEST,
    message: 'Mã chi nhánh đã được sử dụng',
  },

  PAYMENT_TYPE_ALREADY_USE: {
    success: false,
    error: 'Bad Request',
    statusCode: HttpStatus.BAD_REQUEST,
    message: 'Mã hình thức thanh toán đã được sử dụng',
  },

  PAYMENT_TYPE_NOT_FOUND: {
    success: false,
    error: 'Bad Request',
    statusCode: HttpStatus.BAD_REQUEST,
    message: 'Phương thức thanh toán thanh toán không tồn tại',
  },

  PERMISSION_DENIED_CREATE_ORG: {
    success: false,
    error: 'Bad Request',
    statusCode: HttpStatus.BAD_REQUEST,
    message: 'Bạn chỉ được phép tạo cơ sở đào tạo thuộc tô chức của mình',
  },

  PERMISSION_DENIED_UPDATE_ORG: {
    success: false,
    error: 'Bad Request',
    statusCode: HttpStatus.BAD_REQUEST,
    message: 'Bạn chỉ được phép câp nhật cơ sở đào tạo thuộc tô chức của mình',
  },

  MISSING_DATA: {
    success: false,
    error: 'Bad Request',
    statusCode: HttpStatus.BAD_REQUEST,
    message: 'Dữ liệu không hợp lệ',
  },
  API_KEY_INVALID: {
    success: false,
    error: 'Bad API Key',
    statusCode: HttpStatus.FORBIDDEN,
    message: 'API Key không hợp lệ',
  },
  PAYMENT_PARTNER_EXIST: {
    success: false,
    error: 'Bad Request',
    statusCode: HttpStatus.BAD_REQUEST,
    message: 'Đối tác thanh toán đã được khởi tạo',
  },
  SCHOOL_NOT_FOUND: {
    success: false,
    error: 'Bad Request',
    statusCode: HttpStatus.BAD_REQUEST,
    message: 'Cơ sở đào tạo không tồn tại',
  },
  PHONE_ALREADY_USE: {
    success: false,
    error: 'Bad Request',
    statusCode: HttpStatus.BAD_REQUEST,
    message: 'Số điện thoại đã được sử dụng',
  },
  EMAIL_ALREADY_USE: {
    success: false,
    error: 'Bad Request',
    statusCode: HttpStatus.BAD_REQUEST,
    message: 'Email đã được sử dụng',
  },

  BILL_NOT_FOUND: {
    success: false,
    statusCode: HttpStatus.BAD_REQUEST,
    error: 'Bad Request',
    message: 'Hóa đơn đã được thanh toán',
  },

  BILL_CANNOT_DELETE: {
    success: false,
    statusCode: HttpStatus.BAD_REQUEST,
    error: 'Bad Request',
    message: 'Bạn chỉ có thể xoá hoá đơn khi hoá đơn ở trạng thái chưa thu',
  },

  AMOUNT_NOT_VALID: {
    success: false,
    statusCode: HttpStatus.BAD_REQUEST,
    error: 'Bad Request',
    message:
      'Số tiền không hợp lê, số tiền thanh toán phải lớn hơn số tiền tối thiểu',
  },

  AMOUNT_NOT_VALID_1000: {
    success: false,
    statusCode: HttpStatus.BAD_REQUEST,
    error: 'Bad Request',
    message:
      'Số tiền không hợp lê, số tiền phải nhập chẵn đến chữ số hàng nghìn',
  },

  AMOUNT_PAYMENT_REQUIRED: {
    success: false,
    statusCode: HttpStatus.BAD_REQUEST,
    error: 'Bad Request',
    message:
      'Số tiền không hợp lê, số tiền thanh toán phải lớn hơn số tiền bắt buộc thanh toán',
  },

  BILL_CANNOT_UPDATE: {
    success: false,
    statusCode: HttpStatus.BAD_REQUEST,
    error: 'Bad Request',
    message:
      'Bạn chỉ có thể cập nhật hoá đơn khi hoá đơn ở trạng thái chưa thu',
  },

  REPORT_PAYMENT_HISTORY_NOT_FOUND: {
    success: false,
    statusCode: HttpStatus.BAD_REQUEST,
    error: 'Bad Request',
    message: 'Không tìm thấy báo cáo lịch sử thanh toán',
  },

  PAYMENT_PARTNER_NOT_FOUND: {
    success: false,
    statusCode: HttpStatus.BAD_REQUEST,
    error: 'Bad Request',
    message: 'Không tìm thấy đối tác thanh toán',
  },

  ACCOUNT_IS_DISABLED: {
    success: false,
    statusCode: HttpStatus.BAD_REQUEST,
    error: 'Bad Request',
    message: 'Tài khoản của bạn đã bị vô hiệu hóa',
  },

  INFORMATION_STUDENT_INCORRECT: {
    success: false,
    statusCode: HttpStatus.BAD_REQUEST,
    error: 'Bad Request',
    message: 'Thông tin sinh viên không chính xác',
  },

  STUDENT_NOT_FOUND: {
    success: false,
    statusCode: HttpStatus.BAD_REQUEST,
    error: 'Bad Request',
    message: 'Sinh viên không tồn tại trong edubill',
  },

  STUDENT_SECRET_INCORRECT: {
    success: false,
    statusCode: HttpStatus.BAD_REQUEST,
    error: 'Bad Request',
    message: 'Mã bí mật không chính xác',
  },

  PAYMENT_HISTORY_NOT_FOUND: {
    success: false,
    error: 'Bad Request',
    statusCode: HttpStatus.BAD_REQUEST,
    message: 'Mã giao dịch orderId không tồn tại',
  },

  PAYMENT_PENDING: {
    success: false,
    statusCode: HttpStatus.BAD_REQUEST,
    error: 'Bad Request',
    message: 'Đơn đang được thanh toán vui lòng thanh toán lại sau 1 phút nữa',
  },

  REFUND_NOT_FOUND: {
    success: false,
    statusCode: HttpStatus.BAD_REQUEST,
    error: 'Bad Request',
    message: 'Không tìm thấy yêu cầu phê duyệt',
  },

  REFUND_DENIED: {
    success: false,
    statusCode: HttpStatus.BAD_REQUEST,
    error: 'Bad Request',
    message: 'Yêu cầu phê duyệt đã được phê duyệt/từ chối',
  },
  EDUSOFT_TIMEOUT: {
    success: false,
    statusCode: HttpStatus.GATEWAY_TIMEOUT,
    error: 'Gateway timeout',
    message: 'Không thể kết nối đến hệ thống nhà trường',
  },
  PAYMENT_ERROR: {
    success: false,
    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
    error: 'Error',
    message:
      'Không thể kết nối đến trung gian thanh toán. Vui lòng thử lại sau ít phút hoặc liên hệ phòng Quản lý đào tạo để được hỗ trợ',
  },

  CLIENT_CODE_NOT_FOUND: {
    success: false,
    statusCode: HttpStatus.BAD_REQUEST,
    error: 'Bad Request',
    message: 'Mã khách hàng không tồn tại',
  },

  UNAUTHORIZED_ORIGINATION:
    'Bạn không có quyền thực hiện hành động trên tổ chức này',
  UNAUTHORIZED_SCHOOL:
    'Bạn không có quyền thực hiện hành động trên cơ sở đào tạo này',
  PERMISTIONS_DENIED: 'Bạn không có quyền thực hiện hành động này ',
  SCHOOL_NOT_EXIST: 'Cơ sở đào tạo không tồn tại',
};
