import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
interface IRequireAuthProps {
  children: JSX.Element;
}
const RequireAuth = ({ children }: IRequireAuthProps) => {
  const { token } = useContext(AuthContext);
  if (!token) {
    return <Navigate to="/denied" replace />;
  }
  return children;
};

export default RequireAuth;
