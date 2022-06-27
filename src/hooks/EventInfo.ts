export type EventInfo = {
  blockNumber: number;
  event: string;
  returnValues: {
    from: string;
    requestID: number;
  };
};
