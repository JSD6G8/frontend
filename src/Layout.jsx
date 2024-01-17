/* eslint-disable react/prop-types */
import { NavGuest, NavLoggedInMobile, NavLoggedInDesktop } from "./components/Nav";

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