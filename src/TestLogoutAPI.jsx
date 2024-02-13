import Layout from "./Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./providers/authProvider";

const TestLogoutAPI = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const handleLogout = async () => {
    const response = await axios.post("http://127.0.0.1:3000/logout", null, {
      withCredentials: true,
    });
    console.log(response);
    if (response.status === 200) {
      setUser(null);
      navigate("/", { replace: true });
    }
  };

  const handleRequestToken = async () => {
    const response = await axios.get("http://127.0.0.1:3000/token", {
      withCredentials: true,
    });
    console.log(response);
  };

  return (
    <Layout>
        <button onClick={handleLogout}>Logout</button>
        <button onClick={handleRequestToken}>Request Token</button>
        <p>user: {user}</p>
    </Layout>
  );
};

export default TestLogoutAPI;
