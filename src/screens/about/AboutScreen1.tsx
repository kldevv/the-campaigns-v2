import useTranslation from "next-translate/useTranslation";
import React from "react";
import { Container, Header, Icon } from "semantic-ui-react";
import { AboutHeader, AboutMessage } from "^@components/screen";
import { color, font } from "^@styles/global";

export const AboutScreen1 = () => {
  const { t } = useTranslation("common");
  return (
    <Container style={{ marginTop: "8em" }}>
      <Header
        as="h1"
        style={{
          fonFamily: font.poppins,
          fontWeight: "bolder",
          fontSize: "4em",
          marginTop: "1em",
          color: color.black,
        }}
      >
        <div>
          {t("screens.about.screen1.header")}
          <Icon name="lightbulb outline" />
        </div>
      </Header>
      <AboutMessage content={t("screens.about.screen1.content")} />
      <AboutHeader content={t("screens.about.screen1.howItWorks.header")} />
      <AboutMessage content={t("screens.about.screen1.howItWorks.content")} />
      <AboutHeader content={t("screens.about.screen1.stepByStep.header")} />
      <AboutMessage
        content={
          <ul>
            <li style={{ margin: "10px 0" }}>
              {t("screens.about.screen1.stepByStep.content.li1")}
            </li>
            <li style={{ margin: "10px 0" }}>
              {t("screens.about.screen1.stepByStep.content.li2")}
            </li>
            <li style={{ margin: "10px 0" }}>
              {t("screens.about.screen1.stepByStep.content.li3")}
            </li>
            <li style={{ margin: "10px 0" }}>
              {t("screens.about.screen1.stepByStep.content.li4")}
            </li>
            <li style={{ margin: "10px 0" }}>
              {t("screens.about.screen1.stepByStep.content.li5")}
            </li>
          </ul>
        }
      />
    </Container>
  );
};
