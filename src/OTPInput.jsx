import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import Layout from "./Layout";

function OTPInput() {

    const MySwal = withReactContent(Swal);
    const navigate = useNavigate();

    const [OTPinput, setOTPinput] = useState(['', '', '', '']);

    const handleChange = (e, index) => {
        const { value } = e.target;
        setOTPinput(prevState => {
            const newState = [...prevState];
            newState[index] = value;
            return newState;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const otp = OTPinput.join('');
            const response = await axios.post(
                'https://659cbd33633f9aee7907e27c.mockapi.io/kiki/users',
                { OTP: otp }
            );
            if (response.status === 201) {
                MySwal.fire({
                    icon: 'success',
                    text: 'Your email has been verified. You can reset password.',
                    confirmButtonColor: '#6587E8',
                }).then(() => {
                    navigate('/reset-password');
                });
            } else {
                MySwal.fire({
                    icon: 'error',
                    text: 'The OTP you have entered is not correct, try again or re-send the link',
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

    return (
        <Layout>
            <div className="h-screen">
                <div className="bg-white mx-auto my-20 shadow-md rounded-xl w-10/12 max-w-lg">
                    <div className="p-8">
                        <h1 className="font-medium text-2xl mt-3 text-center">Email Verification</h1>
                        <form onSubmit={handleSubmit} className="mt-6">
                            <div className="py-6">
                                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                                    {[0, 1, 2, 3].map((index) => (
                                        <div className="w-16 h-16" key={index}>
                                            <input
                                                className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-gray-100 focus:bg-gray-50 focus:ring-1 ring-accent"
                                                type="text"
                                                value={OTPinput[index]}
                                                maxLength={1}
                                                pattern="[0-9]"
                                                title="Please enter numbers only (0-9)"
                                                onChange={(e) => handleChange(e, index)}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <button type="submit" className="block text-center text-white bg-primary my-8 py-[14.5px] duration-300 rounded-lg hover:bg-secondary w-full">
                                Verify Account
                            </button>
                        </form>
                        <p className="mt-10 text-sm text-center font-light text-gray-400">Didn't receive code? <a href="/forget-password" target="_blank" className="text-black font-medium hover:underline">Resend</a></p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default OTPInput;
