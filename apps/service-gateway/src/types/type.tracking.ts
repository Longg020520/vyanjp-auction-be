import { AdminDocument, SSADocument, OSADocument } from '@app/contracts';

export interface TrackingType {
  user: AdminDocument | SSADocument | OSADocument | any;
  method: string;
  activity: string;
  activityTime: number;
  code: number;
  schoolCode: string;
  orgCode: string;
}
