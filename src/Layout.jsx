/* eslint-disable react/prop-types */
import {
  NavGuest,
  NavLoggedInMobile,
  NavLoggedInDesktop,
} from "./components/Nav";
import { useState } from "react";
import Footer from "./components/Footer";

// TODO: Add dev login toggle
// TODO: Make nav fixed position

function Layout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div>
      <div className={`${isLoggedIn ? "hidden" : ""} sticky top-0 z-10 w-full`}>
        <NavGuest isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </div>
      <div className={`${isLoggedIn ? "" : "hidden"} sticky top-0 z-10 w-full`}>
        <NavLoggedInMobile isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <NavLoggedInDesktop isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </div>
      {children}
      <Footer />
    </>
  );
}

export default Layout;
