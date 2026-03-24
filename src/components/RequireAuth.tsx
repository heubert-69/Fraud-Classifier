import { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { isAuthenticated } from "@/lib/auth";

interface Props { children: ReactNode }

const RequireAuth = ({ children }: Props) => {
  const location = useLocation();

  if (!isAuthenticated()) {
    // Redirect to login, keep the current location for redirect after login
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default RequireAuth;
