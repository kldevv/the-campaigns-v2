import React from "react";
import { IndexScreen1, IndexScreen2, IndexScreen3 } from "^@screens/index";

const Index = () => {
  return (
    <div className="bg-violet-400 container py-20 w-full">
      <IndexScreen1 />
      <IndexScreen2 />
      <IndexScreen3 />
    </div>
  );
};

export default Index;
