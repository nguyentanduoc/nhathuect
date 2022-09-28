import { useAuth } from "../../hooks/useAuth";

const Detail = () => {
  const { token, onLogout } = useAuth();
  console.log(token);
  return (
    <div>
      Detail{token}
      <button onClick={onLogout}>logon</button>
    </div>
  );
};

export default Detail;
