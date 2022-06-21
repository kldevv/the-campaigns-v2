export interface CampaignInfo {
  address: string;
  owner: string;
  name: string;
  description: string;
  minContribution: string;
  isLocked: boolean;
  activeBalance: number;
  totalBalance: number;
  patronCount: number;
  activeRequestCount: number;
  requestCount: number;
}
