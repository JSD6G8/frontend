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
    <>
      <div className={isLoggedIn ? "hidden" : ""}>
        <NavGuest isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </div>
      <div className={isLoggedIn ? "" : "hidden"}>
        <NavLoggedInMobile isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <NavLoggedInDesktop isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </div>
      {children}
      <Footer />
    </>
  );
}

export default Layout;
