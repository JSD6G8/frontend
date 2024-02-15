import { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from './Layout';

function UserProfile() {
    const [userData, setUserData] = useState({
        user: {
            first_name: "",
            last_name: "",
        }
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://jsd6-loglife-backend.onrender.com/users/me`,
            {
                withCredentials: true,
            })
            .then(response => {
                const data = response.data;
                setUserData({
                    user: {
                        first_name: data.user.first_name,
                        last_name: data.user.last_name,
                    }
                });
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    });

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <Layout>
            <div className="mb-10 md:mb-20 md:font-medium">
                <div className="h-48 overflow-hidden md:h-64 lg:h-[250px]">
                    <img className="object-cover object-top w-full" src="https://img5.pic.in.th/file/secure-sv1/3674_modern_abstract_background_with_retro_memphis_elements_and_light_blue_color_10.jpeg" alt='Background' />
                </div>
                <div>
                    <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
                        <img src="http://placekitten.com/200/300" alt='profile' />
                    </div>
                </div>
                <div>
                    <h3 className="text-center font-medium text-2xl my-3 md:my-6 ">{userData.user.first_name} {userData.user.last_name}</h3>
                    <h3 className="text-center font-medium text-2xl my-3 md:my-6 ">{userData.user.emailAddress }</h3>
                </div>
                <div className="bg-white mx-auto shadow-md rounded-xl w-10/12 max-w-lg">
                    <div>
                        <a href="/profile/edit">
                            <div className="flex text-lg justify-between items-center px-6 py-4 hover:bg-gray-200 hover:rounded-t-xl">
                                <h4>Edit Your Account</h4>
                                <span className="material-symbols-outlined text-[15px]">
                                    arrow_forward_ios
                                </span>
                            </div>
                        </a>
                        <a href="/change-password">
                            <div className="flex text-lg justify-between items-center px-6 py-4 hover:bg-gray-200">
                                <h4>Change Your Password</h4>
                                <span className="material-symbols-outlined text-[15px]">
                                    arrow_forward_ios
                                </span>
                            </div>
                        </a>
                        <a href="/logout">
                            <div className="flex text-lg justify-between items-center px-6 py-4 hover:bg-gray-200 hover:rounded-b-xl text-info">
                                <h4>Logout</h4>
                                <i className="fa-solid fa-right-to-bracket fa-lg text-info"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default UserProfile;
