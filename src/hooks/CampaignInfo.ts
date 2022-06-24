export type CampaignInfo = {
  address: string;
  owner: string;
  name: string;
  description: string;
  minContribution: number;
  isLocked: boolean;
  activeBalance: number;
  totalBalance: number;
  patronCount: number;
  activeRequestCount: number;
  requestCount: number;
  isPatron: boolean;
};
