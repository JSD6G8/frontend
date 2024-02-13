import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';

import Layout from "./Layout";

function Signup() {
    const MySwal = withReactContent(Swal);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        emailAddress: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const [confirm_password, setConfirm_password] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
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

        if (!formData.emailAddress.trim()) {
            newErrors.emailAddress = 'Email is required';
        } else if (formData.emailAddress.includes(" ")) {
            newErrors.emailAddress = 'Invalid Email';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.emailAddress)) {
            newErrors.emailAddress = 'Invalid email address';
        }

        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be more than 8 characters long';
        } else if (!specialChars.test(formData.password)) {
            newErrors.password = 'Password must have special character ._-@%$#!';
        }

        if (formData.password !== confirm_password.confirm_password) {
            newErrors.confirm_password = 'Passwords do not match';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            try {
                const response = await axios.post(
                    'https://jsd6-loglife-backend.onrender.com/signup',
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
                        <div className="my-8" >
                            <label>First Name
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
                        <div className="my-8">
                            <label>Last Name
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
                        <div className="my-8">
                            <label>Email Address
                                <input
                                    type="text"
                                    name="emailAddress"
                                    id="emailAddress"
                                    value={formData.emailAddress}
                                    onChange={handleChange}
                                    className="input bg-gray-100 px-4 py-3 mt-3 w-full"
                                    placeholder="Email Address"
                                />
                                {errors.emailAddress && (
                                    <p className="text-red-500 text-xs mt-1">{errors.emailAddress}</p>
                                )}
                            </label>
                        </div>
                        <div className="my-8">
                            <label>Password
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        name="password"
                                        id="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="input bg-gray-100 px-4 py-3 mt-3 w-full"
                                        placeholder="Password"
                                    />
                                    <span
                                        className="absolute top-3 right-0 mt-3 mr-4 cursor-pointer"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? (
                                            <div style={{ color: '#9ca3af' }}>
                                                <Icon icon={eye} size={20} />
                                            </div>
                                        ) : (
                                            <div style={{ color: '#9ca3af' }}>
                                                <Icon icon={eyeOff} size={20} />
                                            </div>
                                        )}
                                    </span>
                                </div>
                                {errors.password && (
                                    <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                                )}
                            </label>
                            <p className="text-sm text-gray-400 font-light mt-2">Password must:</p>
                            <div className="pl-10 text-sm">
                                <ul className="list-disc text-gray-400 font-light">
                                    <li>Be more than 8 characters</li>
                                    <li>Must have special character ._-@%$#!</li>
                                </ul>
                            </div>
                        </div>
                        <div className="my-8">
                            <label>Confirm Password
                                <div className="relative">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        name="confirm_password"
                                        id="confirm_password"
                                        value={confirm_password.confirm_password}
                                        onChange={(e) => {
                                            const { name, value } = e.target;
                                            setConfirm_password({
                                                ...confirm_password,
                                                [name]: value,
                                            });
                                        }}
                                        className="input bg-gray-100 px-4 py-3 mt-3 w-full"
                                        placeholder="Confirm Password"
                                    />
                                    <span
                                        className="absolute top-3 right-0 mt-3 mr-4 cursor-pointer"
                                        onClick={toggleConfirmPasswordVisibility}
                                    >
                                        {showConfirmPassword ? (
                                            <div style={{ color: '#9ca3af' }}>
                                                <Icon icon={eye} size={20} />
                                            </div>
                                        ) : (
                                            <div style={{ color: '#9ca3af' }}>
                                                <Icon icon={eyeOff} size={20} />
                                            </div>
                                        )}
                                    </span>
                                </div>
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
                                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
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
        </Layout >
    )
}

export default Signup;
