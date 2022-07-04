import React from "react";
import { Container, Divider } from "semantic-ui-react";
import { BasicScreenContainer } from "^@components/screen";
import { AboutScreen1, AboutScreen2 } from "^@screens/about";

const About = () => {
  return (
    <BasicScreenContainer>
      <AboutScreen1 />
      <Container style={{ margin: "4em" }}>
        <Divider />
      </Container>
      <AboutScreen2 />
    </BasicScreenContainer>
  );
};

export default About;
