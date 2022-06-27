import useTranslation from "next-translate/useTranslation";
import React, { useCallback, useContext, useState } from "react";
import { Button, Input, Modal } from "semantic-ui-react";
import { CustomizedButton } from "^@components/common";
import { CampaignInfoDetailContext } from "^@contexts";
import { contributeCampaign } from "^@services/blockchain/contributeCampaign";
import { color, font } from "^@styles/global";

export const ContributeModal = () => {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState(0);
  const [loading, setLoading] = useState(false);
  const { campaignInfo } = useContext(CampaignInfoDetailContext);
  const { t } = useTranslation("common");

  const onOpenHandler = useCallback(() => {
    setOpen(true);
  }, []);
  const onCloseHandler = useCallback(() => {
    setOpen(false);
  }, []);
  const onInputChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      const value = event.target.value;
      setAmount(Math.max(0, parseInt(value)));
    },
    []
  );
  const onConfirmContribute = async () => {
    setLoading(true);
    try {
      await contributeCampaign(campaignInfo.address, amount);
      window.location.reload();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      setOpen(false);
    }
  };
  const onConfirm = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      onConfirmContribute();
    },
    [campaignInfo, amount]
  );

  if (!campaignInfo) {
    return null;
  }

  return (
    <Modal
      onOpen={onOpenHandler}
      onClose={onCloseHandler}
      trigger={
        <Button
          icon="user"
          content={t("containers.contributeModal.button")}
          disabled={campaignInfo.isPatron || campaignInfo.isLocked}
          style={{ fontFamily: font.poppins }}
        />
      }
      open={open}
    >
      <Modal.Header style={{ fontFamily: font.poppins, fontSize: "2em" }}>
        {t("containers.contributeModal.header", {
          name: campaignInfo.name,
        })}
      </Modal.Header>
      <Modal.Content style={{ fontFamily: font.poppins }}>
        <div>
          {t("containers.contributeModal.content1")} <br />
          {t("containers.contributeModal.content2")}
          <span style={{ fontWeight: "bolder" }}>
            {campaignInfo.minContribution}
          </span>
          {t("containers.contributeModal.content3")} <br />
          {t("containers.contributeModal.content4")}
        </div>
        <Input
          type="number"
          style={{ marginTop: "1em" }}
          iconPosition="left"
          onChange={onInputChangeHandler}
          placeholder={t("containers.contributeModal.input")}
          icon={{ name: "ethereum", circular: true, link: false }}
        />
      </Modal.Content>
      <Modal.Actions>
        <CustomizedButton
          content={t("containers.contributeModal.cancel")}
          size="medium"
          loading={false}
          onClick={onCloseHandler}
          style={{
            color: color["darker-grey"],
            backgroundColor: color["light-purple"],
          }}
        />
        <CustomizedButton
          content={t("containers.contributeModal.confirm")}
          size="medium"
          loading={loading}
          onClick={onConfirm}
        />
      </Modal.Actions>
    </Modal>
  );
};
