import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import React from "react";
import {
  Container,
  Grid,
  Header,
  Icon,
  Segment,
  SemanticWIDTHS,
} from "semantic-ui-react";
import { CustomizedButton } from "^@components/common/CustomizedButton/CustomizedButton";
import { InfoGridColumn, InfoGridColumnProps } from "^@components/screen";
import { routes } from "^@routes/routes";
import { color, font } from "^@styles/global";

export const IndexScreen3 = () => {
  const { t } = useTranslation("common");
  const router = useRouter();

  const infoGridData: InfoGridColumnProps[] = [
    {
      title: t("screens.index.screen3.info.initiator.title"),
      icon: "coffee",
      description: t("screens.index.screen3.info.initiator.description"),
    },
    {
      title: t("screens.index.screen3.info.patron.title"),
      icon: "users",
      description: t("screens.index.screen3.info.patron.description"),
    },
  ];

  const infoGridColumns = infoGridData.map(
    ({ title, icon, description }: InfoGridColumnProps, index) => {
      return (
        <InfoGridColumn
          key={index}
          title={title}
          icon={icon}
          description={description}
        />
      );
    }
  );

  return (
    <Segment
      vertical
      style={{
        minHeight: 700,
        padding: "5em 0em 5em 0em",
      }}
    >
      <Container text textAlign="center">
        <Header
          as="h1"
          style={{
            color: color.black,
            fontFamily: font.poppins,
            fontWeight: "bolder",
            fontSize: "3.5em",
            marginTop: "0.5em",
            marginBottom: "0.5em",
          }}
        >
          <span style={{ color: color["dark-purple"] }}>
            <Icon loading name="arrow alternate circle right outline" />
            {t("screens.index.screen3.title")}
          </span>
          {t("logo.name")}
        </Header>
        <CustomizedButton
          content={t("screens.index.screen3.button")}
          loading={false}
          styles={{
            fontFamily: font.poppins,
            backgroundColor: color["dark-purple"],
            color: "white",
          }}
          onClick={() => {
            router.push(routes.common.about);
          }}
        />
        <Grid
          columns={Math.min(infoGridData.length, 10) as SemanticWIDTHS}
          stackable
          style={{ paddingBottom: "2em" }}
        >
          {infoGridColumns}
        </Grid>
      </Container>
    </Segment>
  );
};
