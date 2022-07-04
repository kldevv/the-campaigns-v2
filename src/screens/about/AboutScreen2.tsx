import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import React from "react";
import { Container, Header, Icon, Image } from "semantic-ui-react";
import { AboutHeader, AboutMessage } from "^@components/screen";
import { routes } from "^@routes/routes";
import { color, font } from "^@styles/global";

export const AboutScreen2 = () => {
  const { t } = useTranslation("common");
  return (
    <Container style={{ marginTop: "3em" }}>
      <Header
        as="h1"
        style={{
          fonFamily: font.poppins,
          fontWeight: "bolder",
          fontSize: "4em",
          color: color.black,
        }}
      >
        <div>{t("screens.about.screen2.header")}</div>
      </Header>
      <AboutHeader content={t("screens.about.screen2.technology.header")} />
      <AboutMessage content={t("screens.about.screen2.technology.content")} />
      <Image.Group style={{ maring: "10em" }} size="tiny">
        <Image src="/images/react.png" alt="react" />
        <Image src="/images/next.png" alt="next" />
        <Image src="/images/semantic-ui.png" alt="react-semantic-ui" />
        <Image src="/images/solidity.png" alt="solidity" />
        <Image src="/images/typescript.png" alt="typescript" />
      </Image.Group>
      <AboutHeader content={t("screens.about.screen2.developer.header")} />
      <AboutMessage content={t("screens.about.screen2.developer.content")} />
      <Link href={routes.external.linkedin}>
        <Icon name="linkedin" circular size="huge" link />
      </Link>
      <Link href={routes.external["github-main"]}>
        <Icon
          name="github"
          circular
          size="huge"
          style={{ margin: "10px" }}
          link
        />
      </Link>
      <Image
        src="/images/developer.jpg"
        alt="developer"
        circular
        size="medium"
      />
    </Container>
  );
};
