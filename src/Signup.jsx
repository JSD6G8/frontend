import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import Layout from "./Layout";

function Signup() {
    const MySwal = withReactContent(Swal);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};
        const specialChars = /[._\-@%$#!]/;

        if (!formData.first_name.trim()) {
            newErrors.first_name = 'First Name is required';
        }

        if (!formData.last_name.trim()) {
            newErrors.last_name = 'Last Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (formData.email.includes(" ")) {
            newErrors.email = 'Invalid Email';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }

        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 4) {
            newErrors.password = 'Password must be more than 4 characters long';
        } else if (!specialChars.test(formData.password)) {
            newErrors.password = 'Password must have special character ._-@%$#!';
        }

        if (formData.password !== formData.confirm_password) {
            newErrors.confirm_password = 'Passwords do not match';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await axios.post(
                    'https://659cbd33633f9aee7907e27c.mockapi.io/kiki/user',
                    formData
                );

                if (response.status === 201) {
                    console.log(`registered successfully. status is ${response.status}`);
                    MySwal.fire({
                        icon: 'success',
                        text: 'User registered successfully!',
                        confirmButtonColor: '#6587E8',
                    }).then(() => {
                        navigate('/login');
                    });
                } else {
                    MySwal.fire({
                        icon: 'error',
                        text: 'Failed to register user. Please try again.',
                        confirmButtonColor: '#6587E8',
                    });
                }
            } catch (error) {
                console.error('Error:', error);
                MySwal.fire({
                    icon: 'error',
                    text: 'An unexpected error occurred. Please try again later.',
                    confirmButtonColor: '#6587E8',
                });
            }
        }
    };

    return (
        <Layout>
                <div className="bg-white mx-auto my-10 shadow-md rounded-xl w-10/12 max-w-lg">
                    <div className="p-8">
                        <h1 className="font-medium text-2xl mt-3 text-center">Sign up</h1>
                        <form className="mt-6" onSubmit={handleSubmit}>
                            <div className="md:flex">
                                <div className="md:w-1/2 md:mr-3">
                                    <label>First Name <span className="text-red-500">*</span>
                                        <input
                                            type="text"
                                            name="first_name"
                                            id="first_name"
                                            value={formData.first_name}
                                            onChange={handleChange}
                                            className="input bg-gray-100 rounded-sm px-4 py-3 mt-3 w-full"
                                            placeholder="First Name"
                                        />
                                        {errors.first_name && (
                                            <p className="text-red-500 text-xs mt-1">{errors.first_name}</p>
                                        )}
                                    </label>
                                </div>
                                <div className="my-5 md:my-0 md:w-1/2 md:ml-3">
                                    <label>Last Name <span className="text-red-500">*</span>
                                        <input
                                            type="text"
                                            name="last_name"
                                            id="last_name"
                                            value={formData.last_name}
                                            onChange={handleChange}
                                            className="bg-gray-100 input px-4 py-3 mt-3 w-full text-sm"
                                            placeholder="Last Name"
                                        />
                                        {errors.last_name && (
                                            <p className="text-red-500 text-xs mt-1">{errors.last_name}</p>
                                        )}
                                    </label>
                                </div>
                            </div>
                            <div className="my-5">
                                <label>Email Address <span className="text-red-500">*</span>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="input bg-gray-100 px-4 py-3 mt-3 w-full"
                                        placeholder="Email Address"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                                    )}
                                </label>
                            </div>
                            <div className="my-5 mt-2">
                                <label>Password <span className="text-red-500">*</span>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="input bg-gray-100 px-4 py-3 mt-3 w-full"
                                        placeholder="Password"
                                    />
                                    {errors.password && (
                                        <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                                    )}
                                </label>
                            </div>
                            <div className="my-5">
                                <label>Confirm Password <span className="text-red-500">*</span>
                                    <input
                                        type="password"
                                        name="confirm_password"
                                        id="confirm_password"
                                        value={formData.confirm_password}
                                        onChange={handleChange}
                                        className="input bg-gray-100 px-4 py-3 mt-3 w-full"
                                        placeholder="Confirm Password"
                                    />
                                    {errors.confirm_password && (
                                        <p className="text-red-500 text-xs mt-1">{errors.confirm_password}</p>
                                    )}
                                </label>
                            </div>
                            <div className="my-10">
                                <button type="submit" className="block text-center text-white bg-primary my-2 py-[14.5px] duration-300 rounded-lg hover:bg-secondary w-full">
                                    Sign up
                                </button>
                            </div>
                        </form>

                        {/* Social Sign up*/}
                        {/* <div className="my-4 mt-10 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                            <p className="md:mx-2 text-sm font-light text-gray-400">
                                Sign up With Social
                            </p>
                        </div>
                        <div className=" mt-7">
                            <a href="#" className="flex items-center justify-center space-x-2 text-gray-600 my-2 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                </svg>
                                <span>Sign up with Google</span>
                            </a>
                            <a href="#" className="flex items-center justify-center space-x-2 text-gray-600 my-2 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="27" height="27" viewBox="0 0 48 48">
                                    <path fill="#3F51B5" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"></path>
                                </svg>
                                <span>Sign up with Facebook</span>
                            </a>
                        </div> */}


                        <p className="mt-10 text-sm text-center font-light text-gray-400">Do you have an account?  <a href="/login" className="text-black font-medium hover:underline decoration-black">Login here</a></p>
                    </div>
                </div>
        </Layout>
    )
}


export default Signup;

