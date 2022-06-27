import React from "react";
import { Container, Divider, Header, Segment } from "semantic-ui-react";
import { Logo } from "^@components/common/Logo/Logo";
import { color, font } from "^@styles/global";
import useTranslation from "next-translate/useTranslation";

export const Footer = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <Segment
        vertical
        style={{
          backgroundColor: color["light-purple"],
          padding: "1.5em 0em",
        }}
      >
        <Container fluid textAlign="center">
          <Header
            as="h2"
            content={t("layout.footer.welcome")}
            style={{
              fontFamily: font.poppins,
              fontWeight: "bold",
              color: color.white,
            }}
          />
        </Container>
      </Segment>
      <Segment
        vertical
        style={{
          backgroundColor: color["dark-purple"],
        }}
      >
        <Container>
          <Divider section />
          <Container style={{ minHeight: "150px" }}>
            <Logo />
          </Container>
        </Container>
      </Segment>
    </>
  );
};
