import React from "react";
import { Card, Grid, Icon, Popup } from "semantic-ui-react";
import { RequestInfo } from "^@hooks/RequestInfo";
import { RequestStatus } from "^@hooks/RequestStatus";

export interface RequestCardProps {
  requestInfo: RequestInfo;
}

export const RequestCard = ({ requestInfo }: RequestCardProps) => {
  if (!requestInfo) {
    return null;
  }
  const {
    requestID,
    amount,
    recipient,
    requestDescription,
    targetApprovalCount,
    approvalCount,
    rejectionCount,
    status,
  } = requestInfo;

  return (
    <Card fluid>
      <Grid celled columns={4}>
        <Grid.Row>
          <Grid.Column width={2}>
            <h4>ID</h4>
            <p>{requestID}</p>
          </Grid.Column>
          <Grid.Column>
            <h4>Amount</h4>
            <Icon name="ethereum" /> {amount}
          </Grid.Column>
          <Grid.Column>
            <Popup
              content={recipient}
              trigger={
                <div>
                  <h4>Recipient</h4>
                  <p>
                    {recipient.slice(0, 10) +
                      (recipient.length > 10 ? "..." : "")}
                  </p>
                </div>
              }
            />
          </Grid.Column>
          <Grid.Column width={6}>
            <Popup
              content={requestDescription}
              trigger={
                <div>
                  <h4>Description</h4>
                  <p>
                    {requestDescription.slice(0, 15) +
                      (requestDescription.length > 15 ? "..." : "")}
                  </p>
                </div>
              }
            />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={2}>
            <h4>Status</h4>
            <p>{status}</p>
          </Grid.Column>
          <Grid.Column>
            <h4>Required Apr.</h4>
            <p>{targetApprovalCount}</p>
          </Grid.Column>
          <Grid.Column>
            <h4>Current Apr. / Rej.</h4>
            <p>{`${approvalCount} / ${rejectionCount}`}</p>
          </Grid.Column>
          <Grid.Column width={6}>
            <h4>Action</h4>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Card>
  );
};
