import Layout from "../Layout";
import Footer from "./Footer";
import "./Nav.css";

function Nav() {
    return (
        <Layout>
        {/* when new user come */}
            <nav>
                <div className="navbar bg-white drop-shadow-md">
                    <div className="navbar-start">
                        <a className="btn btn-ghost text-xl mx-3">daisyUI</a>
                    </div>
                    <div className="navbar-end">
                        <button className="btn btn-ghost mx-3 text-base">Login</button>
                        <a className="btn btn-primary text-white text-base mx-3">Sign Up</a>
                    </div>
                </div>
            </nav>
            <br />

            {/* when login in responsive */}
            <nav>
                <div className="navbar bg-white lg:hidden">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
                                <li>
                                    <a className="text-base py-5"><i className="fa-solid fa-person-running fa-xl"></i>Activities</a>
                                </li>
                                <li>
                                    <a className="text-base py-5"><i className="fa-solid fa-chart-column fa-lg"></i>Dashboard</a>
                                </li>
                                <li>
                                    <a className="text-base py-5"><i className="fa-solid fa-user-group"></i>About Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-center">
                        <a className="btn btn-ghost text-xl">daisyUI</a>
                    </div>
                    <div className="navbar-end">
                        <div className="dropdown dropdown-end mx-3">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="profile" src="https://sv1.picz.in.th/images/2023/11/17/d0YHXAz.jpeg" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
                                <li><a className="text-base py-5"><i className="fa-solid fa-gear fa-lg"></i>Settings</a></li>
                                <li><a className="text-base py-5"><i className="fa-solid fa-right-to-bracket fa-lg"></i>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className=" bg-white drop-shadow-md lg:hidden">
                        <form className="flex items-center p-4">
                            <label className="sr-only">Search</label>
                            <div className="relative w-full">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path></svg>
                                </div>
                                <input type="text" id="simple-search" className=" input input-bordered w-full pl-10 p-2.5" placeholder="Search" required />
                            </div>
                        </form>    
                </div>
            </nav>
            <br />

            {/* when login in desktop */}
            <nav>
                <div className="navbar bg-white drop-shadow-md max-lg:hidden">
                    <div className="navbar-start">
                        <a className="text-xl m-3">daisyUI</a>
                        <div>
                            <ul className="menu menu-horizontal">
                                <li><a href="/activities" className="text-base">Activity List</a></li>
                                <li><a href="/dashboard" className="text-base">Dashboard</a></li>
                                <li><a href="#" className="text-base">About Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="w-80">
                            <form className="flex items-center">
                                <label className="sr-only">Search</label>
                                <div className="relative w-full">
                                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                                    </div>
                                    <input type="text" id="simple-search" className=" input input-bordered w-full pl-10 p-2.5" placeholder="Search" required />
                                </div>
                            </form>
                        </div>
                        <div className="dropdown dropdown-end mx-3">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="profile" src="https://sv1.picz.in.th/images/2023/11/17/d0YHXAz.jpeg" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
                                <li><a className="text-base py-5"><i className="fa-solid fa-gear fa-lg"></i>Settings</a></li>
                                <li><a className="text-base py-5"><i className="fa-solid fa-right-to-bracket fa-lg"></i>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <Footer />
        </Layout>
    );
}

export default Nav;
