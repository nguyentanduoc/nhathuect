import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

const Home = () => {
  const { onLogin } = useContext(AuthContext);
  return (
    <div>
      <button onClick={onLogin}>logon</button>
    </div>
  );
};

export default Home;
