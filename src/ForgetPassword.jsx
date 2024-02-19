import { useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import Layout from "./Layout";

function ForgetPassword() {
    const MySwal = withReactContent(Swal);
    const [emailAddress, setEmailAddress] = useState({
        emailAddress: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmailAddress({
            ...emailAddress,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'https://659cbd33633f9aee7907e27c.mockapi.io/kiki/users',
                emailAddress
            );
            if (response.status === 201) {
                MySwal.fire({
                    icon: 'success',
                    text: 'Email sent successfully! Please check your email.',
                    confirmButtonColor: '#6587E8',
                })
            } else {
                MySwal.fire({
                    icon: 'error',
                    text: 'Invalid email address.',
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
                        <h1 className="font-medium text-2xl mt-3 text-center">Password Reset</h1>
                        <form className="mt-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email" className="block text-black">Email Address</label>
                                <input
                                    type="email"
                                    name="emailAddress"
                                    id="emailAddress"
                                    className="input bg-gray-100 rounded-sm px-4 py-3 mt-3 w-full"
                                    placeholder="Email Address"
                                    value={emailAddress.emailAddress}
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="submit" className="block text-center text-white bg-primary my-8 py-[14.5px] duration-300 rounded-lg hover:bg-secondary w-full">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ForgetPassword;
