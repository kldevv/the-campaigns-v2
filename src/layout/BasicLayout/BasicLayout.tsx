import React from "react";

import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

export const BasicLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
