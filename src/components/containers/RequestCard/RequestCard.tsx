import useTranslation from "next-translate/useTranslation";
import React from "react";
import { Card, Container, Grid, Icon, Popup } from "semantic-ui-react";
import { RequestInfo } from "^@hooks/RequestInfo";
import { RequestStatus } from "^@hooks/RequestStatus";

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

  return (
    <Card fluid>
      <Container style={{ margin: "1em" }}>
        <Grid celled columns={4}>
          <Grid.Row>
            <Grid.Column width={2}>
              <h4>{t("components.requestCard.id")}</h4>
              <p>{requestID}</p>
            </Grid.Column>
            <Grid.Column>
              <h4>{t("components.requestCard.amount")}</h4>
              <Icon name="ethereum" /> {amount}
            </Grid.Column>
            <Grid.Column>
              <Popup
                content={recipient}
                trigger={
                  <div>
                    <h4>{t("components.requestCard.recipient")}</h4>
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
                    <h4>{t("components.requestCard.recipient")}</h4>
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
              <h4>{t("components.requestCard.status")}</h4>
              <p>{status}</p>
            </Grid.Column>
            <Grid.Column>
              <h4>{t("components.requestCard.required")}</h4>
              <p>{targetApprovalCount}</p>
            </Grid.Column>
            <Grid.Column>
              <h4>{t("components.requestCard.current")}</h4>
              <p>{`${approvalCount} / ${rejectionCount}`}</p>
            </Grid.Column>
            <Grid.Column width={6}>
              <h4>{t("components.requestCard.action")}</h4>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Card>
  );
};
