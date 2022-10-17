import { Navigate } from "react-router-dom";
import { TOKEN_KEY } from "../constant/LocalStogate";
interface IRequireAuthProps {
  children: JSX.Element;
}
const RequireAuth = ({ children }: IRequireAuthProps) => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (!token) {
    return <Navigate to="/denied" replace />;
  }
  return children;
};

export default RequireAuth;
