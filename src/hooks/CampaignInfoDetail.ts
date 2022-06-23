import { CampaignInfo } from "./CampaignInfo";
import { EventInfo } from "./EventInfo";
import { RequestInfo } from "./RequestInfo";

export type CampaignInfoDetail = {
  requestInfoes: RequestInfo[];
  eventInfoes: EventInfo[];
  campaignInfo: CampaignInfo;
};
