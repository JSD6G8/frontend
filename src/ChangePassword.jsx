import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';

import Layout from './Layout';

const ChangePassword = () => {
    const MySwal = withReactContent(Swal);
    const navigate = useNavigate();

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [validOldPassword, setValidOldPassword] = useState(false);

    const userId = 1;

    useEffect(() => {
        const checkOldPassword = async () => {
            try {
                const response = await axios.get(`https://65cad4afefec34d9ed86573b.mockapi.io/loglife/membership/${userId}`);
                const { password } = response.data;

                if (oldPassword === password) {
                    setValidOldPassword(true);
                } else {
                    setValidOldPassword(false);
                }
            } catch (error) {
                console.error('Error checking old password:', error);
            }
        };

        if (oldPassword.trim() !== '') {
            checkOldPassword();
        } else {
            setValidOldPassword(false);
        }
    }, [oldPassword]);

    const togglePasswordVisibility = () => {
        setShowOldPassword(!showOldPassword);
    };

    const toggleNewPasswordVisibility = () => {
        setShowNewPassword(!showNewPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmNewPassword(!showConfirmNewPassword);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'oldPassword') {
            setOldPassword(value);
        } else if (name === 'newPassword') {
            setNewPassword(value);
        } else if (name === 'confirmPassword') {
            setConfirmPassword(value);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!validOldPassword) {
            newErrors.oldPassword = 'Incorrect Old Password';
        }

        if (!newPassword.trim()) {
            newErrors.newPassword = 'New Password is required';
        } else if (newPassword.length < 8) {
            newErrors.newPassword = 'New Password must be more than 8 characters long';
        }

        if (newPassword !== confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            try {
                await axios.put('https://65cad4afefec34d9ed86573b.mockapi.io/loglife/membership/1', { password: newPassword });
                MySwal.fire({
                    icon: 'success',
                    text: 'Password changed successfully!',
                    confirmButtonColor: '#6587E8',
                });
                setOldPassword('');
                setNewPassword('');
                setConfirmPassword('');
                setValidOldPassword(false);
            } catch (error) {
                console.error('Error changing password:', error);
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
                            <div>
                                <label>Old Password
                                    <div className="relative">
                                        <input
                                            type={showOldPassword ? "text" : "password"}
                                            name="oldPassword"
                                            value={oldPassword}
                                            onChange={handleChange}
                                            className="input bg-gray-100 px-4 py-3 mt-3 w-full"
                                            placeholder="Old Password"
                                        />
                                        <span
                                            className="absolute top-3 right-0 mt-3 mr-4 cursor-pointer"
                                            onClick={togglePasswordVisibility}
                                        >
                                            {showOldPassword ? (
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
                                    {errors.oldPassword && (
                                        <p className="text-red-500 text-xs mt-1">{errors.oldPassword}</p>
                                    )}
                                </label>
                            </div>
                            <div className="my-8">
                                <label>New Password
                                    <div className="relative">
                                        <input
                                            type={showNewPassword ? "text" : "password"}
                                            name="newPassword"
                                            id="newPassword"
                                            value={newPassword}
                                            onChange={handleChange}
                                            className="input bg-gray-100 px-4 py-3 mt-3 w-full"
                                            placeholder="New Password"
                                        />
                                        <span
                                            className="absolute top-3 right-0 mt-3 mr-4 cursor-pointer"
                                            onClick={toggleNewPasswordVisibility}
                                        >
                                            {showNewPassword ? (
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
                                    {errors.newPassword && (
                                        <p className="text-red-500 text-xs mt-1">{errors.newPassword}</p>
                                    )}
                                </label>
                                <p className="text-sm text-gray-400 font-light mt-2">Password must:</p>
                                <div className="pl-10 text-sm">
                                    <ul className="list-disc text-gray-400 font-light">
                                        <li>Be more than 8 characters</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="my-8">
                                <label>Confirm New Password
                                    <div className="relative">
                                        <input
                                            type={showConfirmNewPassword ? "text" : "password"}
                                            name="confirmPassword"
                                            value={confirmPassword}
                                            onChange={handleChange}
                                            className="input bg-gray-100 px-4 py-3 mt-3 w-full"
                                            placeholder="Confirm New Password"
                                        />
                                        <span
                                            className="absolute top-3 right-0 mt-3 mr-4 cursor-pointer"
                                            onClick={toggleConfirmPasswordVisibility}
                                        >
                                            {showConfirmNewPassword ? (
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
                                    {errors.confirmPassword && (
                                        <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
                                    )}
                                </label>
                            </div>
                            <div className="flex w-full justify-stretch gap-5">
                                <button type="button" className="w-full flex-1 btn hover:btn-info hover:text-white"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        navigate(-1);
                                    }}>
                                    Cancel
                                </button>
                                <button type="submit" className="w-full md:mt-0 flex-1 btn btn-primary text-base-100 hover:bg-[#1357B8]">
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default ChangePassword;
