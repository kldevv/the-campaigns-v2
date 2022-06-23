import { RequestStatus } from "./RequestStatus";

export type RequestInfo = {
  requestID: number;
  amount: number;
  approvalCount: number;
  rejectionCount: number;
  targetApprovalCount: number;
  recipient: string;
  requestDescription: string;
  status: RequestStatus;
  currentUserApproved: boolean;
  currentUserRejected: boolean;
};
