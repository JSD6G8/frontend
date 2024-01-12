import Layout from "./Layout";

function Login() {
    return (
        <Layout>
            <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
                <div className="py-8 px-8 rounded-xl">
                    <h1 className="font-medium text-2xl mt-3 text-center">Login</h1>
                    <form action="" className="mt-6">
                        <div className="my-5 text-sm">
                            <label className="block text-black">Email Address</label>
                            <input type="text" id="email" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Email Address" />
                        </div>
                        <div className="my-5 text-sm">
                            <label className="block text-black">Password</label>
                            <input type="password" id="password" className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Password" />
                            <div className="flex justify-end mt-2 text-xs text-gray-600">
                                <a href="#">Forget Password?</a>
                            </div>
                        </div>
                        <div className="mb-4 flex items-center">
                            <input type="checkbox" id="remember" name="remember" className="text-primary"/>
                                <label className="text-gray-600 ml-2">Remember Me</label>
                        </div>
                        <button className="block text-center text-white bg-primary p-3 duration-300 rounded-sm hover:bg-secondary w-full">Login</button>
                    </form>
                    <div className="flex md:justify-between justify-center items-center mt-10">
                        <div className="bg-gray-300 md:block hidden w-4/12"></div>
                        <p className="md:mx-2 text-sm font-light text-gray-400"> Login With Social </p>
                        <div className="bg-gray-300 md:block hidden w-4/12"></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-2 mt-7">
                        <div>
                            <button className="text-center w-full text-white bg-red-500 p-3 duration-300 rounded-sm">Google</button>
                        </div>
                        <div>
                            <button className="text-center w-full text-white bg-blue-600 p-3 duration-300 rounded-sm">Facebook</button>
                        </div>
                    </div>
                    <p className="mt-12 text-xs text-center font-light text-gray-400"> Don't have an account? <a href="#" className="text-black font-medium"> Sign Up here </a>  </p>
                </div>
            </div>
        </Layout>
    );
}

export default Login;