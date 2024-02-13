/* eslint-disable react/prop-types */
import { useState } from "react";
import Footer from "./components/Footer";
import {
  NavGuest,
  NavLoggedInDesktop,
  NavLoggedInMobile,
} from "./components/Nav";
import { useAuth } from "./providers/authProvider";

function Layout({ children }) {
  const {user, setUser} = useAuth();

  return (
    <>
      <div className={`${user ? "hidden" : ""} sticky top-0 z-10 w-full`}>
        <NavGuest/>
      </div>
      <div className={`${user ? "" : "hidden"} sticky top-0 z-10 w-full`}>
        <NavLoggedInMobile/>
        <NavLoggedInDesktop/>
      </div>
      {children}
      <Footer />
    </>
  );
}

export default Layout;
