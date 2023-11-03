import React, { } from "react";
import { Footer, Header } from "../../components";


const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
