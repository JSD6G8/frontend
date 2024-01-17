import Layout from "../Layout";
import Footer from "./Footer";
import "./Nav.css";

function TempLoginToggle({ isLoggedIn, setIsLoggedIn }) {
  return (
    <label className="label flex cursor-pointer flex-row gap-1">
      <span className="label-text">Log-in Toggle</span>
      <input 
        type="checkbox"
        className="toggle"
        checked={isLoggedIn} 
        onChange={() => setIsLoggedIn(!isLoggedIn) }
      />
    </label>
  );
}

function NavGuest({ isLoggedIn, setIsLoggedIn }) {
  return (
    <nav>
      <div className="navbar bg-white drop-shadow-md">
        <div className="navbar-start">
          <a className="btn btn-ghost mx-3 text-xl">LogLife</a>
        </div>
        <div className="navbar-end">
          <TempLoginToggle isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          <button className="btn btn-ghost mx-3 text-base">Login</button>
          <a className="btn btn-primary mx-3 text-base text-white">Sign Up</a>
        </div>
      </div>
    </nav>
  );
}

function NavLoggedInMobile({ isLoggedIn, setIsLoggedIn }) {
  return (
    <nav>
      <div className="navbar bg-white drop-shadow-md lg:hidden">
        <div className="navbar-start">
          <div className="dropdown">
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
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-white p-2 shadow"
            >
              <li>
                <a className="py-5 text-base">
                  <i className="fa-solid fa-person-running fa-xl"></i>
                  Activities
                </a>
              </li>
              <li>
                <a className="py-5 text-base">
                  <i className="fa-solid fa-chart-column fa-lg"></i>Dashboard
                </a>
              </li>
              <li>
                <a className="py-5 text-base">
                  <i className="fa-solid fa-user-group"></i>About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl">LogLife</a>
        </div>
        <div className="navbar-end">
          <TempLoginToggle isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          <div className="dropdown dropdown-end mx-3">
            <div
              tabIndex={0}
              role="button"
              className="avatar btn btn-circle btn-ghost"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="profile"
                  src="https://sv1.picz.in.th/images/2023/11/17/d0YHXAz.jpeg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-white p-2 shadow"
            >
              <li>
                <a className="py-5 text-base">
                  <i className="fa-solid fa-gear fa-lg"></i>Settings
                </a>
              </li>
              <li>
                <a className="py-5 text-base">
                  <i className="fa-solid fa-right-to-bracket fa-lg"></i>Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <div className=" bg-white drop-shadow-md lg:hidden">
        <form className="flex items-center p-4">
          <label className="sr-only">Search</label>
          <div className="relative w-full">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className=" input input-bordered w-full p-2.5 pl-10"
              placeholder="Search"
              required
            />
          </div>
        </form>
      </div> */}
    </nav>
  );
}

function NavLoggedInDesktop({ isLoggedIn, setIsLoggedIn }) {
  return (
    <nav>
      <div className="navbar bg-white drop-shadow-md max-lg:hidden">
        <div className="navbar-start">
          <a className="m-3 text-xl">LogLife</a>
          <div>
            <ul className="menu menu-horizontal">
              <li>
                <a href="/activities" className="text-base">
                  Activity List
                </a>
              </li>
              <li>
                <a href="/dashboard" className="text-base">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="#" className="text-base">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-end">
          {/* <div className="w-80">
            <form className="flex items-center">
              <label className="sr-only">Search</label>
              <div className="relative w-full">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="h-5 w-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className=" input input-bordered w-full p-2.5 pl-10"
                  placeholder="Search"
                  required
                />
              </div>
            </form>
          </div> */}
          <TempLoginToggle isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          <div className="dropdown dropdown-end mx-3">
            <div
              tabIndex={0}
              role="button"
              className="avatar btn btn-circle btn-ghost"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="profile"
                  src="https://sv1.picz.in.th/images/2023/11/17/d0YHXAz.jpeg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-white p-2 shadow"
            >
              <li>
                <a className="py-5 text-base">
                  <i className="fa-solid fa-gear fa-lg"></i>Settings
                </a>
              </li>
              <li>
                <a className="py-5 text-base">
                  <i className="fa-solid fa-right-to-bracket fa-lg"></i>Logout
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

export { NavGuest, NavLoggedInMobile, NavLoggedInDesktop };
export default Nav;
