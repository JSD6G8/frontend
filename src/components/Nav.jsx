import Layout from "../Layout";
import Footer from "./Footer";
import "../Nav.css"

function Nav() {
    return (
        <Layout>
            <nav>
                <div className="navbar bg-white drop-shadow-md">
                    <div className="navbar-start">
                        <a className="btn btn-ghost text-xl mx-3">daisyUI</a>
                    </div>
                    <div className="navbar-end">
                        <button className="btn btn-ghost mx-3">Login</button>
                        <a className="btn btn-primary text-white mx-3">Sign Up</a>
                    </div>
                </div>
            </nav>
            <br/>
            <nav>
                <div className="navbar bg-white drop-shadow-md">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {/* <li>
                                    <form >
                                        <span className="material-symbols-outlined lass inline">search</span>
                                        <input type="search" placeholder="search..." />
                                    </form>
                                </li> */}
                                <li>
                                    <a className="text-sm"><i className="fa-solid fa-person-running fa-xl"></i>Activities</a>
                                </li>
                                <li>
                                    <a className="text-sm"><i className="fa-solid fa-chart-column fa-lg"></i>Dashboard</a>
                                </li>
                                <li>
                                    <a className="text-sm"><i className="fa-solid fa-user-group"></i>About Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-center">
                        <a className="btn btn-ghost text-xl">daisyUI</a>
                    </div>
                    <div className="navbar-end">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="profile" src="https://sv1.picz.in.th/images/2023/11/17/d0YHXAz.jpeg" />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a><i className="fa-solid fa-gear fa-lg"></i>Settings</a></li>
                                <li><a><i className="fa-solid fa-right-to-bracket fa-lg"></i>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <Footer/>
        </Layout>
    );
}

export default Nav;
