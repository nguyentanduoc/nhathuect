import { createContext, ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fakeAuth } from "../services/auth";

interface IAuthContext {
  token?: string;
  onLogin: () => void;
  onLogout: () => void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

interface IAuthProviderProps {
  children: ReactElement;
}
export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [token, setToken] = useState<string>();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const token = await fakeAuth();
    navigate("/detail");
    setToken(token);
  };

  const handleLogout = () => {
    setToken(undefined);
  };

  const value: IAuthContext = {
    token,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
