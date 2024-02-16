import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";

import Layout from "./Layout";
import { useAuth } from "./providers/authProvider";

function Login() {
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const [inputs, setInputs] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const requestBody = {
      emailAddress: inputs.username,
      password: inputs.password,
    };

    try {
      const response = await axios.post(
        "https://backend.loglife.prutmongkol.dev/login",
        requestBody,
        {
          withCredentials: true,
        },
      );
      if (response.status === 200) {
        setUser(response.data.user);
        navigate("/activities", { replace: true });
      } else {
        await MySwal.fire({
          icon: "error",
          text: "Invalid email or password.",
          confirmButtonColor: "#6587E8",
        });
      }
    } catch (error) {
      console.log(error);
      MySwal.fire({
        icon: "error",
        text: "An unexpected error occurred. Please try again later.",
        confirmButtonColor: "#6587E8",
      });
    }

    // fetch("https://backend.loglife.prutmongkol.dev/login", requestOptions)
    //     .then(response => response.json())
    //     .then(result => {
    //         console.log(result)
    //         if (result.status === 'ok') {
    //             MySwal.fire({
    //                 icon: 'success',
    //                 text: 'Logged in successfully!',
    //                 confirmButtonColor: '#6587E8',
    //             }).then(() => {
    //                 navigate('/activities')
    //             })
    //         } else {
    //             MySwal.fire({
    //                 icon: 'error',
    //                 text: 'Invalid email or password.',
    //                 confirmButtonColor: '#6587E8',
    //             })
    //         }
    //     })
    //     .catch(error => {
    //         console.log('error', error);
    //         MySwal.fire({
    //             icon: 'error',
    //             text: 'An unexpected error occurred. Please try again later.',
    //             confirmButtonColor: '#6587E8'
    //         });
    //     });
    // console.log(inputs);
  };
  return (
    <Layout>
      <div className="h-screen">
        <div className="mx-auto my-20 w-10/12 max-w-lg rounded-xl bg-white shadow-md">
          <div className="p-8">
            <h1 className="mt-3 text-center text-2xl font-medium">Login</h1>
            <form className="mt-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-black">
                  Email Address
                  <input
                    type="text"
                    name="username"
                    id="email"
                    value={inputs.username}
                    onChange={handleChange}
                    className="input mt-3 w-full rounded-sm bg-gray-100 px-4 py-3"
                    placeholder="Email Address"
                  />
                </label>
              </div>
              <div className="my-8">
                <label className="block text-black">
                  Password
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      id="password"
                      value={inputs.password}
                      onChange={handleChange}
                      className="input mt-3 w-full rounded-sm bg-gray-100 px-4 py-3"
                      placeholder="Password"
                    />
                    <span
                      className="absolute right-0 top-3 mr-4 mt-3 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <div style={{ color: "#9ca3af" }}>
                          <Icon icon={eye} size={20} />
                        </div>
                      ) : (
                        <div style={{ color: "#9ca3af" }}>
                          <Icon icon={eyeOff} size={20} />
                        </div>
                      )}
                    </span>
                  </div>
                </label>

                <div className="mt-2 flex justify-end text-xs text-gray-600 hover:underline">
                  <a href="/forget-password">Forget Password?</a>
                </div>
              </div>
              <button className="my-2 block w-full rounded-lg bg-primary py-[14.5px] text-center text-white duration-300 hover:bg-secondary">
                Login
              </button>
            </form>

            {/*Login With Social */}
            {/* <div className="my-4 mt-10 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                        <p className="md:mx-2 text-sm font-light text-gray-400">
                            Login With Social
                        </p>
                    </div>
                    <div className=" mt-7">
                        <a href="#" className="flex items-center justify-center space-x-2 text-gray-600 my-2 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            </svg>
                            <span className="text-sm">Login with Google</span>
                        </a>
                        <a href="#" className="flex items-center justify-center space-x-2 text-gray-600 my-2 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="27" height="27" viewBox="0 0 48 48">
                                <path fill="#3F51B5" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"></path>
                            </svg>
                            <span className="text-sm">Login with Facebook</span>
                        </a>
                    </div> */}

            <p className="mt-10 text-center text-sm font-light text-gray-400">
              Don't have an account?{" "}
              <a
                href="/signup"
                className="font-medium text-black decoration-black hover:underline"
              >
                Sign Up here
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
