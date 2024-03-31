import { PERMISTIONS } from '@app/contracts';

export const listRole = () => {
  //----------Quan ly user----------//
  const role: {
    value: number;
    label: string;
    children: {
      label: string;
      value: PERMISTIONS;
    }[];
  }[] = [
    {
      value: 0,
      label: 'Phê duyệt',
      children: [
        {
          label: 'Xem danh sách phê duyệt',
          value: PERMISTIONS.APPROVE_VIEW,
        },
        {
          label: 'Phê duyệt lệnh hoàn tiền VNPAY',
          value: PERMISTIONS.APPROVE_UPDATE_REFUND_VNP,
        },
      ],
    },
  ];

  return role;
};
