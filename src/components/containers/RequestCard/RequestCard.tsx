import useTranslation from "next-translate/useTranslation";
import React from "react";
import { Button, Card, Container, Grid, Icon, Popup } from "semantic-ui-react";
import {
  ApproveRequestModal,
  CancelRequestModal,
  RejectRequestModal,
  ResolveRequestModal,
} from "^@containers/common";
import { RequestInfo } from "^@hooks/RequestInfo";
import { RequestStatus } from "^@hooks/RequestStatus";
import { color, font } from "^@styles/global";

export interface RequestCardProps {
  requestInfo: RequestInfo;
}

export const RequestCard = ({ requestInfo }: RequestCardProps) => {
  const { t } = useTranslation("common");

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

  const statusMessage = () => {
    switch (status) {
      case RequestStatus[RequestStatus.Resolved]:
        return t("components.requestCard.resolved");
      case RequestStatus[RequestStatus.Cancelled]:
        return t("components.requestCard.canceled");
      default:
        return null;
    }
  };
  return (
    <Container style={{ margin: "1em" }}>
      <Grid celled columns={4}>
        <Grid.Row>
          <Grid.Column width={2}>
            <h4 style={{ fontFamily: font.poppins }}>
              {t("components.requestCard.id")}
            </h4>
            <p style={{ fontFamily: font.poppins }}>{requestID}</p>
          </Grid.Column>
          <Grid.Column style={{ fontFamily: font.poppins }}>
            <h4 style={{ fontFamily: font.poppins }}>
              {t("components.requestCard.amount")}
            </h4>
            <Icon name="ethereum" /> {amount}
          </Grid.Column>
          <Grid.Column width={3}>
            <Popup
              content={recipient}
              trigger={
                <div>
                  <h4 style={{ fontFamily: font.poppins }}>
                    {t("components.requestCard.recipient")}
                  </h4>
                  <p style={{ fontFamily: font.poppins }}>
                    {recipient.slice(0, 10) +
                      (recipient.length > 10 ? "..." : "")}
                  </p>
                </div>
              }
            />
          </Grid.Column>
          <Grid.Column width={4}>
            <Popup
              content={requestDescription}
              trigger={
                <div>
                  <h4 style={{ fontFamily: font.poppins }}>
                    {t("components.requestCard.description")}
                  </h4>
                  <p style={{ fontFamily: font.poppins }}>
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
            <h4 style={{ fontFamily: font.poppins }}>
              {t("components.requestCard.status")}
            </h4>
            <p style={{ fontFamily: font.poppins }}>{status}</p>
          </Grid.Column>
          <Grid.Column>
            <h4 style={{ fontFamily: font.poppins }}>
              {t("components.requestCard.required")}
            </h4>
            <p style={{ fontFamily: font.poppins }}>{targetApprovalCount}</p>
          </Grid.Column>
          <Grid.Column>
            <h4 style={{ fontFamily: font.poppins }}>
              {t("components.requestCard.current")}
            </h4>
            <p
              style={{ fontFamily: font.poppins }}
            >{`${approvalCount} / ${rejectionCount}`}</p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={12}>
            <Button.Group>
              <ApproveRequestModal requestID={requestID} />
              <RejectRequestModal requestID={requestID} />
              <ResolveRequestModal requestID={requestID} />
              <CancelRequestModal requestID={requestID} />
            </Button.Group>
          </Grid.Column>
          <h4 style={{ fontFamily: font.poppins }}>
            {statusMessage() ??
              (requestInfo.userApproved
                ? t("components.requestCard.approved")
                : requestInfo.userRejected
                ? t("components.requestCard.rejected")
                : null)}
          </h4>
        </Grid.Row>
      </Grid>
    </Container>
  );
};
