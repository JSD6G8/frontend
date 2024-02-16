import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import Layout from "./Layout";

function EditProfile() {
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        emailAddress: ""
    });

    const MySwal = withReactContent(Swal);
    const navigate = useNavigate();


    //ti's work only with API mock up 
    const userId = 1;
    useEffect(() => {
        axios.get(`https://65cad4afefec34d9ed86573b.mockapi.io/loglife/membership/${userId}`)
            .then(response => {
                const data = response.data;
                setUserData({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    emailAddress: data.emailAddress,
                    avatar: data.avatar,
                    background: data.background,
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [userId]);

    const saveProfile = () => {
        axios.put(`https://65cad4afefec34d9ed86573b.mockapi.io/loglife/membership/${userId}`, userData)
            .then(response => {
                console.log('Success:', response.data);
                MySwal.fire({
                    icon: 'success',
                    text: 'Edit profile successfully!',
                    confirmButtonColor: '#6587E8',
                });
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        if (name === "emailAddress") {
            return;
        }
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <Layout>
            <div className="bg-white mx-auto p-8 my-10 shadow-md rounded-xl w-10/12 max-w-xl">
                <div>
                    <h1 className="font-medium text-2xl pb-8 text-center">Edit Profile</h1>
                </div>
                <div className="h-48 overflow-hidden md:h-64 lg:h-[150px]">
                    <img className="object-cover object-top w-full" src={userData.background} alt='Mountain' />
                </div>
                <div>
                    <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                        <img className="object-cover object-center h-32" src={userData.avatar} alt='Profile' />
                    </div>
                </div>
                <div>
                    <div>
                        <form>
                            <div className="my-8">
                                <label>First Name
                                    <input
                                        type="text"
                                        name="firstName"
                                        id="firstName"
                                        value={userData.firstName}
                                        onChange={handleInputChange}
                                        className="input bg-gray-100 px-4 py-3 mt-3 w-full"
                                        placeholder="First Name"
                                    />
                                </label>
                            </div>
                            <div className="my-8">
                                <label>Last Name
                                    <input
                                        type="text"
                                        name="lastName"
                                        id="lastName"
                                        value={userData.lastName}
                                        onChange={handleInputChange}
                                        className="bg-gray-100 input px-4 py-3 mt-3 w-full"
                                        placeholder="Last Name"
                                    />
                                </label>
                            </div>
                            <div className="my-8">
                                <label>Email Address
                                    <input
                                        type="text"
                                        name="emailAddress"
                                        id="emailAddress"
                                        readOnly
                                        value={userData.emailAddress}
                                        onChange={handleInputChange}
                                        className="input bg-gray-200 px-4 py-3 mt-3 w-full hover:outline-none hover:border-none active:outline-none active:border-none focus:outline-none"
                                        placeholder="Email Address"
                                    />
                                </label>
                            </div>
                            <div className="flex w-full justify-stretch gap-5">
                                <button type="button" className="btn flex-auto hover:btn-info hover:text-white"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        navigate(-1);
                                    }}>
                                    Cancel
                                </button>
                                <button type="button" onClick={saveProfile} className="btn btn-primary flex-auto text-base-100 hover:bg-[#1357B8]">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default EditProfile;
