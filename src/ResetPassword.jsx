import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';

import Layout from './Layout';

function ResetPassword() {
    const MySwal = withReactContent(Swal);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
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
                const response = await axios.patch(
                    'https://659cbd33633f9aee7907e27c.mockapi.io/kiki/users',
                    formData
                );
                if (response.status === 200) {
                    MySwal.fire({
                        icon: 'success',
                        text: 'Password updated successfully!',
                        confirmButtonColor: '#6587E8',
                    }).then(() => {
                        navigate('/login');
                    });
                } else {
                    MySwal.fire({
                        icon: 'error',
                        text: 'Failed to update password. Please try again.',
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
            <div className="h-screen">
                <div className="bg-white mx-auto my-10 shadow-md rounded-xl w-10/12 max-w-lg">
                    <div className="p-8">
                        <h1 className="font-medium text-2xl mt-3 text-center">New Password</h1>
                        <form className="mt-6" onSubmit={handleSubmit}>
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
                                    Update Password
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ResetPassword;
