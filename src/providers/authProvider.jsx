import axios from "axios";
import { createContext, useContext, useState, useEffect, useMemo } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get("https://backend.loglife.prutmongkol.dev/token", {
          withCredentials: true,
        });
        if (response.status === 200) {
          setUser(response.data.user);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getUser();
  }, []);

  const contextValue = useMemo(() => ({ user, setUser }), [user]);

  return (
    <AuthContext.Provider value={contextValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthProvider;
