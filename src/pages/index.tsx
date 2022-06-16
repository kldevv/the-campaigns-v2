import React from "react";
import { BasicScreenContainer } from "^@components/screen";
import { IndexScreen1, IndexScreen2, IndexScreen3 } from "^@screens/index";

const Index = () => {
  return (
    <BasicScreenContainer>
      <IndexScreen1 />
      <IndexScreen2 />
      <IndexScreen3 />
    </BasicScreenContainer>
  );
};

export default Index;
