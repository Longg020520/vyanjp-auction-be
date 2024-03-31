export type AdminDocument = {
  _id: string;
  email: string;
  phone: string;
  username: string;
  roles: string;
  password: string;
  accountType: string;
  fullName: string;
  personnelCode: string;
};

export type OSADocument = {
  _id: string;
  email: string;
  phone: string;
  username: string;
  roles: string;
  password: string;
  accountType: string;
  orgName: string;
  orgCode: string;
  address: string;
  fullName: string;
};

export type SSADocument = {
  _id: string;
  email: string;
  phone: string;
  username: string;
  roles: string;
  password: string;
  accountType: string;
  orgName: string;
  orgCode: string;
  address: string;
  branch: string;
  schoolName: string;
  schoolCode: string;
  idTruong: string;
  fullName: string;
};

export type SSABillDocument = {
  _id: string;
  email: string;
  phone: string;
  username: string;
  roles: string;
  password: string;
  accountType: string;
  orgName: string;
  orgCode: string;
  address: string;
  branch: string;
  schoolName: string;
  schoolCode: string;
  idTruong: string;
  fullName: string;
};

export type UserDocument = {
  fullName?: string;
  user?: {
    accountType: string;
    orgCode: string;
    schoolCode: string;
    idTruong: string;
    fullName: string;
  };
};
