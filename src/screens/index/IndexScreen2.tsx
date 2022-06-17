import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import React from "react";
import { Container, Header, Icon, Segment } from "semantic-ui-react";
import { CustomizedButton } from "^@components/common/CustomizedButton/CustomizedButton";
import { routes } from "^@routes/routes";
import { color, font } from "^@styles/global";

export const IndexScreen2 = () => {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <Segment
      vertical
      style={{
        minHeight: 700,
        padding: "5em 0em 5em 0em",
        backgroundColor: "rgb(117, 117, 244)",
      }}
    >
      <Container text textAlign="left">
        <Header
          as="h1"
          content={t("screens.index.screen2.title")}
          style={{
            fontFamily: font.poppins,
            fontWeight: "bolder",
            fontSize: "5em",
            marginTop: "0.5em",
            color: color.white,
          }}
        />
        <Header
          as="h2"
          content={t("screens.index.screen2.subtitle")}
          style={{
            fontFamily: font.poppins,
            fontSize: "1.7em",
            color: color["darker-grey"],
            fontWeight: "bold",
            marginTop: "0.5em",
            marginBottom: "1.5em",
          }}
        />
        <CustomizedButton
          style={{
            backgroundColor: color.white,
            color: color["dark-purple"],
          }}
          loading={false}
          content={
            <>
              <Icon name="compass outline" />
              {t("screens.index.screen2.button")}
            </>
          }
          onClick={() => {
            router.push(routes.common.explore);
          }}
        />
      </Container>
    </Segment>
  );
};
