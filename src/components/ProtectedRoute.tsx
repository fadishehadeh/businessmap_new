import { useAuth } from "@/context/AuthContext";
import Password from "@/pages/Password";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Password />;
  }

  return <>{children}</>;
};

