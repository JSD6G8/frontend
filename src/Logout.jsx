import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./providers/authProvider";
import axios from "axios";

function Logout() {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogout = async () => {
      const response = await axios.post("https://jsd6-loglife-backend.onrender.com/logout", null, {
        withCredentials: true,
      });
      if (response.status === 200) {
        setUser(null);
        navigate("/", { replace: true });
      }
    };

    handleLogout();
  }, []);

  return (
    <div className="grid h-screen w-screen place-items-center bg-gray-100">
      <h1 className="text-3xl">Logging you out...</h1>
    </div>
  );
}

export default Logout;
