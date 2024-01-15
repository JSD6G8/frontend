import { useState } from 'react';
import { useNavigate } from "react-router-dom"

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import Layout from "./Layout";


function Login() {
    const MySwal = withReactContent(Swal)
    const navigate = useNavigate()
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "username": inputs.username,
            "password": inputs.password
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch("https://www.melivecode.com/api/login", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                if (result.status === 'ok') {
                    MySwal.fire({
                        html: <i>{result.message}</i>,
                        icon: 'success'
                    }).then((value) => {
                        navigate('/activities')
                    })
                } else {
                    MySwal.fire({
                        html: <i>{result.message}</i>,
                        icon: 'error'
                    })
                }
            })
            .catch(error => console.log('error', error));
        console.log(inputs);
    }
    return (
        <Layout>
            <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
                <div className="py-8 px-8 rounded-xl">
                    <h1 className="font-medium text-2xl mt-3 text-center">Login</h1>
                    <form onSubmit={handleSubmit} className="mt-6">
                        <div className="my-5 text-sm">
                            <label className="block text-black">Email Address
                                <input
                                    type="text"
                                    name="username"
                                    id="email"
                                    value={inputs.username || ""}
                                    onChange={handleChange}
                                    className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                                    placeholder="Email Address"
                                />
                            </label>
                        </div>
                        <div className="my-5 text-sm">
                            <label className="block text-black">Password
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={inputs.password || ""}
                                    onChange={handleChange}
                                    className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full"
                                    placeholder="Password"
                                />
                            </label>
                            <div className="flex justify-end mt-2 text-xs text-gray-600">
                                <a href="#">Forget Password?</a>
                            </div>
                        </div>
                        <button className="block text-center text-white bg-primary p-3 duration-300 rounded-sm hover:bg-secondary w-full">
                            Login
                        </button>
                    </form>

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