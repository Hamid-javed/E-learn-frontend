import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./General/Loader";

const URL = import.meta.env.VITE_URL;

const CheckLogin = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchAuthStatus = async () => {
      try {
        const response = await fetch(`${URL}auth/check`, {
          credentials: "include",
        });
        if (response.status === 200) {
          setIsAuthenticated(true);
        } else {
          navigate("/login");
        }
      } catch (error) {
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchAuthStatus();
  }, [navigate]);

  if (loading) {
    return <Loader />; // Show loader while checking authentication
  }

  return isAuthenticated ? children : null; // Render the protected content if authenticated
};

export default CheckLogin;
