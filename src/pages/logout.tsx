import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { clearToken } from "@/lib/auth";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    clearToken();
    // small timeout to allow storage to clear, then navigate
    navigate("/login", { replace: true });
  }, [navigate]);

  return null;
};

export default Logout;
