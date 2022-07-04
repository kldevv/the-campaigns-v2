import React from "react";
import { Container, Divider } from "semantic-ui-react";
import { BasicScreenContainer } from "^@components/screen";
import { AboutScreen1 } from "^@screens/about";

const About = () => {
  return (
    <BasicScreenContainer>
      <AboutScreen1 />
      <Container style={{ margin: "4em" }}>
        <Divider />
      </Container>
    </BasicScreenContainer>
  );
};

export default About;
