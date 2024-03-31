export const TRANSACTION_NAVIGATOR_DEFAULT = {
  clientCode: 'all',
  redirect_success: '',
  TIDId: '',
  groupStudent: 'all',
  typeFee: 'all',
  configuration: 'default',
  paymentMethod: 'all',
  transactionValue: 0,
  transactionCount: 0,
  signTransaction: 'all',
  default: 1,
  status: 1,
  priority: 1,
  effectiveFromDate: new Date().getTime(),
  effectiveToDate: new Date().getTime(),
  sign: 'all',
};

export const SECRET_CODE = '@k218l5';

export const LIST_RESPONSE_CODE_VNPAY = {
  '00': 'Yêu cầu thành công',
  '02': 'Mã định danh kết nối không hợp lệ (kiểm tra lại TmnCode)',
  '03': 'Dữ liệu gửi sang không đúng định dạng',
  '91': 'Không tìm thấy giao dịch yêu cầu hoàn trả',
  '94': 'Giao dịch đã được gửi yêu cầu hoàn tiền trước đó. Yêu cầu này VNPAY đang xử lý',
  '95': 'Giao dịch này không thành công bên VNPAY. VNPAY từ chối xử lý yêu cầu',
  '97': 'Checksum không hợp lệ',
  '99': 'Các lỗi khác (lỗi còn lại, không có trong danh sách mã lỗi đã liệt kê)',
};

export const TIMEOUT_VNPAY = 5 * 60 * 1000; // 1 phut theo ms
export const TRANSACTION_BIDV_TIMEOUT = 24 * 60 * 60 * 1000; // TODO: dang tam de 2 ngay cho BIDV, sau se thay doi ve thoi gian quy dinh
