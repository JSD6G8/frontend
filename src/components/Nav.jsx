import { useLocation } from "react-router-dom";
import Layout from "../Layout";
import { AddButton } from "./AddButton";
import Footer from "./Footer";
import "./Nav.css";
import { useAuth } from "../providers/authProvider";

function NavGuest() {
  let location = useLocation();
  return (
    <nav>
      <div className="navbar bg-white drop-shadow-md">
        <div className="navbar-start">
          <a href="/" className="ml-3">
            <img src="/logo_black.svg" alt="LogLife logo" />
          </a>
          <ul className="menu menu-horizontal font-medium">
            <li>
              <a
                href="/aboutus"
                className={`${
                  location.pathname === "/aboutus"
                    ? "bg-base-200 text-base"
                    : "text-base"
                }`}
              >
                About Us
              </a>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <a href="/login" className="btn btn-ghost mx-3 text-base">
            Login
          </a>
          <a
            href="/signup"
            className="btn btn-primary mr-3 text-base text-white hover:bg-[#1357B8]"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}

function NavLoggedInMobile() {
  const { user } = useAuth();

  return (
    <nav>
      <div className="navbar bg-white drop-shadow-md lg:hidden">
        <div className="navbar-start">
          <div className="dropdown font-medium">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm mt-3 w-52 rounded-box bg-white p-2 shadow "
            >
              <div className="mb-2 flex h-10 place-content-baseline sm:hidden">
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <img
                      className="self-center"
                      alt="profile"
                      src="http://placekitten.com/200/300"
                    />
                  </div>
                </div>
                {/* retrieve name from express w/ response.data.user.first_name */}
                <p className="ml-2 place-self-center text-lg font-bold">
                  Hello, {user?.first_name}!
                </p>
              </div>
              <hr />
              <li>
                <a className="py-5 text-base" href="/activities">
                  <i className="fa-solid fa-person-running fa-xl"></i>
                  Activities
                </a>
              </li>
              <li>
                <a className="py-5 text-base" href="/dashboard">
                  <i className="fa-solid fa-chart-column fa-lg"></i>Dashboard
                </a>
              </li>
              <li className="sm:hidden">
                <a className="py-5 text-base" href="/settings">
                  <i className="fa-solid fa-gear fa-lg"></i>Settings
                </a>
              </li>
              <li className="sm:hidden">
                <a className="py-5 text-base text-info" href="/logout">
                  <i className="fa-solid fa-right-to-bracket fa-lg text-info"></i>
                  Logout
                </a>
              </li>
              <hr />
              <li>
                <a className="py-5 text-base" href="/aboutus">
                  <i className="fa-solid fa-user-group"></i>About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a href="/">
            <img src="/logo_black.svg" alt="LogLife logo" />
          </a>
        </div>
        <div className="navbar-end">
          <AddButton />
          <div className="dropdown dropdown-end mx-3 mt-1 max-sm:hidden">
            <div
              tabIndex={0}
              role="button"
              className="avatar btn btn-circle btn-ghost btn-md"
            >
              <div className="w-10 rounded-full">
                <img
                  className="self-center"
                  alt="profile"
                  src="http://placekitten.com/200/300"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-white p-2 shadow"
            >
              {/* retrieve name from express w/ response.data.user.first_name*/}
              <p className="my-2 ml-2 place-self-start text-lg font-bold">
                👋🏼 Hello, {user?.first_name}!
              </p>
              <hr />
              <li>
                <a className="py-5 text-base" href="#">
                  <i className="fa-solid fa-gear fa-lg"></i>Settings
                </a>
              </li>
              <li>
                <a className="py-5 text-base text-info" href="/logout">
                  <i className="fa-solid fa-right-to-bracket fa-lg text-info"></i>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLoggedInDesktop() {
  const { user } = useAuth();
  let location = useLocation();

  return (
    <nav>
      <div className="navbar bg-white drop-shadow-md max-lg:hidden">
        <div className="navbar-start">
          <a href="/" className="ml-3">
            <img src="/logo_black.svg" alt="LogLife logo" />
          </a>
          <div>
            <ul className="menu menu-horizontal space-x-2 font-medium">
              <li>
                <a
                  href="/activities"
                  className={`${
                    location.pathname === "/activities"
                      ? "bg-base-200 text-base"
                      : "text-base"
                  }`}
                >
                  Activity List
                </a>
              </li>
              <li>
                <a
                  href="/dashboard"
                  className={`${
                    location.pathname === "/dashboard"
                      ? "bg-base-200 text-base"
                      : "text-base"
                  }`}
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="/aboutus"
                  className={`${
                    location.pathname === "/aboutus"
                      ? "bg-base-200 text-base"
                      : "text-base"
                  }`}
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end">
          <AddButton />
          <div className="dropdown dropdown-end mx-3 mt-1 font-medium">
            <div
              tabIndex={0}
              role="button"
              className="avatar btn btn-circle btn-ghost btn-md"
            >
              <div className="w-10 rounded-full">
                <img
                  className="self-center"
                  alt="profile"
                  src="http://placekitten.com/200/300"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-white p-2 shadow"
            >
              {/* retrieve name from express w/response.data.user.first_name */}
              <p className="my-2 ml-2 place-self-start text-lg font-bold">
                👋🏼 Hello, {user?.first_name}!
              </p>
              <hr />
              <li>
                <a className="py-5 text-base" href="/settings">
                  <i className="fa-solid fa-gear fa-lg"></i>Settings
                </a>
              </li>
              <li>
                <a className="py-5 text-base text-info" href="/logout">
                  <i className="fa-solid fa-right-to-bracket fa-lg text-info"></i>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Nav() {

  return (
    <Layout>
      {/* when new user come */}
      <NavGuest />
      <br />

      {/* when login in responsive */}
      <NavLoggedInMobile />
      <br />

      {/* when login in desktop */}
      <NavLoggedInDesktop />

      <Footer />
    </Layout>
  );
}

export { NavGuest, NavLoggedInDesktop, NavLoggedInMobile };
export default Nav;
