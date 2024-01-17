/* eslint-disable react/prop-types */
import {
  NavGuest,
  NavLoggedInMobile,
  NavLoggedInDesktop,
} from "./components/Nav";
import { useState } from "react";

// TODO: Add dev login toggle
// TODO: Make nav fixed position

function Layout({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div>
      <div className={isLoggedIn ? "hidden" : ""}>
        <NavGuest />
      </div>
      <div className={isLoggedIn ? "" : "hidden"}>
        <NavLoggedInMobile />
        <NavLoggedInDesktop />
      </div>
      {children}
    </div>
  );
}

export default Layout;
