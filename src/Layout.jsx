/* eslint-disable react/prop-types */
import { NavGuest, NavLoggedInMobile, NavLoggedInDesktop } from "./components/Nav";

// TODO: Add dev login toggle
// TODO: Make nav fixed position

function Layout({ children }) {
    return (
        <div>
            <NavLoggedInMobile />
            <NavLoggedInDesktop />
            {children}
        </div>
    );
}

export default Layout;