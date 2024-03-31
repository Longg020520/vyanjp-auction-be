export type BillDocumentType = {
  _id: string;
  id_nhom_ct?: string;
  id_sv?: string;
  id_phieu_bao?: string;
  hoc_ky_chu?: string;
  hoc_ky?: string;
  id_truong?: string;
  ten_truong?: string;
  so_phieu_bao?: string;
  ma_sv?: string;
  schoolCode?: string;
  orgCode?: string;
  noi_dung: string;
  chi_tiet?: string;
  client_code?: string;
  redirect_success?: string;
  kenh_thu?: string;
  ngay_thu?: number;
  trang_thai?: number;
  ma_loai_thu?: any;
  phai_thu?: number;
  tong_thu?: number;
  mien_giam?: number;
  ngay_tao?: number;
  stt?: number;
  date_line?: number;
  ngay_thanh_toan?: number;
  time_pending?: number;
  tien_toi_thieu?: number;
  is_bat_buoc_thanh_toan_het?: boolean;
  is_nhap_tien?: boolean;
};

export type StudentDocumentType = {
  IDSV?: string;
  schoolCode?: string;
  orgCode?: string;
  MaSV?: string;
  SoCMND?: string;
  IDTruong?: string;
  AvatarSV?: string;
  Email?: string;
  Tel?: string;
  HoTen?: string;
  MaLop?: string;
  NienKhoa?: string;
  Nganh?: string;
  Khoa?: string;
  NhomSV?: number;
};

export type SchoolDocumentType = {
  email?: string;
  orgName?: string;
  orgCode?: string;
  schoolCode?: string;
  idSchool?: string;
  schoolName?: string;
  fax?: string;
  paymentPartner?: Array<any>;
  address?: string;
  phone?: string;
  branch?: {
    branchName: string;
    branchCode: string;
    _id: string;
  };
  status?: number;
  apiKey?: string;
  apiKey_edusoft?: string;
  schoolUrl?: string;
  avatarUrl?: string;
  golive?: boolean;
};

export type OrgDocumentType = {
  orgName?: string;
  orgCode?: string;
  email?: string;
  phone?: string;
  address?: string;
  startTime?: number;
  endTime?: number;
  listSchool?: Array<any>;
  status?: number;
};

export type FeeDocumentType = {
  schoolCode?: string;
  orgCode?: string;
  fixedCharge?: number;
  feeName?: string;
  feePercent?: string;
  sign?: string;
  groupStudent?: string;
  typeFee?: string;
  paymentIntermediaries?: string;
  paymentMethod?: string;
  effectiveFromDate?: number;
  effectiveToDate?: number;
  amount?: number;
  status?: number;
};

export type EduSoftResponseType = {
  data: {
    result?: boolean;
    code?: number;
    message?: string;
  };
};
