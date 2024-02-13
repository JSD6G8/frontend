import Layout from "./Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./providers/authProvider";

const TestLoginAPI = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();

  const handleLogin = async () => {
    const response = await axios.post("http://127.0.0.1:3000/login", {
      emailAddress: "opolee@gmail.com",
      password: "Jtcdmw1@",
    }, {
      withCredentials: true,
    });
    console.log(response);
    if (response.status === 200) {
      setUser(response.data.user.userId);
      navigate("/test-logout-api", { replace: true });
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
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleRequestToken}>Request Token</button>
        <p>user: {user}</p>
    </Layout>
  );
};

export default TestLoginAPI;
